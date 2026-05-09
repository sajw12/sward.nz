# sward.nz

Static professional site for Samuel Ward.

## Local preview

Open `index.html` directly, or run a small static server:

```sh
python3 -m http.server 4173
```

## Cloudflare Pages

Preferred Pages settings:

- Framework preset: `None`
- Build command: leave blank
- Deploy command: leave blank
- Output directory: `/`
- Production branch: `main`
- Custom domain: `sward.nz`

If deploying via Wrangler static assets instead, use:

- Deploy command: `npx wrangler deploy`
- `wrangler.jsonc` from this repo
- `.assetsignore` from this repo to avoid uploading `.git`, `.wrangler`, and local-only files

Configure Cloudflare DNS and redirects so:

- `https://sward.nz/` is canonical.
- `http://sward.nz/` redirects to `https://sward.nz/`.
- `https://www.sward.nz/` redirects to `https://sward.nz/`.
- `http://www.sward.nz/` redirects to `https://sward.nz/`.
