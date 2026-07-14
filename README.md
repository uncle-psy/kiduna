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

Registrations are stored in the `early_access_requests` table. Open the Neon resource from the Vercel project’s Storage tab, then use Neon’s Tables view to browse, filter, edit, or export registrations as CSV.

## Email

The form sends a confirmation to the registrant and, when configured, a detailed notification to the address in `EARLY_ACCESS_NOTIFICATION_EMAIL`. Sending uses Resend and requires these environment variables:

- `RESEND_API_KEY`
- `EMAIL_FROM` (for example, `Kiduna <hello@kiduna.ai>`)
- `EARLY_ACCESS_NOTIFICATION_EMAIL`

## Deployment

Import this repository into Vercel, connect Neon, run the migration, and add `kiduna.ai` plus `www.kiduna.ai` in the project’s domain settings.
