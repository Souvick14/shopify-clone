# 🛍️ Shopify Clone — Frontend UI Replica

> ⚠️ **Work in Progress** — This project is actively under development. Some sections and features are still being built out.

A pixel-perfect, responsive **frontend clone of the Shopify homepage**, built entirely with vanilla HTML, CSS, and JavaScript — powered by **Vite** and **Three.js** for a modern development experience and rich visual effects.

---

## 📸 Preview

> _Screenshots / live demo coming soon as development progresses._

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** | Modular, section-based styling |
| **Vanilla JavaScript** | Interactive UI behavior |
| **Vite** | Lightning-fast dev server & bundler |
| **Three.js** | 3D / WebGL visual effects (in progress) |
| **Font Awesome 7** | Icons throughout the UI |
| **Google Fonts (Material Symbols)** | Material icon set |

---

## 📁 Project Structure

```
Shopify/
│
├── html/
│   ├── shopi.html          # Main homepage (primary entry point)
│   └── ele.html            # Elements / component playground
│
├── css/
│   ├── navbar.css          # Navigation bar styles
│   ├── firstsection.css    # Hero section styles
│   ├── secondsection.css   # Commerce platform section
│   ├── thirdsection.css    # Entrepreneur-to-enterprise section
│   ├── forthsection.css    # Online & in-person section
│   ├── fivthsection.css    # POS & multichannel section
│   ├── sixthsection.css    # Direct & wholesale section
│   ├── solution.css        # Solutions dropdown menu
│   ├── resources.css       # Resources dropdown menu
│   ├── whatsnew.css        # What's New dropdown menu
│   └── shopi.css           # Global/shared styles
│
├── js/
│   ├── navbar.js           # Navbar scroll + dropdown toggle logic
│   ├── firstsection.js     # Hero text animation
│   ├── secondsection.js    # Commerce section interactions
│   ├── thirdsection.js     # Scroll-based animations
│   ├── main.js             # App entry point
│   └── earth.js            # Three.js 3D globe (in progress)
│
├── image/                  # All static image assets
├── video/                  # Background & section videos
├── font/                   # Custom font files
├── ex/                     # Experimental / scratch files
│
├── package.json            # Project dependencies
├── .gitignore              # Git ignore rules
└── README.md               # You are here
```

---

## ✨ Features Implemented

### 🔝 Navbar
- Transparent → solid black transition on scroll
- Animated dropdown menus: **Solutions**, **What's New**, **Resources**
- Underline extender animation on active nav item
- Hamburger menu for mobile (in progress)

### 🎬 Hero Section (First Section)
- Fullscreen background **video** (autoplay, muted, loop)
- Animated **text rotator** cycling through startup taglines
- CTA buttons: _"Start for free"_ & _"Why we build Shopify"_

### 🏪 Commerce Section (Second Section)
- Showcases real Shopify merchant brands (Glossier, The Sill, Vacation Inc., Aura Bora, etc.)
- Hover-reveal **brand logo + link overlays** on product images
- Animated text switcher: _"Sell online · locally · globally · on mobile"_

### 🏢 Entrepreneur-to-Enterprise Section (Third Section)
- Story cards: **Summer Solace Tallow** → **Gymshark** → **Mattel**
- Highlights Shopify's scale from solo sellers to enterprise brands
- "Pick a plan that fits" CTA button

### 🛒 Online & In-Person Section (Fourth Section)
- Describes Shopify's omnichannel selling capabilities
- AI-powered store design & theme customization

### 📱 POS & Multichannel Section (Fifth Section)
- In-person Point of Sale explanation
- Multichannel social publishing
- Embedded **order summary video** demo

### 🌐 Direct & Wholesale Section (Sixth Section)
- B2B and direct-to-consumer selling overview _(in progress)_

---

## 🔧 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/souvickroy200212/shopify-clone.git
cd shopify-clone

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the Vite dev server
npx vite
```

Then open your browser and navigate to `http://localhost:5173`

> **Note:** Open `html/shopi.html` via Vite's dev server for proper asset resolution (images, videos, CSS paths all use absolute `/` paths).

---

## 🛣️ Roadmap / What's Coming

- [ ] Complete hamburger menu for mobile responsiveness
- [ ] Finish 6th section (Direct & Wholesale) layout
- [ ] Add **Three.js 3D Earth globe** animation (`earth.js`)
- [ ] Footer section with all links
- [ ] Pricing page
- [ ] Fully responsive design (mobile / tablet breakpoints)
- [ ] Page transitions and scroll-triggered animations
- [ ] Additional pages: Solutions, Enterprise, Blog

---

## 🎨 Design Decisions

- **Modular CSS**: Each page section has its own dedicated CSS file for clean separation of concerns and easy debugging.
- **No CSS framework**: Pure vanilla CSS to keep the project lightweight and to deeply understand the Shopify design system.
- **Vite**: Used as the dev server and bundler for fast HMR (Hot Module Replacement) during development.
- **Real brand assets**: Section 2 features real Shopify merchant brands (Glossier, Gymshark, etc.) to accurately reflect the original Shopify homepage experience.

---

## ⚠️ Disclaimer

This project is a **non-commercial, educational frontend clone** of the [Shopify](https://www.shopify.com) homepage. All brand names, logos, and trademarks belong to their respective owners. This is built purely for learning and portfolio purposes.

---

## 👤 Author

**Souvick Roy**
- GitHub: [@souvickroy200212](https://github.com/souvickroy200212)
- Email: souvickroy200212@gmail.com

---

> ⭐ Star this repo if you find it useful or interesting — more features coming soon!
