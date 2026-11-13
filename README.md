# ComfyUI Panorama Stickers

[![English](https://img.shields.io/badge/README-English-3b82f6.svg)](./README.md)
[![日本語](https://img.shields.io/badge/README-日本語-e11d48.svg)](./README_JA.md)
[![中文](https://img.shields.io/badge/README-中文-16a34a.svg)](./README_ZH.md)

A ComfyUI node set for placing images, videos and 3D in a 360° panorama and shooting it from any viewpoint.

Fix the shot with an image generation model, then put it back where it was. You can do this round trip inside a ComfyUI workflow.

[![Panorama Stickers](https://img.youtube.com/vi/QnMhNTncaYI/maxresdefault.jpg)](https://youtu.be/QnMhNTncaYI)

## Panorama Studio

This is the core of the node set.

It handles a panorama as a distant view (Sky) and 3D as a space with depth (World), together. Things pasted on the Sky stay in the same direction wherever the Camera moves. Things placed in the World look different depending on the Camera's position.

The node has four inputs.

- `background`: the background panorama (image or video)
- `world`: the base 3D (a mesh, a Gaussian splat, or a shape estimated with MoGe or similar)
- `sticker`: images, videos and 3D to place in the scene. You can also add them by dropping them into the editor
- `scene`: carries over the scene of another Panorama Studio

In the editor, you move stickers and the Camera with Keyframes on the timeline, paint and draw masks, and shoot with the Camera. You can shoot a panorama (360° / 180°) or a normal camera view (Frame).

## Main uses

### Paste images to make a panorama

1. Drop images into the Panorama Studio editor and paste them anywhere on the panorama. You can paste as many as you like.
2. Set the Camera to panorama and shoot. You get a panorama with the pasted images surrounded by the background color.
3. Pass it to a generation model that uses a panorama LoRA, and it fills in the surroundings.

### Fix part of a panorama

1. Set the Camera to Frame and shoot the part you want to fix.
2. Fix the shot with a generation model.
3. Connect the fixed image, together with `sticker_state`, to the `sticker` of the next Panorama Studio. It goes back to exactly where it was shot.

### Re-shoot an image or video from another angle

1. Turn the image or video into 3D with MoGe or similar, and connect it to `world`.
2. In the editor, move the Camera and shoot from another angle.
3. Finish the missing parts of the shot with a generation model.

### Make a video

Connect a video to the background, or move stickers or the Camera with Keyframes, and the `video` output holds all the frames.

## Other nodes

- **Panorama Preview**: look around panorama images and videos, or a Studio `scene`, in a separate window.
- **Panorama Seam Prep**: moves the left-right seam of a panorama to the center, and makes a mask for fixing the seam.
- The earlier nodes (Panorama Stickers, Panorama Cutout, Panorama Preview (legacy)) still work as before.

## Installation

- Search for "Panorama Stickers" in ComfyUI Manager and install it.
- Requires ComfyUI 0.35.0 or later.

## Workflows

| Workflow | What it does |
|---|---|
| [qwen-image-2.1-360-erp-outpaint.json](./example_workflows/qwen-image-2.1-360-erp-outpaint.json) | Paste images to make a panorama (Qwen-Image 2.1) |
| [qwen-image-2.1-panorama-cutout.json](./example_workflows/qwen-image-2.1-panorama-cutout.json) | Shoot part of a panorama with the Camera, redraw it with Qwen-Image 2.1, and put it back where it was shot |
| [qwen-image-2.1-panorama-with-3d.json](./example_workflows/qwen-image-2.1-panorama-with-3d.json) | Place a 3D model (PLY) in a panorama, shoot it, and blend it into the background with Qwen-Image 2.1 |
| [qwen-image-2.1-moge3-anyangle.json](./example_workflows/qwen-image-2.1-moge3-anyangle.json) | Turn an image into 3D with MoGe 3, shoot it from another angle, and finish it with Qwen-Image 2.1 |
| [pika-h3-flex-moge3-crossview.json](./example_workflows/pika-h3-flex-moge3-crossview.json) | Turn a video into 3D with MoGe 3, shoot it with a new camera, and fill in what the original camera never saw with MiniMax H3 (Pika H3 Flex and the [CrossView-Warp](https://huggingface.co/Cseti/MiniMax-H3_Ref2VA-LoRA-CrossView-Warp_v1) LoRA by Cseti) |

## Troubleshooting

If only the editor is extremely slow, open `chrome://gpu` (`edge://gpu` for Edge) in the browser and check that WebGL says "Hardware accelerated". If it says "Software only", fully quit the browser and open it again.

## Changelog

- **2.1.1**: Faster rendering of 3D Gaussian splats in Panorama Studio output; fixed distant parts of a splat scene disappearing in some frames of a video.
- **2.1.0**: Zoom: Alt+wheel or a trackpad pinch changes the view's FOV, shown as a number with a home button that resets the view; the Studio always opens the new editor (the setting is gone); Timeline: box selection can start below the rows, the Length field updates the timeline while you drag it and can show frames or seconds, and fps/Length can be dragged from their names; a copy button for Easing values; Panorama Seam Prep stops the offset where the whole seam band fits; Shift+wheel works on Windows; fixes. **Breaking:** workflows saved with very old versions (legacy Panorama Stickers from 1.2.3 or earlier, legacy Panorama Preview from 1.5.1 or earlier, and stickers whose image was embedded in the state or given as a relative path) are no longer read as before: please rebuild those nodes.
- **2.0.3**: Objects received from an upstream Studio can be selected and edited in the downstream editor (saved as overrides); a shot returned through `sticker_state` always goes back to the Sky, wherever the Camera stood; paint can be rotated; double-click sets the orbit center in the Camera tab too; right-drag now pans and middle-drag looks around; the orbit center mark and a latitude-longitude grid on the Sky; fixes.
- **2.0.2**: Moving objects with a lens camera in the Camera tab; the Output window opens from the whole bar; depth-grid videos (MoGe, DA3) keep shape and color in step on slow connections and load ahead while paused; fixes.
- **2.0.1**: The Studio editor shows the output size at all times and keeps the inspector the same across tabs; objects can be moved in the Camera tab; the node shows depth grids (MoGe, DA3) and the upstream scene, and can play; paint can be grabbed and moved; fixes.
- **2.0.0**: Added Panorama Studio and the new Panorama Preview.
- **1.5.0**: Added light on-node UIs to Stickers, Cutout and Preview.
- **1.4.0**: Rebuilt Cutout's Frame editing as a crop-style camera editor.
- **1.3.0**: Added support for video and 180° panoramas.
- **1.2.0**: Added paint and mask.
- **1.1.0**: Moved rendering to WebGL, and made it possible to put images made with Cutout back with Stickers.

## Acknowledgements

This project was influenced by the work of [ProGamerGov](https://github.com/ProGamerGov):

- [ComfyUI_pytorch360convert](https://github.com/ProGamerGov/ComfyUI_pytorch360convert)
- [html-360-viewer](https://github.com/ProGamerGov/html-360-viewer) (also handy for quickly viewing an ERP image in the browser: [demo](https://progamergov.github.io/html-360-viewer/))

## License

MIT
