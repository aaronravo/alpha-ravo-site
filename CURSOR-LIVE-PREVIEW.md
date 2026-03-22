# Live preview in Cursor (this project)

This repo includes **workspace settings** in `.vscode/settings.json` that:

- Serve the site from the **`website/`** folder (correct paths for `styles.css`, `main.js`)
- Use **Embedded Preview** (internal browser)
- **Auto-refresh** the preview on HTML/CSS/JS edits (even before save)
- **Auto-save** after 500ms of idle typing

## 1) Install Live Preview (Microsoft) — required once

Cursor may prompt **“This workspace has extension recommendations”** → click **Install** for **Live Preview**.

If you don’t see that:

1. `Cmd + Shift + X` → search **Live Preview**
2. Publisher: **Microsoft** — install **Live Preview** (`ms-vscode.live-server`)

## 2) Open the internal preview

1. Open **`website/index.html`**
2. `Cmd + Shift + P` → run **Live Preview: Show Preview (Internal Browser)**

*(With this project’s settings, the server root is `website/`, so asset links resolve correctly.)*

## 3) Split layout: preview on the **left**, code on the **right**

Editor tab order isn’t fully controllable by the repo alone — do this once per session (or drag tabs how you like):

1. With **preview** and **`index.html`** both open, click and **drag the preview tab** to the **left** of the editor group until the drop zone highlights the **left half** of the window, then release  
   **OR** use **View → Editor Layout → Two Columns**, then **drag** the preview column to the left.

Goal: **Live site left** · **code right**.

## 4) Editing loop

- Edit **`website/index.html`**, **`website/styles.css`**, **`website/main.js`**
- Auto-save runs after a short pause; preview also refreshes on **unsaved** edits (`livePreview.autoRefreshPreview`: *On All Changes in Editor*)

---

**Go live on alpharavo.com:** Run `./sync-site.sh` from the Alpha Ravo repo root (or ask in chat to commit, push, and sync). See **GET-TO-PRODUCTION.md**.
