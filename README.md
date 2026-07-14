# Kiduna

The public early-access site for [kiduna.ai](https://kiduna.ai).

## Local development

Install dependencies and start the Next.js development server:

```bash
npm install
npm run dev
```

The landing page works without a database. To accept early-access requests locally, copy `.env.example` to `.env.local` and provide a Postgres connection string.

## Database

The early-access form stores submissions in Postgres through Drizzle. The recommended production setup is the Neon integration in the Vercel Marketplace.

```bash
npm run db:generate
npm run db:migrate
```

## Deployment

Import this repository into Vercel, connect Neon, run the migration, and add `kiduna.ai` plus `www.kiduna.ai` in the project’s domain settings.
