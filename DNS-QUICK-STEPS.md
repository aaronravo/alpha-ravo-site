# DNS Setup - Copy/Paste Checklist

## Step 1: Get Nameservers from Vercel (2 minutes)

1. Go to: **https://vercel.com/dashboard**
2. Click your **alpha-ravo** project
3. Click **Settings** tab (top)
4. Click **Domains** (left sidebar)
5. Click **Edit** button next to `alpharavo.com`
6. You'll see **"Nameservers"** section with 2-4 nameservers like:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
   - (maybe more)
7. **Copy all of them** (you'll paste into Namecheap)

---

## Step 2: Update Nameservers in Namecheap (3 minutes)

1. Go to: **https://www.namecheap.com/myaccount/login/**
2. Log in
3. Click **Domain List** (left sidebar)
4. Find **alpharavo.com** → click **Manage** button
5. Click **Advanced DNS** tab (top)
6. Scroll down to **"Nameservers"** section
7. Change dropdown from **"Namecheap BasicDNS"** to **"Custom DNS"**
8. **Paste the nameservers** from Vercel (one per field)
9. Click **Save** (green button)

---

## Step 3: Wait & Verify (15-30 minutes)

1. Wait 15-30 minutes (DNS propagation)
2. Go back to Vercel: **Settings** → **Domains**
3. Click **Refresh** button next to each domain
4. Both should show **"Valid Configuration"** ✅

**Done.** Your site will be live at `alpharavo.com` and `www.alpharavo.com`.

---

**Total time:** ~5 minutes of actual work, then wait 15-30 min.
