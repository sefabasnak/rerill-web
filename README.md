# rerill.web

rerill’in herkese açık sitesi. Cloudflare Pages’e statik export olarak yayınlanır.

```bash
npm install
npm run dev
npm run build
npx wrangler pages deploy out --project-name=rerill
```

Dashboard’dan Git bağlarken:

| Ayar | Değer |
|---|---|
| Framework preset | Next.js (Static HTML Export) |
| Production branch | `main` |
| Build command | `npx next build` |
| Build directory | `out` |

App Store URL’leri (yayın sonrası):

- `https://rerill.pages.dev/gizlilik/`
- `https://rerill.pages.dev/destek/`
