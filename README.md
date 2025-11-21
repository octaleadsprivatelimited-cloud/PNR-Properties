# PNR Properties – React Website

A modern, responsive real estate website for **PNR Properties**. The site showcases premium real estate properties and developments with immersive visuals, smooth interactions, and a comprehensive property portfolio.

## ✨ Highlights

- Hero landing page with CTA-driven messaging and smooth scrolling
- Service listing with animated cards and value highlights
- Project and testimonial sliders powered by `react-slick`
- Gallery grid with hover overlays for project storytelling
- About, Services, Gallery, and Contact inner pages for complete coverage
- Tailwind CSS theming, custom fonts, and responsive layouts
- Contact form wired to Formspree (update the endpoint to go live)

## 🛠 Tech Stack

- [React 19](https://react.dev/)
- [Create React App](https://create-react-app.dev/)
- [React Router v7](https://reactrouter.com/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [React Slick](https://react-slick.neostack.com/) + `slick-carousel`
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Scroll](https://www.npmjs.com/package/react-scroll)

## 🚀 Getting Started

```bash
cd pnr-properties
npm install
npm start
```

The app runs at `http://localhost:3000/`. Hot reload is enabled by default.

## 📜 Available Scripts

```bash
npm start      # Start development server
npm run build  # Create production build in /build
npm test       # Run unit tests (press Enter once to trigger when prompted)
```

> **Tip:** If `npm test` waits for input, press `Enter` once or set the environment variable `CI=true` before running the command.

## 📂 Project Structure

```
src/
├─ components/         # Shared UI components (navigation, sliders, cards, forms)
├─ data/               # Centralised site content & configuration
├─ pages/              # Route-level pages (Home, About, Services, Gallery, Contact)
├─ index.js            # Entry point with global styles and Slick CSS imports
├─ index.css           # Tailwind directives + global tweaks
└─ App.js              # Router setup and layout composition
```

Tailwind is configured via `tailwind.config.js` with custom brand colours, typography, and shadows matching the reference design.

## ✉️ Contact Form Integration

The contact form currently posts to a demo Formspree endpoint defined in `src/components/ContactForm.jsx`.

1. Create your own form at [Formspree.io](https://formspree.io/).
2. Replace `FORMSPREE_ENDPOINT` with the generated form URL.
3. Optionally add spam protection (honeypot or reCAPTCHA) before going live.

## 🌐 Deployment

- **Netlify:** Upload your project, set **Build command** to `npm run build`, and **Publish directory** to `build/`.
- **Vercel:** Upload your project, keep the default CRA settings. Vercel auto-detects.
- **Static hosting:** Run `npm run build` and upload the contents of `build/` to any static host (S3, Azure Blob, Firebase, etc.).

Remember to configure a custom domain, enable HTTPS, and set up redirects if required.

## ✅ QA Checklist

- [x] Build compiles without errors (`npm run build`)
- [x] Routing verified for Home / About / Services / Gallery / Contact
- [x] Slick sliders functional on desktop and mobile breakpoints
- [x] Responsive layouts validated across widths (320px → 1440px)
- [x] Contact form ready for integration (pending real endpoint)

## 📄 License

This project is provided as a bespoke implementation for PNR Properties. Feel free to adapt and extend for internal use.
