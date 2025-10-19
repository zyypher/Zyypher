# ZYYPHER — Company Website

> **Where the world builds software.**  
> A modern, performant website for Zyypher with animated hero, services, and a secure contact form.

---

## ✨ Features

- ⚡️ **Next.js 14** App Router with server components
- 🎨 **Tailwind CSS** + **shadcn/ui** for sleek, consistent UI
- 🧭 Accessible **Radix UI** primitives (Accordion, Dropdown)
- 🪄 **GSAP** micro‑interactions and parallax background
- 📬 **Contact form** with validation (**react-hook-form**) and **SendGrid** mailer API route
- 📱 Fully responsive layout and keyboard‑accessible navigation
- ♿️ Semantic HTML, focus states, and reduced‑motion fallbacks
- 🚀 Production‑ready build targets for **Vercel**

---

## 🧰 Tech Stack

- **Framework:** Next.js `14.2.x`
- **UI:** Tailwind CSS, shadcn/ui, Radix UI
- **Icons:** lucide-react, react-icons
- **Animations:** GSAP
- **Forms:** react-hook-form
- **Email:** SendGrid (`@sendgrid/mail`)
- **Tooling:** TypeScript, ESLint, PostCSS, tailwind-merge

---

## 📦 Scripts

```bash
pnpm dev       # start dev server
pnpm build     # production build
pnpm start     # run built app
pnpm lint      # lint
# or use npm/yarn if you prefer
```

---

## 🔧 Local Setup

1. **Clone & install**
   ```bash
   git clone <your-repo-url> zyypher
   cd zyypher
   pnpm i
   # or: npm i  OR  yarn
   ```

2. **Environment variables** — create `.env.local` in the project root:

   ```bash
   # Email (SendGrid)
   SENDGRID_API_KEY=
   SENDGRID_FROM_EMAIL=
   CONTACT_TO_EMAIL=
   ```

   > If you don’t need email locally, you can stub the API route to log payloads.

3. **Run it**
   ```bash
   pnpm dev
   ```
   Visit http://localhost:3000

---

## 🗂️ Suggested Structure

```
src/
  app/
    (marketing)/
      page.tsx
      layout.tsx
    api/
      contact/route.ts   # SendGrid mail endpoint
  components/
    ui/                  # shadcn components
    sections/            # hero, services, about, footer, etc.
  lib/
    mail.ts              # sendgrid helper
    utils.ts
public/
  favicon.ico
  og-image.png
docs/
  banner-zyypher.png     # add a wide hero/banner for README
```

---

## 📮 Contact Form (API)

- Endpoint: `POST /api/contact`
- Expected payload:
  ```json
  { "name": "Jane", "email": "jane@email.com", "message": "Hello" }
  ```
- The route uses `@sendgrid/mail` and environment variables above.
- Add server-side validation and rate‑limiting in production if needed.

---

## 🧪 Quality

- ESLint (Next.js config) and TypeScript strict types
- Prefer `cn()` + `tailwind-merge` for class composition
- Audit with Lighthouse: aim for 90+ across metrics

---

## 🚀 Deployment (Vercel)

1. Push to GitHub.
2. Import repo in **Vercel**.
3. Add the same env vars in **Project → Settings → Environment Variables**.
4. Trigger a production deployment.

---

## 📷 Screenshots

Add real screenshots here:
- `docs/banner-zyypher.png` — hero/banner (used at the top)
- `docs/home.png` — landing
- `docs/contact.png` — contact form

---

## 📝 License

Copyright © Zyypher. All rights reserved.
If you plan to open‑source, replace with your chosen license.

---

## 🙌 Credits

- [shadcn/ui](https://ui.shadcn.com/) components
- [Radix UI](https://www.radix-ui.com/) primitives
- [GSAP](https://greensock.com/gsap/) for animations
