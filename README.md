# April Tour — Premium East Java Travel Agency Website

A production-ready, **Next.js 15 + TypeScript + Tailwind CSS** website for **April Tour**, a Malang-based travel agency specialising in premium East Java (Indonesia) journeys — Mount Bromo, Tumpak Sewu, Ijen Crater, Madakaripura, Kapas Biru, and beyond.

> **Travel Beyond Borders** — Trusted by travellers from over 25 countries since 2024.

---

## ✨ Features

- 🎨 **Editorial luxury aesthetic** — Playfair Display × Inter typography, navy + gold + cream brand palette
- 📱 **Mobile-first responsive** design with refined breakpoints
- ⚡ **Next.js 15 App Router** with React Server Components and dynamic OG metadata
- 🔍 **SEO-optimized** — per-page metadata, JSON-LD-ready, dynamic `sitemap.xml` and `robots.txt`
- 🖼️ **Optimized images** via `next/image` with AVIF/WebP and remote pattern allowlist
- 🎭 **Smooth animations** powered by Framer Motion (Ken Burns hero, scroll reveals, accordion)
- 💬 **WhatsApp-first contact** flow — booking form opens pre-filled WhatsApp, no backend required
- ♿ **Accessibility-conscious** — focus rings, ARIA labels, semantic HTML, keyboard navigation
- 🧱 **Modular architecture** — typed data layer, shared UI components, composable sections

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Home — hero, about, services, packages, destinations, testimonials, process, FAQ, CTA |
| `/about` | About April Tour — story, stats, values, image showcase |
| `/packages` | All tour packages with cards + custom-trip CTA |
| `/packages/[slug]` | Dynamic detail pages for each tour with itinerary, inclusions, sticky booking sidebar |
| `/destinations` | Editorial alternating layout for all 7 East Java destinations |
| `/gallery` | Masonry-style photo gallery |
| `/contact` | Contact cards + inquiry form (opens WhatsApp) |
| `/not-found` | Branded 404 page |

## 🛠 Tech Stack

