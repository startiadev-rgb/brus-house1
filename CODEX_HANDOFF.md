# 📋 Project Handoff: Bru's House — Chá de Casa Nova

> **Documento de continuidade para o Codex / AI Coding Agent**

---

## 1. Project Overview & Repositories

- **Project Name:** Bru's House — Chá de Casa Nova (Bruna & Catarina / Pedro & Matteo)
- **Local Directory:** `C:\Users\callo\.gemini\antigravity\scratch\cha-casa-nova`
- **GitHub Repository:** `https://github.com/startiadev-rgb/brus-house1.git`
- **Deploy Branch:** `main` (Default branch deployed on Vercel) & `master`
- **Production URL:** `https://brus-house1.vercel.app`
- **Vercel Account:** `pedro49641@gmail.com`

---

## 2. Tech Stack & Dependencies

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- **Icons:** `lucide-react`
- **QR Code & Animations:** `qrcode.react`, `canvas-confetti`
- **Build Command:** `cmd /c "npm run build"` (Windows CMD wrapper due to PowerShell execution policy)

---

## 3. Active Design System & Guidelines Loaded

The project enforces the combined guidelines of **`Leonxlnx/taste-skill`** and **`pbakaus/impeccable`** (cloned & integrated):

### A. Anti-Slop Guidelines (`taste-skill`)
- **No Repetitive Eyebrow Pills:** Banned placing small uppercase badges/pills above every section title.
- **Anti-Center Bias:** Asymmetrical editorial layouts instead of centered template slop.
- **Typographic Restraint:** Banned overuse of Fraunces/Playfair display serifs. Headlines use clean, modern display typography with disciplined italic highlights.
- **Card Diversity:** Replaced uniform white cards with distinct visual density, crisp 1px borders, and clear surface contrast.

### B. Color Palette (`impeccable` Neo Kinpaku System)
- **Lacquer Black Ground:** `#121110` (Dark mineral background for Hero, Goal Tracker, Navbar & Footer)
- **Warm Paper Surface:** `#F6F3EC` / `#EDE8DF` (Warm ground for Timeline, Gift Registry & Messages)
- **Kinpaku Gold Accents:** `#D4A373` (Sub-headings, room tabs, selected highlights)
- **Verdigris Patina:** `#5B6E4E` (Secondary tags, progress indicators)
- **Terracotta Primary CTA:** `#C86D51` (Action buttons & primary highlights)
- **Dark Ink Text:** `#22201D`

---

## 4. Payment System & Integration Details

### A. PIX Integration (100% Active & Verified Real Money)
- **Real PIX CNPJ Key:** `63.066.276/0001-92` (Banco Inter Business)
- **Holder Name:** `Bru & Cat`
- **Payload Generator:** `PixModal.jsx` includes a standard-compliant **Banco Central do Brasil (BCB) EMV BR Code Generator** with a real **CRC16 CCITT-FALSE** checksum calculation.
- **Scanning:** Works with **any banking app** (Banco Inter, Nubank, Itaú, Bradesco, Santander, Caixa, C6, etc.). Payments drop **instantly into the real Banco Inter Business account**.

### B. Credit Card Checkout
- **In-Site Form & External Link:** `PixModal.jsx` supports both a direct in-site card form (with card brand detection: Visa, Mastercard, Elo, Amex) and an optional configurable payment link (`cardLink` state / `cha_casa_nova_pix_v3` in `localStorage`).
- **Footer Admin Modal:** Click *"Configurações do Checkout (Bru & Cat)"* in the footer to modify the PIX Key, Holder, or Card Link at runtime.

---

## 5. File Structure & Component Map

```text
cha-casa-nova/
├── index.html                  # Clean page title without emojis
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── CODEX_HANDOFF.md            # Comprehensive project handoff
├── src/
│   ├── main.jsx                # Entry point
│   ├── App.jsx                 # Global state management & localStorage persistence
│   ├── index.css               # Neo Kinpaku tokens, Tailwind imports & surface utilities
│   ├── components/
│   │   ├── Navbar.jsx          # Clean editorial brand lockup ("Bru's House"), nav links & CTA
│   │   ├── Hero.jsx            # Asymmetrical editorial hero with 3D ambient room slideshow & room tabs
│   │   ├── Timeline.jsx        # 2x2 process grid on warm paper background (#EDE8DF)
│   │   ├── GiftList.jsx        # Gift registry grid with category filter tabs, price labels & modal triggers
│   │   ├── GoalTracker.jsx     # Dark lacquer crowdfunding progress panel (R$ 3.840 / R$ 5.000)
│   │   ├── MessagesWall.jsx    # 3-column guestbook testimonial grid
│   │   ├── Footer.jsx          # Dark mineral footer with admin config link
│   │   ├── PixModal.jsx        # 3-step checkout modal (Form -> Payment [PIX/Card] -> Confetti Success)
│   │   └── PixConfigModal.jsx  # Admin settings modal for PIX & Card Link
│   └── data/
│       └── gifts.js            # Gift catalog items & initial guestbook messages
```

---

## 6. Recent Visual Adjustments Completed

1. **Navbar Logo:** Streamlined brand lockup (`Bru's House / Chá de Casa Nova`) without standalone icon boxes.
2. **Hero Header:** Removed the `PROJETO AFETIVO 2026` badge.
3. **Hero Layout:** Removed the right column floating cards to let the 3D room preview background shine through without clutter.

---

## 7. How to Continue in Codex

1. Clone or open `https://github.com/startiadev-rgb/brus-house1.git` (or the local folder `C:\Users\callo\.gemini\antigravity\scratch\cha-casa-nova`).
2. Run `npm install` and `npm run build` to verify the environment.
3. Use `git push origin master:main` to trigger Vercel deployments after any code edits.
