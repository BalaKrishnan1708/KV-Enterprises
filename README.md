# KV Enterprises — Premium Recruitment & Job Board Platform

An elite, production-ready, and highly interactive Recruitment and Job Board Platform built from scratch. Designed with a calm, professional, and premium aesthetic, it supports the industrial factory belt staffing requirements of **KV Enterprises** in Sriperumbudur (automotive suppliers, precision CNC machinists, metal fabricators, and assembly operators).

---

## 🎨 Design System & Aesthetics (Calm & Professional)

The interface is engineered to evoke efficiency, trustworthiness, and smooth interaction.

- **Color Palette (60-30-10 Rule):**
  - **Canvas/Background (60%):** Pure White (`#FFFFFF`) and Soft Alabaster Gray (`#F8F9FA`) for layered card visual breathing room.
  - **Structure & Text (30%):** Deep Slate Gray (`#1E293B`) for primary headings, and Muted Charcoal (`#475569`) for body text. High contrast but gentle on the eyes.
  - **Accents (10%):** Custom HSL Sage Green (`#0F766E`) and Deep Ocean Teal (`#0369A1`) for CTAs, active indicators, and focus outlines.
- **Typography:** Built using Google Fonts **Plus Jakarta Sans** and **Inter** for clean letterforms and tracking.
- **Shadows & Radius:** Diffusion drop shadows (`box-shadow: 0 4px 20px -2px rgba(15, 118, 110, 0.04)`) with smooth rounded corners (`8px` to `12px`) for modern panel layouts.
- **Micro-Animations:** Fluid `0.25s cubic-bezier` hovers, pulse indicators, marquee animations, and slide-in notifications.

---

## 🏛️ Site Architecture & Core Views

The application is built as a highly responsive **Single Page Application (SPA)** with client-side state persistence (`localStorage`).

1. **Landing Page (Home):**
   - Sticky glassmorphic navbar with active route underlines.
   - Typographic Hero layout with dual-action search triggers.
   - Dynamic industry marquee and placement stats counts.
   - Live tabbed job feed filtering by "All", "No Night Shift", and "Urgent".
   - B2B recruitment portal callout banners.

2. **Job Search & Board:**
   - Multi-column layout with sticky filter sidebar.
   - Real-time client-side filter widgets (Gender, Shift Setup, Industry Corridors, Qualification, Urgent only).
   - Search matching input and pagination buttons.

3. **Candidate Career Portal:**
   - Visual profile builder with skill-chip constructors.
   - **Simulated Resume Parser:** Interactive PDF/DOCX drag-and-drop zone that performs a parsing simulation (animated progress bar) and pre-populates fields with mock parsed data.
   - **Applied Jobs Tracker:** Real-time table displaying application states ("Applied", "Reviewing", "Interviewing", "Offer Extended").

4. **Recruiter / Employer Hub:**
   - **B2B Manpower Registration Form:** Complete validated onboarding form for bulk clients.
   - **Multi-Step Job Posting Form:** Validated steps (Company, Metrics, Description) that immediately publishes the job into the live board feed.
   - **Applicant Status Manager:** Admin panel listing posted jobs, candidate lists, and dropdown selectors that immediately mutate application tracker statuses.

5. **Informational Views (About & Contact):**
   - Detailed consultative mission logs.
   - Message inquiry drop boxes with live feedback.
   - Custom CSS vector grid maps representing the Sriperumbudur industrial belt.

---

## 🛠️ Technology Stack

- **Markup:** Semantic HTML5 elements (`<header>`, `<main>`, `<aside>`, `<article>`, `<nav>`, `<footer>`).
- **Styling:** Custom vanilla CSS3 with variables, grid systems, custom scrollbars, and fluid animations.
- **Scripting:** Pure ES6 Javascript. No heavy dependencies or build steps.
- **Icons:** Inline optimized SVG vectors.
- **Persistence:** Local Storage state synchronization.

---

## 🚀 Setup & Running Locally

Since the application uses standard client-side code, it doesn't require complex installations.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BalaKrishnan1708/KV-Enterprises.git
   cd KV-Enterprises
   ```

2. **Serve files locally:**
   You can run a simple developer server to view it immediately (e.g. VS Code Live Server, or Python):
   ```bash
   python -m http.server 8000
   ```
   Or open `index.html` directly in any web browser.

3. **Vercel Deployments:**
   This project is ready to be linked to Vercel. Since it contains a static root `index.html`, Vercel will deploy it instantly without configuration.
