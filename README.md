# rerill.web

rerill’in herkese açık sitesi. Cloudflare’e Next.js statik export (`out/`) olarak yayınlanır.

```bash
npm install
npm run dev
npm run deploy
```

Cloudflare Git ayarları (Workers & Pages):

| Ayar | Değer |
|---|---|
| Production branch | `main` |
| Build command | `npx next build` |
| Deploy command | `npx wrangler deploy` |

Deploy komutu `npx wrangler deploy` ise build komutu boş bırakılmamalı; aksi halde `out/` oluşmaz.

App Store URL’leri (yayın sonrası):

- `https://rerill.pages.dev/gizlilik/`
- `https://rerill.pages.dev/destek/`
