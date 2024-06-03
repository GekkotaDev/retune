---
group: Layouts
title: Window
---

# Window

The bare minimum layout necessary for a functioning window. This does not assume responsibility of any parts of the UI shell by itself, subordinating it to dependent layouts.

## Slots

| Name    | Description      |
| ------- | ---------------- |
| Default | Everything else. |

## State

### Titlebar

Window titlebar implemented as a Pinia store. Appears at the global menu bar if on macOS, otherwise implemented within the window itself.

| Property  | Description  |
| --------- | ------------ |
| `title` | Window title |
| `menus` | Menus        |
