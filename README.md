# Invert

A lightweight Manifest V3 browser extension that inverts the colors of every website.

## Features

- Inverts the entire page: text, backgrounds, images, video, SVG and canvas.
- One-click on/off switch in the toolbar popup.
- Setting syncs across open tabs and new pages.
- Enabled by default.
- No analytics, tracking, or external requests.

The page filter uses `invert(1) hue-rotate(180deg)`. The hue rotation keeps many familiar colors closer to their original hue while the inversion swaps light and dark.

## Install

### Chrome, Edge, Brave and other Chromium browsers

1. Download or clone this repository.
2. Open `chrome://extensions`.
3. Turn on **Developer mode**.
4. Select **Load unpacked** and choose this folder.
5. Pin **Invert** to your toolbar and use its switch.

### Firefox

1. Open `about:debugging#/runtime/this-firefox`.
2. Select **Load Temporary Add-on…**.
3. Choose the `manifest.json` file in this folder.

## Notes

Browser-internal pages, extension stores, and other restricted browser surfaces cannot be modified by extensions. Some websites may also apply their own visual effects that interact with CSS filters.
