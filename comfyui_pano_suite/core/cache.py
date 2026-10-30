"""The one cache this package keeps across executions, bounded by bytes (`docs/runtime-resources.md`).

Each entry is a value under a namespace and a key. The cache holds at most `limit()` bytes: the smaller of
`CACHE_MAX_BYTES` and `CACHE_FREE_SHARE` of the free RAM (counting what the cache already holds as free), and at most
`CACHE_MAX_ENTRIES` entries, evicting the least recently used. A value larger than the limit is not kept. Arrays are
kept as given and handed out read-only: callers must not write to what they get or put, and nothing is copied.
"""
import threading
from collections import OrderedDict
from contextlib import contextmanager

import numpy as np
import torch

# The most the cache keeps, whatever the free RAM.
CACHE_MAX_BYTES = 4 * 1024 ** 3
# The share of the free RAM the cache may keep.
CACHE_FREE_SHARE = 0.25
# Entries that hold paths of temp files count no bytes; their number is bounded.
CACHE_MAX_ENTRIES = 256


def nbytes(value) -> int:
    """The bytes of the arrays and tensors in `value`: an array or tensor, a list, tuple, or dict of them, or an
    object holding them as attributes (SPLAT, MESH). Anything else counts 0."""
    if isinstance(value, np.ndarray):
        return value.nbytes
    if isinstance(value, torch.Tensor):
        return value.numel() * value.element_size()
    if isinstance(value, dict):
        return sum(nbytes(item) for item in value.values())
    if isinstance(value, (list, tuple)):
        return sum(nbytes(item) for item in value)
    if hasattr(value, "__dict__") and not callable(value):
        return sum(nbytes(item) for item in vars(value).values())
    return 0


def _read_only(value):
    if isinstance(value, np.ndarray):
        value.flags.writeable = False
    elif isinstance(value, dict):
        for item in value.values():
            _read_only(item)
    elif isinstance(value, (list, tuple)):
        for item in value:
            _read_only(item)


class MemoryCache:
    """A least-recently-used cache bounded by bytes. `free_memory()` returns the free RAM in bytes; the host sets it
    (`node_runtime.py` sets ComfyUI's). Without it, the limit is `max_bytes`."""

    def __init__(self, max_bytes: int = CACHE_MAX_BYTES, free_share: float = CACHE_FREE_SHARE, max_entries: int = CACHE_MAX_ENTRIES,
                 free_memory=None):
        self.max_bytes = max_bytes
        self.free_share = free_share
        self.max_entries = max_entries
        self.free_memory = free_memory
        self._entries = OrderedDict()
        self._bytes = 0
        self._lock = threading.Lock()
        # (namespace, key) -> [its lock, the callers holding or waiting for it]
        self._key_locks = {}

    @property
    def bytes(self) -> int:
        return self._bytes

    def limit(self) -> int:
        if self.free_memory is None:
            return self.max_bytes
        return min(self.max_bytes, int((self.free_memory() + self._bytes) * self.free_share))

    def get(self, namespace: str, key):
        with self._lock:
            entry = self._entries.get((namespace, key))
            if entry is None:
                return None
            self._entries.move_to_end((namespace, key))
            return entry[0]

    def put(self, namespace: str, key, value):
        """Keep `value` (made read-only) under `key` when it fits, and return it."""
        _read_only(value)
        size = nbytes(value)
        with self._lock:
            old = self._entries.pop((namespace, key), None)
            if old is not None:
                self._bytes -= old[1]
            limit = self.limit()
            if size > limit:
                return value
            self._entries[(namespace, key)] = (value, size)
            self._bytes += size
            while self._bytes > limit or len(self._entries) > self.max_entries:
                _key, (_value, evicted) = self._entries.popitem(last=False)
                self._bytes -= evicted
        return value

    @contextmanager
    def _locked(self, namespace: str, key):
        """Hold the lock of one key, so that callers of the same key run one at a time and other keys do not wait."""
        with self._lock:
            entry = self._key_locks.setdefault((namespace, key), [threading.Lock(), 0])
            entry[1] += 1
        try:
            with entry[0]:
                yield
        finally:
            with self._lock:
                entry[1] -= 1
                if entry[1] == 0:
                    del self._key_locks[(namespace, key)]

    def get_or_put(self, namespace: str, key, make, valid=None):
        """The value under `key`, or `make()` kept there (None from `make` is returned and not kept). A kept value that
        `valid(value)` rejects is made again. Callers of the same key wait for each other, so concurrent callers (a
        running prompt and a server route) make it once."""
        with self._locked(namespace, key):
            value = self.get(namespace, key)
            if value is not None and (valid is None or valid(value)):
                return value
            value = make()
            return value if value is None else self.put(namespace, key, value)

    def clear(self):
        with self._lock:
            self._entries.clear()
            self._bytes = 0


CACHE = MemoryCache()
