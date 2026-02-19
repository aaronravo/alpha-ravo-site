# Make Alpha Ravo Live

## What to upload

For the **live site**, upload these (from the `website` folder):

- `index.html`
- `styles.css`
- `main.js`
- `assets/` (folder with `alpha-ravo-logo.png` and `aaron-ravo.png`)

Do **not** upload `full-version/` or `notes.md` unless you want them public.

---

## Option A: Netlify (easiest, free)

1. Go to **[app.netlify.com](https://app.netlify.com)** and sign up (free).
2. Click **“Add new site”** → **“Deploy manually”**.
3. **Drag and drop** a folder that contains:
   - `index.html` (at the root of the folder)
   - `styles.css`
   - `main.js`
   - `assets/` (with your logo and photo inside)
4. Netlify will build and give you a URL like `https://random-name-123.netlify.app`.
5. (Optional) In **Site settings** → **Domain management** you can add a custom domain (e.g. `alpharavo.com`) or change the site name to `alpharavo` so you get `https://alpharavo.netlify.app`.

---

## Option B: Vercel (free)

1. Go to **[vercel.com](https://vercel.com)** and sign up.
2. **Add New** → **Project**.
3. If your code is in GitHub, connect the repo and set the **root directory** to `website` (or the folder that has `index.html`).
4. If not using Git: install Vercel CLI (`npm i -g vercel`), run `vercel` in the folder that contains `index.html`, and follow the prompts.

---

## Option C: GitHub Pages (free, uses Git)

1. Push your project to a GitHub repo.
2. In the repo: **Settings** → **Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Branch: `main` (or `master`), folder: **/ (root)**. If your site is in a `website` subfolder, set the branch to publish from that folder, or move `index.html` (and the rest) to the repo root.
5. Save. Your site will be at `https://yourusername.github.io/repo-name/`.

---

## After deploy

- Test the live URL: click all links (Instagram, form).
- (Optional) Wire the form to [Formspree](https://formspree.io) so you receive emails when someone clicks **Join**.
