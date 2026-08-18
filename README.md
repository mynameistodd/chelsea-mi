# Chelsea, MI Community Activity Directory

A fast, lightweight, quirky landing page and community activity directory inspired by the playful simplicity of **[Porkbun.com](https://porkbun.com)**.

Designed to serve as the unified landing hub for:
- **`chelseami.us`**
- **`ChelseaMichigan.us`**
- **`ChelseaMI.info`**

---

## 🌟 Features

- **Porkbun-Inspired Aesthetic**: Playful typography, warm colors, lively sticker badges, and a friendly community tone with subtle Chelsea, MI nods (Clocktower, Bulldogs).
- **Core Activity Directory**:
  - 🏕️ **Cub Scout Pack 455** (Pinewood derby, camping, STEM, Grades K–5)
  - 🏑 **Chelsea Field Hockey** (Youth to Varsity fall season & turf clinics)
  - 🥍 **Chelsea Girls Lacrosse** (Spring season 10U–14U girls Bulldogs lacrosse)
  - 🎭 **Beach Middle School Drama** (Fall plays, spring musicals, stage crew)
  - ⚾ **Dirt Dogz Baseball** (Youth travel baseball, tournament schedule)
  - 💡 **Suggest an Activity** card for community expansion.
- **Instant Search & Filter**:
  - Live real-time search across titles, descriptions, venues, and keywords.
  - Category filter pills (*All*, *Sports & Athletics*, *Scouting & Outdoors*, *Arts & Theater*).
  - Quick keyboard shortcuts (`/` or `Ctrl+K` to search, `Esc` to clear/close).
- **Domain Greeting Banner**:
  - Automatically identifies whether the visitor arrived via `chelseami.us`, `ChelseaMichigan.us`, or `ChelseaMI.info`.
- **Google Analytics 4 (GA4) Integration**:
  - Tracks pageviews and custom interaction events across all three domains (search queries, category clicks, modal views, outbound link clicks).
- **Zero-Build, Pure Static**:
  - Vanilla HTML5 / CSS3 / JavaScript. Can be hosted directly on Cloudflare Pages, GitHub Pages, Netlify, Vercel, or standard web hosting with instant loading speeds.

---

## 🚀 Quick Start & Local Preview

You can test the site locally using any standard static file server:

### Using Python:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000`.

### Using Node / npx:
```powershell
npx serve .
```

---

## 📊 Setting Up Google Analytics 4 (GA4)

1. Open `index.html`.
2. Locate the two occurrences of `G-XXXXXXXXXX` in the `<head>` section:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX', {
    cookie_domain: 'auto',
    anonymize_ip: true
  });
</script>
```
3. Replace `G-XXXXXXXXXX` with your actual Google Analytics 4 Measurement ID (from **Google Analytics Admin > Data Streams > Web**).

---

## 🌐 Connecting Your Domains (`chelseami.us`, `ChelseaMichigan.us`, `ChelseaMI.info`)

There are two recommended setups:

### Option A: Cloudflare Pages (Recommended - Free & Fast)
1. Push this repository to GitHub or upload the folder to Cloudflare Pages.
2. In Cloudflare Pages > **Custom Domains**, add all 3 domains:
   - `chelseami.us` & `www.chelseami.us`
   - `chelseamichigan.us` & `www.chelseamichigan.us`
   - `chelseami.info` & `www.chelseami.info`
3. Cloudflare will automatically route all 3 domains to this landing page with free SSL/TLS certificates.

### Option B: Canonical Domain + 301 Redirects
1. Host the site on your primary domain (e.g. `chelseami.us`).
2. At your domain registrar (e.g. Porkbun, Namecheap, Cloudflare Registrar), configure **URL Forwarding / 301 Redirects** on the other two domains:
   - `ChelseaMichigan.us` ➡️ `https://chelseami.us`
   - `ChelseaMI.info` ➡️ `https://chelseami.us`

---

## ✏️ How to Add or Edit Activities

All activities are cleanly organized in `js/activities.js`. To add a new activity, just add an object to the `ACTIVITIES` array:

```javascript
{
  id: "chelsea-robotics",
  title: "Chelsea High School Robotics (Team 1502)",
  shortName: "Technical Difficulties",
  category: "arts", // 'sports', 'scouting', or 'arts'
  categoryLabel: "STEM & Robotics",
  icon: "🤖",
  accentColor: "#3b82f6",
  badge: "High School FRC",
  tagline: "Building competition robots and inspiring future engineers.",
  description: "FIRST Robotics Team 1502 Technical Difficulties competes in regional and state robotics competitions.",
  quirkyFact: "Six weeks of intense design, coding in Java, and lots of pizza.",
  location: {
    venue: "Chelsea High School Robotics Lab",
    city: "Chelsea, MI 48118",
    mapUrl: "https://maps.google.com/?q=Chelsea+High+School+Chelsea+MI"
  },
  schedule: {
    timing: "Build Season: Monday–Friday 5:30–8:30 PM, Saturdays 9 AM–3 PM",
    season: "Winter & Spring (January – April)"
  },
  contact: {
    role: "Lead Mentors",
    email: "robotics@chelsea.k12.mi.us"
  },
  links: [
    { label: "Team Website", url: "https://team1502.com", primary: true },
    { label: "Competition Schedule", url: "#", primary: false }
  ],
  tags: ["robotics", "stem", "first", "coding", "high school"]
}
```

---

## 📁 File Structure

```
├── index.html            # Main markup & GA4 tag
├── css/
│   └── styles.css        # Porkbun-inspired playful styles & responsive layout
├── js/
│   ├── app.js            # App controller, search, filters, modals, GA4 events
│   └── activities.js     # Structured dataset of community activities
├── assets/
│   └── favicon.svg       # Playful Clocktower SVG icon
├── CNAME                 # Custom domain alias for GitHub Pages
└── README.md             # Documentation & setup guide
```
