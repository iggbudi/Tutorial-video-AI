import { wizardSteps, demoExamples, faqItems, costTiers, testimonials } from "./data.js";

function renderHero(): void {
  const hero = document.getElementById("hero")!;
  hero.innerHTML = `
    <div class="hero-inner">
      <div class="hero-badge">🥘 Rahasia Video Jualan yang Keliatan Pro — Padahal dari Dapur</div>
      <h1>Nggak Berani di Depan Kamera?<br>Tetap Bisa Bikin Video Jualan.</h1>
      <p class="hero-vivid">Bayangin: 1 video tiap hari dari dapur, views naik, orderan masuk — semua pakai HP.</p>
      <p>Foto produk dari HP + naskah dari AI + suara narator profesional.</p>
      <div class="hero-compare">
        <div class="hero-compare-item">
          <span class="hero-compare-old">Sewa editor</span>
          <span class="hero-compare-price">Rp 500rb/video</span>
        </div>
        <div class="hero-compare-vs">→</div>
        <div class="hero-compare-item hero-compare-new">
          <span class="hero-compare-old">Pakai AI</span>
          <span class="hero-compare-price">Rp 0/video</span>
        </div>
      </div>
      <div class="hero-price">Mulai <span>Rp 0</span></div>
      <p class="hero-gratis">30 video pertama gratis. Nggak pakai kartu kredit.</p>
      <a href="#wizard" class="hero-cta">📱 Mulai Sekarang — Gratis, Nggak Perlu Kartu Kredit →</a>
      <div class="hero-stats">
        <div><strong>⏱ 1 jam</strong><br>per video</div>
        <div><strong>📱 HP doang</strong><br>nggak perlu laptop</div>
        <div><strong>🇮🇩 Indonesia</strong><br>nggak perlu Inggris</div>
      </div>
    </div>
  `;
}

function renderSocialProof(): void {
  const sp = document.getElementById("social-proof")!;
  sp.innerHTML = `
    <div class="section-header">
      <p class="section-label">💬 BUKTI NYATA</p>
      <h2>Mereka Sudah Coba</h2>
      <p class="section-desc">UMKM kuliner lain sudah pakai cara ini. Hasilnya?</p>
    </div>
    <div class="testimonial-scroll">
      ${testimonials
        .map(
          (t) => `
        <div class="testimonial-card">
          <div class="testimonial-text">"${t.text}"</div>
          <div class="testimonial-result">${t.result}</div>
          <div class="testimonial-author">
            <strong>${t.name}</strong> · ${t.role}
          </div>
        </div>`
        )
        .join("")}
    </div>
  `;
}

function renderWizard(): void {
  const w = document.getElementById("wizard")!;
  w.innerHTML = `
    <div class="section-header">
      <p class="section-label">📋 3 LANGKAH AJA</p>
      <h2>Video Pertama Kamu</h2>
      <p class="section-desc">Dari nol sampai siap upload. Semua pakai HP. Hemat Rp 500rb/video.</p>
    </div>
    <div class="wizard-steps">
      ${wizardSteps
        .map(
          (s, i) => `
        <div class="wiz-card" id="step-${i + 1}">
          <div class="wiz-top">
            <span class="wiz-num">Langkah ${i + 1}</span>
            <span class="wiz-badge">💰 ${s.biaya}</span>
          </div>
          <h3>${s.title}</h3>
          <div class="wiz-meta">
            <span>🛠 ${s.tool}</span>
            <span>⏱ ${s.time}</span>
          </div>
          <p>${s.detail}</p>
          <a href="${s.link}" target="_blank" class="wiz-btn">${s.action} →</a>
        </div>`
        )
        .join("")}
    </div>
  `;
}

function renderDemo(): void {
  const d = document.getElementById("demo")!;
  d.innerHTML = `
    <div class="section-header">
      <p class="section-label">📊 BUKTI</p>
      <h2>Sebelum vs Sesudah</h2>
    </div>
    <div class="demo-scroll">
      ${demoExamples
        .map(
          (ex, i) => `
        <div class="demo-card">
          <div class="demo-num">${i + 1}</div>
          <h4>${ex.problem}</h4>
          <div class="demo-box demo-before">
            <strong>Sebelum:</strong><br>${ex.before}
          </div>
          <div class="demo-arrow">↓</div>
          <div class="demo-box demo-after">
            <strong>Sesudah:</strong><br>${ex.after}
          </div>
        </div>`
        )
        .join("")}
    </div>
  `;
}

function renderCost(): void {
  const c = document.getElementById("biaya")!;
  c.innerHTML = `
    <div class="section-header">
      <p class="section-label">💰 BIAYA</p>
      <h2>Hemat Rp 500rb/Video. Cuma 3 Tools, 2 Gratis Selamanya.</h2>
    </div>
    <div class="cost-cards">
      ${costTiers
        .map(
          (t, i) => `
        <div class="cost-card ${i === 0 ? "cost-free" : "cost-paid"}">
          <div class="cost-badge">${i === 0 ? "🌟 MULAI DARI SINI" : "🔓 UPGRADE OPSIONAL"}</div>
          <h4>${t.level}</h4>
          <div class="cost-price">${t.harga}</div>
          <ul>${t.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>`
        )
        .join("")}
    </div>
  `;
}

function renderFAQ(): void {
  const f = document.getElementById("faq")!;
  f.innerHTML = `
    <div class="section-header">
      <p class="section-label">🙋 FAQ</p>
      <h2>Kayaknya Kamu Mikir Ini</h2>
    </div>
    <div class="faq-list">
      ${faqItems
        .map(
          (item) => `
        <details>
          <summary>${item.q}</summary>
          <p>${item.a}</p>
        </details>`
        )
        .join("")}
    </div>
  `;
}

function renderFooter(): void {
  const footer = document.querySelector("footer")!;
  footer.innerHTML = `
    <p>📌 Semua tools punya versi gratis. Tidak perlu kartu kredit.</p>
    <p>Dibuat khusus untuk UMKM Indonesia 🧡</p>
  `;
}

function initProgressBar(): void {
  const bar = document.getElementById("progress-fill")!;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
    bar.style.width = `${pct}%`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderSocialProof();
  renderWizard();
  renderDemo();
  renderCost();
  renderFAQ();
  renderFooter();
  initProgressBar();
});
