# Deployment Guide — Herkinx Events

## Cloudflare Pages (CLI)

```bash
# 1. Login (opens browser)
wrangler login

# 2. Create project (first time only)
wrangler pages project create herkinx-events

# 3. Deploy
wrangler pages deploy . --project-name=herkinx-events
```

After first deploy, you can redeploy by just running step 3.

## Or use Git (auto-deploy)

If your GitHub repo is connected to Cloudflare Pages, just push:

```bash
git add .
git commit -m "your message"
git push origin main
```
