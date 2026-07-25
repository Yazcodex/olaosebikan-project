# Deployment Guide

## Backend

Use a Node host such as Render, Railway, or Fly.io.

Backend root directory:

```text
backend
```

Install command:

```bash
npm install
```

Start command:

```bash
npm start
```

Required backend environment variables:

```text
NODE_ENV=production
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=use_a_long_random_secret
JWT_EXPIRES_IN=7d
CLIENT_URL=https://your-frontend-domain.com
LOW_STOCK_THRESHOLD=10
```

Cloudinary is only needed if product image upload will be used:

```text
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CLOUDINARY_FOLDER=olaosebikan-bread/products
```

After deploy, test:

```text
https://your-backend-domain.com/api/health
```

## Frontend

Use a static host such as Vercel or Netlify.

Frontend root directory:

```text
my-project
```

Install command:

```bash
npm install
```

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

Required frontend environment variable:

```text
VITE_API_BASE_URL=https://your-backend-domain.com/api
```

## Important

- Use MongoDB Atlas for production, not local MongoDB.
- Set `CLIENT_URL` in the backend to the deployed frontend URL.
- Set `VITE_API_BASE_URL` in the frontend to the deployed backend API URL ending with `/api`.
- The frontend includes Vercel and Netlify fallback files so routes like `/cart` and `/admin/login` work after refresh.
