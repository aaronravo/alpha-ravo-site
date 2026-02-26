# Auto commit

Two ways to get "auto commit" in this project:

---

## 1. Ask in Cursor

Say **"commit"** or **"auto commit"** or **"push"**. The AI will run `git add`, `git commit`, and `git push origin main` (and sync to alpha-ravo-site if needed).

---

## 2. Extension: commit on save

To have changes committed automatically when you save a file:

1. In Cursor, open **Extensions** (Cmd+Shift+X).
2. Search for **Auto Git Commit and Push** (by YogeshValiya) or **AutoCommitter**.
3. Install one of them.
4. Configure it (e.g. commit message template, whether to push on save, which folders to include).

Then every save can trigger a commit (and optional push). Use with care so you don’t push half-finished work.

---

**This repo:** `origin` = **aaronravo/alpha-ravo** on GitHub. Pushing to `main` triggers Vercel if the project is connected with Root Directory = `website`.
