# Beemyle Website

React + Vite website with a Node.js contact form API powered by Nodemailer.

## Contact Form Mail Setup

Contact form submissions are sent by the backend endpoint at `/api/contact`.

1. Copy `.env.example` to `.env` (already created in this workspace).
2. Set your SMTP values:
	- `SMTP_USER`: Gmail sender account
	- `SMTP_PASS`: Gmail app password
	- `CONTACT_RECEIVER`: Inbox that receives submissions
	- `VITE_CONTACT_API_URL` (optional): Full API URL if frontend and backend are on different domains
	- `VITE_HEALTH_API_URL` (optional): Health endpoint for UI status badge (defaults to `/api/health`)

## Development

Run frontend and backend together:

```bash
npm run dev
```

This starts:

- Vite app on `http://localhost:5173`
- Contact API on `http://localhost:3001`

If you only run the frontend, form submit can return 502 because `/api` proxy has no backend target.

## Deployment

This repo now includes serverless API handlers in [api/contact.js](api/contact.js) and [api/health.js](api/health.js), so platforms like Vercel can serve `/api/*` in production.

If you see `404` for `/api/health` or `/api/contact` after deployment, your frontend is deployed but API routes are not being served on that host.

- Vercel: deploy the project root (not only `dist`) so the `api/` folder is included.
- Static-only hosts: deploy `server/index.js` as a separate backend and set:
	- `VITE_CONTACT_API_URL=https://<your-backend>/api/contact`
	- `VITE_HEALTH_API_URL=https://<your-backend>/api/health`

Set production environment variables on your host:

- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_RECEIVER`
- `VITE_CONTACT_API_URL` (only if your API is on a different domain)
- `VITE_HEALTH_API_URL` (only if health endpoint is on a different domain/path)

## Build

```bash
npm run build
```
