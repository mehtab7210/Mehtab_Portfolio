# Mehtab Alam — Senior Frontend Engineer & UI/UX Architect Portfolio

A modern, high-performance developer portfolio web application built with **React 19 (Vite)**, **Tailwind CSS**, and **Lucide React**, engineered to Principal Frontend & UI/UX Architect standards.

---

## 🚀 Live Local URL

The application is actively running at:
- **Local:** [http://localhost:5173/](http://localhost:5173/)

---

## 🛠️ Tech Stack & Architecture

- **Core:** React 19 (JSX), Vite 8
- **Styling:** Tailwind CSS 3.4, Custom Glassmorphism, CSS Grid & Radial Glows
- **Icons & Visuals:** Lucide React, Custom Brand SVGs
- **Celebration Effects:** Canvas Confetti
- **Typography:** Plus Jakarta Sans (UI) & JetBrains Mono (Code/Badges)
- **Compliance:** WCAG 2.1 AA Accessible, Semantic HTML5, Keyboard Navigation Focus States

---

## 📂 Project Structure

```
├── public/
│   ├── mehtab-alam.jpg          # Authentic high-res profile portrait
│   └── Mehtab_Alam_Resume.pdf   # Direct downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Glassmorphic header, scrollspy, theme switch & CTA
│   │   ├── Hero.jsx             # Hero section with portrait, badges, CTAs & stats
│   │   ├── About.jsx            # Engineering pillars & architecture philosophy
│   │   ├── Skills.jsx           # Categorized skills, live search & category filter tabs
│   │   ├── Experience.jsx       # Interactive career trajectory timeline
│   │   ├── Projects.jsx         # Filterable project grid with live links & modal triggers
│   │   ├── ProjectModal.jsx     # Deep dive architectural case studies (Problem/Solution/Impact)
│   │   ├── Education.jsx        # MCA & B.Sc degrees, core ethics & languages
│   │   ├── Contact.jsx          # Form validation, copy-to-clipboard chips & confetti
│   │   ├── Footer.jsx           # Dynamic copyright, social links & back to top button
│   │   ├── Toast.jsx            # Global floating feedback notification system
│   │   └── Icons.jsx            # Custom LinkedIn and GitHub SVG components
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark/light theme state with localStorage persistence
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all content & case studies
│   ├── App.jsx                  # Main application assembler
│   ├── index.css                # Tailwind directives and custom glass utilities
│   └── main.jsx                 # React root mount
├── tailwind.config.js           # Custom theme extensions, animations, and color tokens
└── package.json
```

---

## 💻 Available Scripts

- **Development Server:**
  ```powershell
  npm.cmd run dev
  # Or if execution policy is set: npm run dev
  ```
  Runs Vite at `http://localhost:5173/` with Hot Module Replacement (HMR).

- **Production Build:**
  ```powershell
  npm.cmd run build
  ```
  Bundles and optimizes assets for production into the `dist/` folder.

- **Production Preview:**
  ```powershell
  npm.cmd run preview
  ```
  Locally previews the production build.

---

## ⚙️ Windows PowerShell Script Policy Fix

If you see `npm.ps1 cannot be loaded because running scripts is disabled`:

1. **Option 1 (Quickest):** Use `.cmd` suffix:
   ```powershell
   npm.cmd run dev
   ```

2. **Option 2 (Permanent Fix):** Allow scripts for your user account (no admin needed):
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
   Then you can run standard `npm run dev` anytime.
