# Live site – latest

## Your domain

**alpharavo.com** (and **www.alpharavo.com**)  
- Registered at **Namecheap**  
- Custom domain is set up in **Vercel** (project: alpha-ravo)

---

## Is the website good to go?

**Yes.** The site in this repo is ready:
- `website/index.html` – hero, founder, **Book coming soon**, testimonials, email signup  
- `website/styles.css` + `website/main.js` + `website/assets/`  
- No build step; static HTML/CSS/JS.

---

## What you need to see it live

Two things have to be true:

### 1. The site is deployed somewhere

From your setup you have two ways to get the **current** code (including Book coming soon) live:

- **Option A – Use the separate deploy repo (alpha-ravo-site)**  
  Run from your Mac (in Terminal, not in Cursor’s sandbox):
  ```bash
  cd "/Users/aaronravo/Documents/Cursor/Alpha Ravo"
  ./sync-site.sh
  ```
  That copies `website/` into `alpha-ravo-site`, commits, and pushes. If Vercel is connected to **that** repo, it will deploy.  
  **Note:** Last time we tried from here it failed (no write access to that folder + no GitHub auth in this env). You need to run it locally.

- **Option B – Deploy from this repo (alpha-ravo)**  
  In **Vercel** → your project → **Settings** → **Git**:  
  Connect **this** repo: `aaronravo/alpha-ravo`, set **Root Directory** to `website`.  
  Then from Cursor (or terminal):
  ```bash
  git add .
  git commit -m "Update site"
  git push origin main
  ```
  Vercel will build and deploy from the `website` folder.

### 2. DNS points to that host

So that **alpharavo.com** opens the site:

- In **Namecheap**: point the domain to Vercel (either switch nameservers to Vercel’s, or add the A + CNAME records Vercel shows).
- Steps: see **DNS-QUICK-STEPS.md** or **NAMECHEAP-DNS-SETUP.md** in this folder.

After DNS propagates (often 15–30 min), **https://alpharavo.com** and **https://www.alpharavo.com** will show your site.

---

## Summary

| Item            | Status |
|-----------------|--------|
| Domain          | **alpharavo.com** (Namecheap) |
| Site code       | Ready in `website/` (incl. Book coming soon) |
| GitHub commit   | Set up (push from Cursor works) |
| Deploy          | Run `./sync-site.sh` (Option A) **or** connect this repo in Vercel (Option B) |
| DNS             | Finish in Namecheap → Vercel (see DNS docs above) |

Once deploy + DNS are done, the site is live at **alpharavo.com**.
