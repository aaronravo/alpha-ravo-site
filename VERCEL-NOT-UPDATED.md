# Vercel not showing updates – checklist

The code in **alpha-ravo-site** (and in this repo) has the latest site including "Book coming soon." If Vercel still shows the old version:

---

## 1. Confirm which Vercel project serves the site

- Go to **https://vercel.com/dashboard**
- You might have more than one project (e.g. one from **alpha-ravo**, one from **alpha-ravo-site**).
- Open the project that you use for **alpharavo.com** (or the URL you actually visit).

---

## 2. Check Git connection and Root Directory

In that project: **Settings → Git**.

- **Connected repository**  
  - If you use **sync-site.sh**: it should be **aaronravo/alpha-ravo-site**.  
  - If you deploy from this repo only: **aaronravo/alpha-ravo**.
- **Root Directory**  
  - For **alpha-ravo-site**: leave **empty** (files are at repo root).  
  - For **alpha-ravo**: set to **`website`**.

Save if you change anything.

---

## 3. Force a new deploy

- Go to **Deployments**.
- Open the **latest** deployment → click **⋯** (three dots) → **Redeploy**.
- Or: **Deployments → Create Deployment** and deploy the latest commit from `main`.

Wait for the new deployment to finish (usually 1–2 minutes).

---

## 4. Bypass cache when viewing

- Open the site in an **Incognito/Private** window, or  
- Hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac).

---

## 5. If it’s still old

Tell me:
- The exact URL you’re opening (e.g. `https://alpharavo.com` or a `*.vercel.app` URL).
- In Vercel, for that project: which repo is connected and what is Root Directory set to?

Then we can adjust the setup or add a redeploy step to your flow.