- **[Next.js 15.1](https://nextjs.org/)** — App Router, RSC, dynamic routes
- **[React 19](https://react.dev/)**
- **[TypeScript 5.7](https://www.typescriptlang.org/)** — strict mode
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** — custom brand palette + animations
- **[Framer Motion 11](https://www.framer.com/motion/)** — scroll reveals, page transitions
- **[Lucide React](https://lucide.dev/)** — icon set
- **[clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)** — class composition

## 📦 Quick Start

### Prerequisites

- **Node.js 18.18+** (Node 20+ recommended)
- **npm**, **pnpm**, or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/april-tour-website.git
cd april-tour-website

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Then edit .env.local with your real values

# 4. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev          # Start dev server with hot reload
npm run build        # Production build
npm run start        # Start production server (after build)
npm run lint         # Run ESLint
npm run type-check   # TypeScript type check (no emit)
```

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```dotenv
# Public (exposed to browser)
NEXT_PUBLIC_SITE_URL=https://apriltour.com
NEXT_PUBLIC_SITE_NAME="April Tour"
NEXT_PUBLIC_WHATSAPP_NUMBER=6285730451637
NEXT_PUBLIC_EMAIL=apriliadk04@outlook.com
NEXT_PUBLIC_INSTAGRAM=apriliadk04

# Optional — analytics
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=

# Optional — email backend (server-side)
RESEND_API_KEY=
CONTACT_INBOX_EMAIL=apriliadk04@outlook.com
```

> 💡 The site works fully without any backend — the booking form generates a pre-filled WhatsApp message. The `RESEND_API_KEY` is reserved for if you later wire up a server-side email handler.

## 📂 Project Structure

```
april-tour-website/
├── public/                       # Static assets (favicon, og-image, etc.)
│   └── images/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── destinations/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── packages/
│   │   │   ├── [slug]/page.tsx   # Dynamic package detail
│   │   │   └── page.tsx
│   │   ├── globals.css           # Tailwind + custom design tokens
│   │   ├── layout.tsx            # Root layout (fonts, navbar, footer)
│   │   ├── not-found.tsx         # Custom 404
│   │   ├── page.tsx              # Home page
│   │   ├── robots.ts             # robots.txt generator
│   │   └── sitemap.ts            # sitemap.xml generator
│   ├── components/
│   │   ├── layout/               # Navbar, Footer
│   │   ├── sections/             # Composable home page sections
│   │   └── ui/                   # Reusable UI primitives
│   ├── data/                     # Typed content (packages, destinations, FAQ, testimonials)
│   ├── lib/                      # config.ts, utils.ts
│   └── types/                    # Shared TypeScript types
├── .env.example
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts` → `theme.extend.colors`:

```ts
navy: { 900: "#0d1d35", ... },   // Primary brand
gold: { 500: "#d99524", ... },   // Accent
cream: { 50: "#fefcf7", ... },   // Background
```

### Typography

Fonts are loaded via `next/font` in `src/app/layout.tsx`:

```ts
const playfair = Playfair_Display({ ... });  // Display headings
const inter = Inter({ ... });                // Body
```

### Content Editing

All content lives in the `src/data/` folder — no code changes needed.

| File | What to edit |
|---|---|
| `src/data/packages.ts` | Tour packages, prices, itineraries, inclusions |
| `src/data/destinations.ts` | Destination cards, descriptions, highlights |
| `src/data/testimonials.ts` | Client reviews |
| `src/data/services.ts` | Services and FAQ items |
| `src/lib/config.ts` | Site name, tagline, contact info, navigation |

### Replacing Stock Images

The default uses Unsplash URLs (`images.unsplash.com`) configured in `next.config.mjs`. To use your own:

1. Drop images in `public/images/` (e.g. `public/images/bromo-sunrise.jpg`)
2. Reference as `/images/bromo-sunrise.jpg` in `src/data/*.ts`
3. Optionally remove the Unsplash entries from `next.config.mjs`

## 🚀 Deployment

### Deploy to Vercel (recommended)

The fastest path:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/april-tour-website.git
   git push -u origin main
   ```

2. **Import on Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel auto-detects Next.js — no config needed

3. **Set environment variables** in the Vercel dashboard:
   - Project Settings → Environment Variables
   - Add the same keys from `.env.example`

4. **Deploy** — Vercel will build and deploy automatically. Future pushes to `main` redeploy.

5. **Custom domain:**
   - Project Settings → Domains → add `apriltour.com`
   - Update `NEXT_PUBLIC_SITE_URL` env var to match

### Deploy elsewhere

Standard Next.js deployment works on:

- **Netlify** (with the Next.js plugin)
- **Cloudflare Pages** (with the Next.js adapter)
- **Self-hosted** (`npm run build` then `npm run start`)
- **Docker** (use the [official Next.js Dockerfile](https://github.com/vercel/next.js/tree/canary/examples/with-docker))

## 📈 Wiring up the booking form to a real backend

The form currently opens WhatsApp with a pre-filled message — perfect for solo and small operators. To upgrade to email-on-submit:

1. Install Resend: `npm install resend`
2. Create `src/app/api/contact/route.ts` with a `POST` handler that calls Resend
3. Update `src/components/ui/BookingForm.tsx` to `fetch('/api/contact', { method: 'POST', body: JSON.stringify(...) })` instead of `window.open(whatsappLink(...))`
4. Set `RESEND_API_KEY` in your environment

## ♿ Accessibility

- Semantic HTML (`<main>`, `<nav>`, `<article>`, `<aside>`)
- Focus-visible rings on all interactive elements
- ARIA labels on icon-only buttons and decorative SVGs
- Logical heading hierarchy
- Skip-navigation-friendly `<main id="main">` anchor
- Sufficient colour contrast (navy/cream/gold meets WCAG AA)

## 🧪 SEO Checklist

- [x] Per-page `<title>` and `<meta description>`
- [x] Open Graph + Twitter card metadata
- [x] Dynamic `sitemap.xml` (`/sitemap.xml`)
- [x] `robots.txt` (`/robots.txt`)
- [x] Semantic HTML structure
- [x] Image `alt` attributes
- [x] Canonical URLs (via `metadataBase`)
- [ ] Add Google Search Console verification token (set `metadata.verification.google` in `layout.tsx`)
- [ ] Submit `sitemap.xml` to Google Search Console after deploy

## 📝 License

MIT — feel free to use this as a starting point for similar projects.

## 🙌 Credits

- **Brand & content:** April Tour ([@apriliadk04](https://instagram.com/apriliadk04))
- **Stock photography:** [Unsplash](https://unsplash.com)
- **Icons:** [Lucide](https://lucide.dev)
- **Fonts:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) & [Inter](https://fonts.google.com/specimen/Inter)

---

**Need help?** Reach April Tour on WhatsApp at [+62 857-3045-1637](https://wa.me/6285730451637) or email [apriliadk04@outlook.com](mailto:apriliadk04@outlook.com).
