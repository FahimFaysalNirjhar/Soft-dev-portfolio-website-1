# Fahim Faysal Nirjhar — Portfolio Website

A modern, animated personal portfolio built with **Next.js** and **Tailwind CSS**, showcasing full-stack development and DevOps experience. Features a fully responsive design, dark/light theme support, and rich Framer Motion animations throughout.

🔗 Live site: https://soft-dev-portfolio-website-1.vercel.app/

---

## ✨ Features

- **Dark / Light Mode** — toggleable theme with persisted preference via `localStorage`, synced across all sections
- **Animated Hero Header** — spring-based profile picture entrance, waving hand icon, call-to-action buttons
- **About Me** — bio, animated info cards, and a tech stack grid with brand-accurate icon treatment (including special handling for icons that need background chips for contrast — Next.js, Express.js, Prisma, Linux)
- **Experience Timeline** — animated card reveals with pulsing icon rings and scroll-triggered replay animations
- **Services** — letter-by-letter animated headings, staggered service cards with shimmer hover effects
- **Project Showcase (My Work)** — filterable "Show More / Show Less" project grid, animated modal with full project details (overview, technologies, features, live/GitHub links)
- **Contact Form** — integrated with **Web3Forms** for serverless email submissions, complete with loading/success/error states
- **Responsive Navbar** — unified breakpoint system, animated mobile side-menu, scroll-aware styling
- **Consistent Motion Design** — scroll-based (`whileInView`) animations that replay on every scroll pass, floating background glow effects, and mobile-friendly `whileTap` parity for every `whileHover` interaction

---

## 🛠️ Tech Stack

**Frontend**

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) (`motion/react`)
- [React Icons](https://react-icons.github.io/react-icons/)

**Integrations**

- [Web3Forms](https://web3forms.com/) — contact form email delivery (no backend required)

**Fonts**

- `next/font/google` — Outfit, Ovo, Plus Jakarta Sans, Poppins (exposed via CSS variables for Tailwind v4 compatibility)

---

## 📁 Project Structure

```
app/
├── components/
│   ├── Navbar.jsx        # Responsive nav with theme toggle & mobile menu
│   ├── Header.jsx        # Hero section with animated profile picture
│   ├── About.jsx         # Bio, info cards, tech stack grid
│   ├── Experience.jsx    # Animated experience timeline
│   ├── Services.jsx      # Services offered, animated cards
│   ├── work.jsx          # Project showcase + animated details modal
│   ├── Contact.jsx       # Web3Forms-powered contact form
│   ├── Footer.jsx        # Footer with logo, email, social links
│   ├── Logo.jsx          # Light-mode wordmark logo
│   └── DarkLogo.jsx      # Dark-mode wordmark logo
├── assets/
│   └── assets.js         # Icon & image imports
└── page.jsx              # Composes all sections
```

---

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/FahimFaysalNirjhar/Soft-dev-portfolio-website-1
   cd <project-folder>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** (if you move the Web3Forms access key out of source, recommended for production)

   ```bash
   # .env.local
   NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🎨 Design Notes

- **Theme system**: dark mode is toggled via a `dark` class on `<html>`, controlled through React state and persisted in `localStorage`.
- **Motion pattern**: most sections use `whileInView` with `viewport={{ once: false }}` so entrance animations replay every time a section scrolls in and out of view, rather than firing only once.
- **Mobile parity**: every interactive `whileHover`/`hover:` state has a matching `whileTap`/`active:` state, since touch devices have no hover state.
- **Tech icon contrast**: icons that render as a single dark/black brand color (Next.js, Express.js, Prisma, Linux) are wrapped in a background chip so they stay visible in both light and dark themes.

---

## 📌 Known Considerations

- The contact form's Web3Forms access key is currently inline in `Contact.jsx` — consider moving it to an environment variable before making the repository public.
- The project details modal (`work.jsx`) relies on a `projectDetails` object keyed by project `id`; every project displayed must have a matching `id` to avoid errors when opening the "Details" view.

---

## 📄 License

This project is personal portfolio source code. Feel free to reference the structure, but please don't reuse the personal content, images, or copy verbatim for your own portfolio.

---

## 📬 Contact

- **Email**: fahimfaysal1995@gmail.com
- **GitHub**: https://github.com/FahimFaysalNirjhar
- **LinkedIn**: https://www.linkedin.com/in/fahim-faysal-a62b91153/
