# Namecheap DNS Setup for Vercel

Your domains `alpharavo.com` and `www.alpharavo.com` are added to Vercel but show "Invalid Configuration" until DNS is configured.

---

## Option 1: Use Vercel's Nameservers (Easiest - Recommended)

**Best for:** Simple setup, Vercel manages DNS automatically.

### Steps:

1. **In Vercel:**
   - Go to your project → **Settings** → **Domains**
   - Click on `alpharavo.com` → **Edit**
   - Vercel will show you **nameservers** (usually something like `ns1.vercel-dns.com`, `ns2.vercel-dns.com`, etc.)
   - Copy those nameservers

2. **In Namecheap:**
   - Log in to **namecheap.com**
   - Go to **Domain List** → click **Manage** next to `alpharavo.com`
   - Go to **Advanced DNS** tab
   - Scroll to **Nameservers** section
   - Change from "Namecheap BasicDNS" to **"Custom DNS"**
   - Paste Vercel's nameservers (usually 2-4 nameservers)
   - Click **Save**

3. **Wait:** DNS propagation takes 5 minutes to 48 hours (usually 15-30 minutes). Vercel will automatically configure both `alpharavo.com` and `www.alpharavo.com`.

---

## Option 2: Manual DNS Records (If you want to keep Namecheap DNS)

**Best for:** If you have other services using Namecheap DNS.

### Steps:

1. **In Vercel:**
   - Go to your project → **Settings** → **Domains**
   - Click on `alpharavo.com` → **Edit**
   - Vercel will show you the DNS records you need to add
   - Usually shows:
     - **A Record** for root domain (`@` or `alpharavo.com`) → IP addresses (usually `76.76.21.21` or similar)
     - **CNAME Record** for `www` → `cname.vercel-dns.com` (or similar)

2. **In Namecheap:**
   - Log in to **namecheap.com**
   - Go to **Domain List** → click **Manage** next to `alpharavo.com`
   - Go to **Advanced DNS** tab
   - Under **Host Records**, add:

   **For root domain (`alpharavo.com`):**
   - **Type:** `A Record`
   - **Host:** `@` (or leave blank)
   - **Value:** The IP address Vercel shows (e.g., `76.76.21.21`)
   - **TTL:** `Automatic` (or `600`)
   - Click **Save**

   **For www subdomain (`www.alpharavo.com`):**
   - **Type:** `CNAME Record`
   - **Host:** `www`
   - **Value:** The CNAME value Vercel shows (e.g., `cname.vercel-dns.com`)
   - **TTL:** `Automatic` (or `600`)
   - Click **Save**

3. **Wait:** DNS propagation takes 5 minutes to 48 hours (usually 15-30 minutes).

---

## Verify It's Working

After DNS propagates:

1. **In Vercel:** Go to **Settings** → **Domains** → both domains should show **"Valid Configuration"** (green checkmark).

2. **Test:** Visit `https://alpharavo.com` and `https://www.alpharavo.com` — both should show your site.

---

## Troubleshooting

- **Still showing "Invalid Configuration"?** Wait 15-30 minutes, then click **Refresh** in Vercel.
- **Can't find DNS settings?** In Namecheap, make sure you're in **Advanced DNS** tab, not "Basic DNS".
- **Need exact values?** In Vercel, click **Edit** on each domain — it shows exactly what DNS records you need.

---

**Recommended:** Use **Option 1** (Vercel nameservers) — it's simpler and Vercel handles everything automatically.
