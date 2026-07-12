# Log Percakapan — Tutorial Video Iklan AI untuk Bu Rina

---

## Prompt 1
> buat website tutorial pembuatan video iklan dengan AI. gunakan typescript

**Ringkasan jawaban:**
Dibuat project TypeScript website tutorial video iklan AI dengan:
- `package.json`, `tsconfig.json` — setup TypeScript
- `src/data.ts` — 6 modul tutorial (Ide & Naskah, Voiceover, Visual, Editing, Avatar, Workflow) + 15 tools + prompt templates
- `src/main.ts` — navigasi tab, render konten, FAQ
- `public/index.html` + `public/style.css` — dark theme ala developer

---

## Prompt 2
> siapa target segmen web ini? tulis 1

**Ringkasan jawaban:**
UMKM, content creator, dan marketer Indonesia yang ingin bikin iklan video profesional tanpa skill shooting/editing dan budget produksi mahal.

---

## Prompt 3
> 1 yang sangat spesifik, tulis pain pointnya, buat user persona

**Ringkasan jawaban:**
**Segmen:** Pemilik UMKM kuliner kemasan (sambel kemasan, keripik, frozen food) di TikTok Shop.

**Pain point:**
- Wajib konten video tiap hari tapi malu depan kamera, lighting jelek, nggak ada tripod
- Budget Rp 0–200rb/bln, videografer termurah Rp 500rb/video
- Edit CapCut sendiri: 4 jam, hasil amatir, views <100
- Produk "biasa" secara visual, susah dibuat menarik
- Kompetitor pakai creative agency

**User persona:** Bu Rina, 34 tahun, "SambelRin", Kosambi-Tangerang, omzet Rp 8-12jt/bln, platform TikTok Shop + WhatsApp.

---

## Prompt 4
> pov Bu Rina setelah lihat web ini?

**Ringkasan jawaban:**
"Buset, ini semua tools-nya bisa bikin video tanpa aku harus syuting? Terus ada template prompt-nya juga, tinggal copas. Rp 200rb cukup ya buat ElevenLabs sama CapCut Pro doang? Nggak perlu semua tool kayaknya. Nanti aku coba dulu yang Workflow, males baca yang lain."

---

## Prompt 5
> heh :( bu rina ini kritis. pasti ada keluhan

**Ringkasan jawaban:**
Bu Rina mengeluh: tool 15 biji, semuanya bayar, total sejuta lebih/bulan. Midjourney pakai Discord — "Discord itu apa?" Bahasa Inggris semua. Tutorial tulisan doang, nggak ada contoh video. Udah bayar → coba → gagal → duit ilang.

**3 Masalah inti:** (1) Overchoice tanpa prioritas, (2) No visual proof, (3) High-risk first step.

---

## Prompt 6
> terus apa solusimu sebagai developer?

**Ringkasan jawaban:**
Redesign total website menjadi Bu Rina-centric v2:
- Bukan 6 tab 15 tools → 1 jalur cepat, 3 tools saja (ChatGPT + ElevenLabs + CapCut)
- Semua gratis dulu, Rp 0 untuk 30 video pertama
- Prompt bahasa Indonesia, nol jargon
- Before/after naratif per pain point
- FAQ 6 pertanyaan dari objection Bu Rina langsung
- Biaya: Rp 0 (30 video pertama) → Rp 85rb/bln (upgrade)

---

## Prompt 7
> pov Bu Rina, aku ini ibu2, lihat web warna hitam kok gelap. desainnya juga ai slop banget. nah kamu cari referensi di internet. desain layout dan warna unik spesial untuk bu rina

**Ringkasan jawaban:**
Riset via Firecrawl: Dribbble orange UI, warm food palettes, Tokopedia/Shopee card layouts.

**Arah desain baru:** Krem hangat + oranye terakota + cokelat. Card-based layout, rounded besar, shadow lembut. Feel bersih kayak dapur.

Output: v2 dengan `#FFFAF5` background, `#FF6B35` oranye, `#4A2C17` cokelat tua, card putih dengan border.

---

## Prompt 8
> bu Rina ini mengakses web pakai hp. jadi kamu harus nyari referensi si internet, tampilan web tutorial yang mobile optimized buat Bu Rina

**Ringkasan jawaban:**
Riset: Steps UI Design (Setproduct), Duolingo progress pattern, sticky bottom CTA.

**Desain v3 mobile-first:**
- Viewport `user-scalable=no`, `maximum-scale=1.0`
- Single column, vertical scroll only — zero horizontal
- Sticky progress bar 4px di atas (persentase scroll)
- Tombol 48px+ tap target, `:active` feedback (bukan `:hover`)
- Font base 17px, heading 1.55rem
- Card border 2px tegas + subtle shadow
- Step labels: "Langkah 1", badge "💰 Rp 0"
- FAQ emoji 🍃 bukan ▸
- Semua efek hover diganti `:active` untuk touch

---

## Prompt 9
> jenis font kok masih terasa ai sloo ya

**Ringkasan jawaban:**
Ganti dari `system-ui` generic ke **Plus Jakarta Sans** — font buatan desainer Indonesia (Tokopedia design team), khusus dioptimalkan untuk teks bahasa Indonesia. Bentuk bulat, hangat, familiar. Dipakai Gojek, Tokopedia, Blibli. Import via Google Fonts.

---

## Prompt 10
> bu rina kesulitan nyari web ini di google. sepertinya tidak seo friendly

**Ringkasan jawaban:**
Perbaikan SEO:
- Meta title + description dengan keyword "video iklan tanpa syuting", "UMKM kuliner", "TikTok Shop"
- **FAQPage JSON-LD** — 6 pertanyaan lengkap → Google rich snippet
- **HowTo JSON-LD** — 3 langkah tutorial → Google step carousel
- `<noscript>` konten statik → crawler langsung baca tanpa nunggu JS render
- `<main>`, `<section>`, `aria-labelledby` → semantic HTML
- `robots.txt` + `sitemap.xml` + `canonical` URL
- `lang="id"`, Open Graph, Twitter Card

---

## Prompt 11
> catat sesi percakapan ini, tulis prompt dariku apa adanya, kemudian ringkasan jawabanmu. satu prompt saty jawaban, sampai prompt ini. tulis di logBuRina.md

**Ringkasan jawaban:**
File logBuRina.md ini dibuat. 11 prompt + ringkasan jawaban dari awal sampai sekarang.
