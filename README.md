# UPG storefront

The storefront reads products and categories from the backend API. Product and
category URLs use the backend `slug` fields, so the API and storefront must use
the same deployed data. The catalog request allows up to 1,000 products so
larger imports are not silently truncated on the home and unfiltered catalog
surfaces.

## Local development

Create `.env.local` from `.env.example`, set `VITE_API_URL` to the backend API
base including `/api/v1`, then run:

```sh
npm install
npm run dev
```

Do not commit `.env.local` or any backend/admin token. Supabase credentials are
not required by this frontend; the backend owns database access.

## Vercel

Set `VITE_API_URL` in the Vercel project for the storefront before building,
for example `https://<render-service>.onrender.com/api/v1`. Redeploy after
changing it. The backend must allow the Vercel origin through its CORS policy.
