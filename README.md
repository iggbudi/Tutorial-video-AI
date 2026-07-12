# 🥘 Video Iklan Tanpa Syuting

> Tutorial interaktif bikin video iklan TikTok Shop pakai AI — untuk UMKM kuliner Indonesia yang nggak berani di depan kamera.

**Live:** https://videoiklan.ai/tutorial

---

## Mengapa Website Ini Ada?

Ibu-ibu penjual sambel, kripik, frozen food di TikTok Shop butuh video jualan tiap hari. Tapi mereka:
- Nggak berani di depan kamera
- Nggak punya tripod, ring light, atau tripod
- Budget Rp 0–200rb/bulan
- Edit sendiri 4 jam → hasil tetap amatir

Website ini kasih **1 jalur cepat: 3 tools gratis, 3 langkah, 1 video siap upload dalam 60 menit.**

---

## Arsitektur

```
video/
├── src/
│   ├── data.ts          # Semua konten: tutorial, tools, FAQ, biaya
│   └── main.ts          # Render DOM dari data.ts
├── public/
│   ├── index.html       # SEO meta + structured data (JSON-LD)
│   ├── style.css        # Mobile-first, Plus Jakarta Sans
│   ├── robots.txt       # Crawler directive
│   ├── sitemap.xml      # Sitemap index
│   └── js/              # Compiled output (gitignored)
├── tsconfig.json        # TypeScript config
├── package.json         # Build & serve scripts
├── logBuRina.md         # Sesi percakapan pembangunan
└── .gitignore
```

**Ditulis dengan:** TypeScript 5.4+ (strict mode, ES2020 target)
**Tanpa framework** — DOM rendering langsung via `innerHTML`
**Output:** `public/js/main.js` (module ES2020)

---

## Stack

| Layer | Teknologi |
|-------|-----------|
| Markup | HTML5 semantic (`<main>`, `<section>`, `<footer>`) |
| Styling | CSS3 custom properties, mobile-first media queries |
| Logic | TypeScript → ES Module |
| Font | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Tokopedia design team) |
| SEO | JSON-LD FAQPage + HowTo, Open Graph, canonical, noscript fallback |

---

## Design Decisions

### Untuk Siapa
**User persona:** Bu Rina, 34 tahun. Jualan sambel bawang kemasan di TikTok Shop dari Tangerang. Omzet Rp 8-12jt/bulan. Akses web dari HP Android.

### Warna
Inspired dari palet makanan Indonesia — krem, oranye sambel, cokelat tanah.

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `--bg` | `#FFFAF5` | Background utama (krem susu) |
| `--orange` | `#FF6B35` | CTA, tombol, badge aktif |
| `--brown-dark` | `#4A2C17` | Heading text |
| `--brown-mid` | `#3D291A` | Body text |
| `--card-border` | `#F5E6D8` | Border kartu |

### Mobile-First Patterns
- **Single column** — nggak ada layout 2 kolom di mobile
- **Sticky progress bar** 4px di atas (scroll percentage)
- **Touch feedback** — semua `:hover` diganti `:active` untuk HP
- **Tap target** — tombol min 48px height
- **Font 17px** base — readable tanpa zoom

---

## Struktur Konten

| Section | Isi |
|---------|-----|
| Hero | Hook: "Nggak Berani di Depan Kamera? Tetap Bisa Bikin Video Jualan." |
| Wizard | 3 langkah: ChatGPT → ElevenLabs → CapCut (semua Rp 0) |
| Demo | 3 before/after nyata: foto produk, suara, ide konten |
| Biaya | Rp 0 (30 video) vs Rp 85.000/bln (upgrade) |
| FAQ | 6 objection Bu Rina — bahasa Indonesia, tanpa jargon |

### Tools yang Direkomendasikan

| Tools | Fungsi | Harga |
|-------|--------|-------|
| [ChatGPT](https://chat.openai.com) | Naskah iklan 30 detik | Gratis |
| [ElevenLabs](https://elevenlabs.io) | Voiceover Indonesia "Bella" | Gratis 10K karakter |
| [CapCut](https://capcut.com) | Edit video + auto-caption | Gratis |

---

## Development

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Dev mode (auto-recompile)
npm run watch

# Start local server
npm start
# → http://localhost:3000
```

### Project Structure

- **`src/data.ts`** — Semua konten diurus di sini. Edit teks tutorial, FAQ, biaya → rebuild → auto-update.
- **`src/main.ts`** — Render functions yang inject HTML ke DOM dari data.ts. Nggak ada framework, cukup `innerHTML`.

---

## SEO

### Structured Data (JSON-LD)
- **FAQPage** — 6 pertanyaan → Google rich snippet di bawah hasil pencarian
- **HowTo** — 3 langkah → Google step-by-step carousel

### Meta Tags
```html
<title>Cara Bikin Video Iklan Tanpa Syuting — Tutorial AI untuk UMKM Kuliner 2024</title>
<meta name="description" content="Tutorial bikin video iklan TikTok Shop tanpa syuting..." />
<link rel="canonical" href="https://videoiklan.ai/tutorial" />
```

### Crawler Fallback
`<noscript>` block di `index.html` berisi konten statik — Googlebot langsung baca tanpa nunggu JS render.

---

## File Penting

| File | Deskripsi |
|------|-----------|
| `src/data.ts` | Edit semua konten di sini |
| `src/main.ts` | Render logic |
| `public/index.html` | SEO meta + structured data |
| `public/style.css` | Desain visual |
| `logBuRina.md` | Log percakapan 11 prompt dari awal |
| `robots.txt` | Crawler allow/deny |
| `sitemap.xml` | Sitemap untuk Google |

---

## License

MIT — silakan fork dan sesuaikan untuk UMKM kamu.
