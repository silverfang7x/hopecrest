<div align="center">

<br />

```
██╗  ██╗ ██████╗ ██████╗ ███████╗ ██████╗██████╗ ███████╗███████╗████████╗
██║  ██║██╔═══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗██╔════╝██╔════╝╚══██╔══╝
███████║██║   ██║██████╔╝█████╗  ██║     ██████╔╝█████╗  ███████╗   ██║   
██╔══██║██║   ██║██╔═══╝ ██╔══╝  ██║     ██╔══██╗██╔══╝  ╚════██║   ██║   
██║  ██║╚██████╔╝██║     ███████╗╚██████╗██║  ██║███████╗███████║   ██║   
╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   
```

### *Building Brighter Futures — One Program at a Time.*

<br />

[![Live Demo](https://img.shields.io/badge/🌍%20Live%20Demo-hopecrest.vercel.app-00C896?style=for-the-badge&labelColor=0C0D0F)](https://hopecrest.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF0061?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## 🌱 What Is Hopecrest?

Hopecrest is a modern nonprofit web platform that bridges the gap between compassionate donors and the communities that need them most. In a world where charitable giving is often fragmented, opaque, and uninspiring, Hopecrest offers a beautifully crafted digital space where impact is tangible, stories are human, and every dollar donated is connected to a real program and real people. It solves the trust problem of online giving — not with promises, but with transparency: live fundraising progress, beneficiary counts, country-level reach, and firsthand impact stories from the ground, across 40+ countries in education, healthcare, clean water, and women's empowerment.

---

## ✨ Features

### 🏠 Landing Page
- **Cinematic Hero** — Staggered Framer Motion headline animations with ambient gradient blobs and an animated scroll indicator
- **Partner Ticker** — Infinite-scroll marquee showcasing alliance partners (Global Relief Alliance, CareBridge International, and more)
- **Stats Section** — Animated count-up cards displaying `$12M+ Raised`, `40+ Countries`, `180+ Programs`, and `92% Impact Score`
- **Programs Preview** — Filterable grid of flagship initiatives with category pills and fund-raise progress bars
- **Scroll-Driven Impact Stories** — Sticky sidebar with three full-bleed story panels (Amara · Kenya, Priya · India, Carlos · Brazil) driven by native scroll progress via Framer Motion
- **Donate CTA** — Interactive donation section with preset amounts ($25 / $50 / $100 / $250) and a custom input field with real-time contextual impact copy

### 📋 Programs Directory (`/programs`)
- **Live Search** — Debounced full-text search across title, description, and category
- **Category Filtering** — One-click filter tabs: Education · Health · Environment · Women Empowerment
- **Animated Grid** — `AnimatePresence` powered card transitions with layout animations on filter change
- **Share Functionality** — Clipboard copy per program card with animated toast notifications

### 🧭 Navigation & Shell
- **Smart Navbar** — Transparent on load → frosted-glass (`backdrop-blur`) on scroll, with a full-screen mobile drawer
- **Footer** — Gandhi quote, quick links, social icons (X / LinkedIn / Instagram / Email)
- **SEO-Ready** — Full `<meta>` tags, Open Graph, Twitter cards, sitemap (`/sitemap.xml`), and robots (`/robots.txt`)

---

## 🗂️ Programs

| Program | Category | Goal | Beneficiaries | Regions |
|---|---|---|---|---|
| Clean Water Initiative | 🌊 Environment | $600,000 | 38,000 people | Kenya, Uganda, Tanzania |
| Girls Education Fund | 📚 Education | $500,000 | 12,500 students | India, Nepal |
| Rural Healthcare Access | 🏥 Health | $700,000 | 64,000 patients | Brazil, Peru |
| Mothers Microenterprise Circle | 💼 Women Empowerment | $350,000 | 1,900 entrepreneurs | Ghana, Rwanda |
| School Meals Network | 🍽️ Education | $400,000 | 28,300 children | Bangladesh, Philippines |
| Community Climate Resilience | 🌿 Environment | $520,000 | 22 communities | Colombia, Indonesia |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org) (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3 with custom design tokens |
| **Animations** | Framer Motion 12 |
| **UI Primitives** | Radix UI (Progress, Slider) |
| **Icons** | Lucide React |
| **Counters** | React CountUp |
| **Theming** | next-themes (dark mode enforced) |
| **Fonts** | Playfair Display (display/serif) + DM Sans (body) |
| **Deployment** | Vercel |

---

## 🎨 Design System

```
Colors
  Primary (Dark Canvas)  →  #0C0D0F
  Surface                →  #141516
  Cream (Text)           →  #F5F0E8
  Accent (Emerald)       →  #00C896
  Accent Dark            →  #009E78

Typography
  Display  →  Playfair Display — Italic serif for headlines
  Body     →  DM Sans — Clean, humanist sans-serif for UI copy
```

The entire palette is intentionally dark and editorial — evoking seriousness, trustworthiness, and urgency — while the emerald accent (`#00C896`) signals growth, hope, and life.

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 18`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/hopecrest.git
cd hopecrest

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
hopecrest/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, Navbar, Footer
│   ├── page.tsx            # Home page (Hero → Stats → Programs → Impact → CTA)
│   ├── programs/
│   │   ├── page.tsx        # Programs directory with search + category filter
│   │   └── [slug]/         # Dynamic program detail pages
│   ├── donate/             # Donation flow page
│   ├── about/              # About / mission page
│   ├── impact/             # Impact stories index
│   ├── robots.ts           # SEO robots config
│   └── sitemap.ts          # Auto-generated sitemap
│
├── components/
│   ├── navbar.tsx          # Scroll-aware frosted navbar + mobile drawer
│   ├── footer.tsx          # Footer with quote, links, and social icons
│   ├── home/
│   │   ├── HeroSection.tsx     # Animated hero with blob background
│   │   ├── StatsSection.tsx    # Animated count-up stat cards
│   │   ├── ProgramsPreview.tsx # Featured programs grid
│   │   ├── ImpactSection.tsx   # Scroll-driven story panels
│   │   └── CTASection.tsx      # Interactive donate CTA
│   └── ui/
│       ├── ProgramCard.tsx     # Reusable program card
│       └── AnimatedCounter.tsx # Viewport-triggered CountUp wrapper
│
├── lib/
│   └── programs.ts         # Typed program data (slug, category, goal, etc.)
│
├── tailwind.config.ts      # Custom color tokens + font families
└── next.config.mjs         # Next.js config
```

---

## 🌐 Live Deployment

**→ [https://hopecrest.vercel.app](https://hopecrest.vercel.app)**

Deployed on [Vercel](https://vercel.com) with zero-config Next.js integration. Every push to `main` triggers an automatic production deployment.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built for people. Built for impact.**

*© 2025 Hopecrest — Empowering communities through service, dignity, and lasting opportunity.*

</div>
