# 🌺 શ્રી ગણેશાય નમઃ · Dr. Prem & Dr. Priyanka Wedding Invitation

> **Animated Luxury Gujarati Wedding Invitation Website**  
> **Groom:** Dr. Prem (MBBS) · Parmar Family, Jamnagar  
> **Bride:** Dr. Priyanka (M.S. ENT) · Khandar Family  
> **Wedding Date:** Sunday, 13 December 2026 (સંવત ૨૦૮૩ માગશર સુદ ૪)  
> **Venue:** Star Light Party Plot, Jamnagar  

---

## 🌟 Highlights & Features

1. **Royal Entrance Preloader**:
   - Ornate traditional temple doors with golden Swastik, Ganesh Ji, and auspicious greetings.
   - Interactive entry button triggers doors sliding open and background Shehnai/music.
2. **Bilingual Experience (GU / EN)**:
   - Primary language is Gujarati (`ગુ`) with instantaneous toggle to English (`EN`).
   - Persisted in browser `localStorage`.
3. **Hero Section with Parallax & Confetti**:
   - Auspicious Ganesh mantra, shloka, and shimmering gold typography.
   - Interactive Ganesh ji motif (tap to release festive marigold and gold petal showers).
4. **Family & Blessings Hierarchy**:
   - With blessings of Sadguru Om Dev Shri 1008 Shatrughndas Maharaj, Grandparents, and Parents.
   - Elegant family cards for Groom's family (*Var Paksh*) and Bride's family (*Kanya Paksh*).
   - Dinner invitation (*Bhojan Samarambh*) announcement.
5. **Interactive Scratch Card Reveal**:
   - Guests can scratch off the golden surface to reveal the wedding date and trigger celebratory confetti.
6. **Live Countdown Timer**:
   - Real-time days, hours, minutes, and seconds flip cards counting down to the Hast Melap ceremony (13 Dec 2026 7:00 PM).
7. **Two-Day Celebrations Timeline with Calendar Download**:
   - Saturday, 12 Dec 2026: Mandap Muhurat, Mameru, Dandiya Raas.
   - Sunday, 13 Dec 2026: Sagai, Jaan Prayan (Baraat), Hast Melap, Dinner Celebration.
   - One-click `.ics` calendar file download for Google Calendar, Apple Calendar, and Outlook.
8. **Venues with QR Codes & Google Maps**:
   - Star Light Party Plot (Wedding & Dinner) & "Gurukrupa" Residence.
   - Instant QR codes for phone scanning, navigation links, and address copy buttons.
9. **Curated High-Res Wedding Photo Gallery & Lightbox**:
   - 6 royal wedding ceremony photographs (Royal portrait, Sagai rings, Haldi ceremony, Dandiya Raas, Mandap decor, Hast Melap).
   - Full-screen lightbox modal with keyboard navigation (Esc, Arrow keys) and image counter.
10. **Darshanabhilashi & Tahuko Poem**:
    - Dedicated heartfelt Gujarati sentimental poem with line-by-line reveal and peacock feather motif.
    - Darshanabhilashi section for Chi. Het & Chi. Manan.
11. **RSVP with WhatsApp & Webhook Support**:
    - Interactive RSVP form with guest counter, multi-event ceremony selection, and warm wishes.
    - Confetti celebration upon response.
    - Direct "RSVP on WhatsApp" button with pre-filled Gujarati/English message.
12. **Finale & Contact Hub**:
    - Contact numbers with tap-to-call links.
    - WhatsApp share button with preview link.
    - Smooth scroll to top button.
13. **Audio Experience**:
    - Automated Web Audio Indian Tanpura & Shehnai ambient drone synth fallback + MP3 playback capability.
    - Mute/unmute toggle in sticky header.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized, static production build will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📝 How to Customize Content

All names, dates, ceremonies, phone numbers, and venues are stored in **a single, strongly-typed file**:  
👉 **`src/data/content.ts`**

### Modifying Phone Numbers & RSVP
Open `src/data/content.ts`:
```ts
export const config = {
  whatsappNumber: '919687529362', // WhatsApp number with country code (no +)
  contactNumbers: ['96875 29362', '87330 66977'], // Tap-to-call numbers
  rsvpWebhookUrl: '', // Optional: Add Formspree / Google Apps Script webhook
};
```

### Replacing Gallery Photos
Drop your wedding photos into:  
`public/images/gallery/`  
You can replace the existing images (`couple-portrait.jpg`, `rings-hands.jpg`, `haldi-ceremony.jpg`, `dandiya-raas.jpg`, `mandap-decor.jpg`, `hast-melap.jpg`) or update `photos` array in `src/data/content.ts`.

### Adding Background Music
Place an MP3 file at:  
`public/audio/wedding_music.mp3`  
The website will automatically play this track upon clicking "Open Invitation", or fall back to the built-in ambient Shehnai synthesizer if no file is present.

---

## 🌐 Deploying to Web Hosting

### Deploying to Hostinger / cPanel / Shared Hosting
1. Run `npm run build`.
2. Open your hosting File Manager or connect via FTP.
3. Upload all files inside the `dist/` folder (including `index.html` and `assets/`) into your `public_html` directory.

### Deploying to Vercel
```bash
npx vercel
```

### Deploying to Netlify
```bash
npx netlify deploy --prod --dir=dist
```

---

## 🎨 Visual Identity & Palette
- **Royal Maroon**: `#6B1022`
- **Antique Gold**: `#C9A24B`
- **Gold Highlight**: `#E8CF8A`
- **Warm Ivory**: `#FFF8EC`
- **Saffron**: `#E07B1F`
- **Fonts**: *Noto Serif Gujarati*, *Hind Vadodara*, *Anek Gujarati*, *Cormorant Garamond*, *Poppins*

---
© Designed by **Bajrang Studio** · 98248 40032
