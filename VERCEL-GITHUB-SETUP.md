# Vercel + GitHub: Step-by-Step Setup

Get your Alpha Ravo site live using GitHub (code storage) and Vercel (hosting).

---

## Part 1: Put Your Code on GitHub

### 1.1 Create a GitHub account (if you don’t have one)

- Go to **[github.com](https://github.com)** and sign up (free).

### 1.2 Create a new repository on GitHub

- Click the **+** (top right) → **New repository**.
- **Repository name:** `alpha-ravo` (or whatever you like).
- **Visibility:** Public.
- **Do not** check “Add a README” (you already have files).
- Click **Create repository**.

### 1.3 Initialize Git in your project and push

Open **Terminal** (Mac) or **Command Prompt / PowerShell** (Windows) and run these commands from your **Alpha Ravo** project folder (the folder that contains `website`, `docs`, `business`, etc.):

```bash
# Go to your project (replace with your actual path if different)
cd "/Users/aaronravo/Documents/Cursor/Alpha Ravo"

# Initialize Git (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Alpha Ravo website and docs"

# Add GitHub as remote (replace YOUR_USERNAME and YOUR_REPO with your GitHub username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/alpha-ravo.git

# Rename branch to main (if needed) and push
git branch -M main
git push -u origin main
```

**Replace** `YOUR_USERNAME` with your GitHub username and `alpha-ravo` with your repo name if you used something else.

- If Git asks for login: use your GitHub username and a **Personal Access Token** (not your password). Create one at: GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Generate new token**, and use it when prompted for password.

---

## Part 2: Deploy on Vercel from GitHub

### 2.1 Sign up / log in to Vercel

- Go to **[vercel.com](https://vercel.com)**.
- Click **Sign Up** and choose **Continue with GitHub**.
- Authorize Vercel to access your GitHub account.

### 2.2 Import your repository

- On the Vercel dashboard, click **Add New…** → **Project**.
- Under **Import Git Repository**, find **alpha-ravo** (or your repo name) and click **Import**.

### 2.3 Set the root directory (IMPORTANT - Vercel will only deploy the public site)

Your site files are in the **website** folder, not the repo root. This ensures Vercel only deploys your public website (`website/index.html`, `website/styles.css`, etc.) and **not** your private business docs, product plans, or investor materials.

- Next to **Root Directory**, click **Edit**.
- Enter: **website**
- Leave **Framework Preset** as **Other** (or **Vite** if you prefer; for a static site it doesn’t matter).
- **Build Command:** leave empty.
- **Output Directory:** leave empty (Vercel will serve the root of `website`, which has `index.html`).

**This is critical:** Setting Root Directory to `website` means Vercel will only see and deploy files in that folder. Your `business/`, `docs/`, and `product/` folders will remain private in GitHub but won’t be deployed publicly.

### 2.4 Deploy

- Click **Deploy**.
- Wait for the build to finish. Vercel will show a URL like **`https://alpha-ravo-xxxx.vercel.app`**.

Your site is now live.

---

## Part 3: Optional – Custom domain and future updates

### Updates

When you change code:

1. Commit and push to GitHub:
   ```bash
   cd "/Users/aaronravo/Documents/Cursor/Alpha Ravo"
   git add .
   git commit -m "Describe your change"
   git push
   ```
2. Vercel will automatically redeploy (usually within a minute).

### Custom domain

- In Vercel: open your project → **Settings** → **Domains**.
- Add your domain (e.g. `alpharavo.com`) and follow the DNS instructions Vercel shows.

---

## Quick reference

| Step            | Where        | What to do                                      |
|-----------------|-------------|--------------------------------------------------|
| Create repo     | github.com  | New repository, name it (e.g. `alpha-ravo`)     |
| Push code       | Terminal    | `git init`, `add`, `commit`, `remote`, `push`   |
| Deploy          | vercel.com  | Import repo, set Root Directory to **website** |
| Live URL        | Vercel      | e.g. `https://alpha-ravo-xxxx.vercel.app`       |

If any step fails, copy the error message and we can fix it.
