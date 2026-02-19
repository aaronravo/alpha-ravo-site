# Easiest way: GitHub CLI (one-time setup, then 2 commands)

## 1. Install GitHub CLI (one time)

**Mac (Homebrew):**
```bash
brew install gh
```

No Homebrew? Get it: https://brew.sh — or download `gh` from https://cli.github.com

## 2. Log in (one time)

```bash
gh auth login
```

- Choose **GitHub.com**
- Choose **HTTPS**
- Authenticate: **Login with a web browser** (easiest) — copy the code, press Enter, paste code in browser. Done.

## 3. Create repo and push (every new project)

From your **Alpha Ravo** folder (the one that has `website`, `docs`, etc.):

```bash
cd "/Users/aaronravo/Documents/Cursor/Alpha Ravo"
gh repo create alpha-ravo --public --source=. --remote=origin --push
```

That’s it. This creates the repo on GitHub and pushes your code. No tokens, no manual repo creation, no password prompts.

---

**If the repo already exists** and you just need to push:

```bash
cd "/Users/aaronravo/Documents/Cursor/Alpha Ravo"
git push -u origin main
```

(With `gh auth login` already done, this just works — no token needed.)
