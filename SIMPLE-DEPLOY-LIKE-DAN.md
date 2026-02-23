# Why Aaron’s setup got complicated (and how to make it like yours)

**Your setup (Dan):** One repo → push to GitLab (or GitHub) → Vercel is connected to that repo → DNS + hosting. Push = deploy. Simple.

**Aaron’s setup today:** Two repos and a sync script.

- **alpha-ravo** (this Cursor project) = where the site is actually edited.
- **alpha-ravo-site** = a separate repo that Vercel is (or was) connected to.
- Because the “deploy” repo wasn’t the same as the “edit” repo, someone added **sync-site.sh**: copy `website/` into alpha-ravo-site, then push there. So every deploy = run the script, not “push from Cursor.”

That’s why it feels more complicated than your flow.

---

## Make it simple (same as yours): one repo, push = deploy

**One-time change in Vercel:**

1. Go to **https://vercel.com/dashboard**.
2. Open the project that’s supposed to serve Aaron’s site (alpharavo.com).
3. **Settings** → **Git**.
4. **Disconnect** the current repo (alpha-ravo-site, if that’s what’s connected).
5. **Connect** the repo Aaron actually uses: **aaronravo/alpha-ravo** (GitHub).
6. Set **Root Directory** to **`website`** (so Vercel builds from the folder that has `index.html`).
7. Save. Trigger a deploy from the **main** branch if needed.

**From then on:**

- Aaron (or you) edits in Cursor in **Alpha Ravo**.
- Push to GitHub: `git add .` → `git commit -m "..."` → `git push origin main`.
- Vercel auto-deploys from **alpha-ravo**. No sync script, no second repo.

**DNS:** Stays the same. Point alpharavo.com at Vercel (nameservers or A/CNAME) as you already have (or in Namecheap). No change there.

---

## Summary

| Before (complicated) | After (like Dan’s) |
|----------------------|--------------------|
| Edit in alpha-ravo, run sync-site.sh → alpha-ravo-site, Vercel deploys alpha-ravo-site | Edit in alpha-ravo, push to GitHub → Vercel deploys alpha-ravo |
| Two repos | One repo |
| Sync script required | Just `git push` |

So: it’s complicated in Aaron’s world because deploy was tied to a **different** repo than the one he works in. Point Vercel at **alpha-ravo** with root **website** and it becomes “push from Cursor = production,” same idea as your GitLab + Vercel flow.
