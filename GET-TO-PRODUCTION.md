# Get the site to production

Your local preview looks good. To go live at **alpharavo.com**:

---

## 1. Deploy (code → Vercel)

The repo **alpha-ravo-site** is what Vercel deploys. When you run the sync script, the latest site is pushed there and Vercel auto-deploys.

**From your Mac (in Terminal or Cursor terminal):**
```bash
cd "/Users/aaronravo/Documents/Cursor/Alpha Ravo"
./sync-site.sh
```

- If you change the site in **Alpha Ravo** (this project), run `./sync-site.sh` again before you expect to see updates in production.

**In Vercel (one-time check):**
- Go to **https://vercel.com/dashboard** → your project.
- **Settings → Git**: Connected repo should be **aaronravo/alpha-ravo-site**, **Root Directory** left **empty**.
- **Deployments**: After a sync, a new deployment should appear and finish in 1–2 minutes. The **Production** URL (e.g. `https://alpha-ravo-xxx.vercel.app`) is your live site until the domain is connected.

---

## 2. Point the domain (alpharavo.com → Vercel)

So **alpharavo.com** opens your site:

**A. Get nameservers from Vercel**
1. **vercel.com** → your project → **Settings** → **Domains**.
2. Add **alpharavo.com** if it’s not there, then click **Edit** next to it.
3. Copy the **nameservers** (e.g. `ns1.vercel-dns.com`, `ns2.vercel-dns.com`).

**B. Set them in Namecheap**
1. **namecheap.com** → log in → **Domain List** → **Manage** next to **alpharavo.com**.
2. Open **Advanced DNS**.
3. Under **Nameservers**, switch to **Custom DNS** and paste Vercel’s nameservers.
4. **Save**.

**C. Wait and verify**
- Wait 15–30 minutes (sometimes up to 48 hours).
- In Vercel **Settings → Domains**, click **Refresh** next to `alpharavo.com` and `www.alpharavo.com`. Both should show **Valid Configuration**.
- Open **https://alpharavo.com** and **https://www.alpharavo.com** in your browser.

---

## Summary

| Step | Action |
|------|--------|
| **Deploy** | Run `./sync-site.sh` when you have new changes. Vercel deploys from **alpha-ravo-site**. |
| **Domain** | In Namecheap, set **alpharavo.com** nameservers to the ones Vercel gives you. |
| **Live** | After DNS propagates, production = **https://alpharavo.com**. |

More detail: **DNS-QUICK-STEPS.md** (same folder).
