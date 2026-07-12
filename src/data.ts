export interface WizardStep {
  title: string;
  tool: string;
  time: string;
  biaya: string;
  detail: string;
  action: string;
  link: string;
}

export const wizardSteps: WizardStep[] = [
  {
    title: "Ceritain Produk ke ChatGPT, Dia yang Tulis Naskahnya",
    tool: "ChatGPT (gratis)",
    time: "15 menit",
    biaya: "Rp 0",
    detail:
      "Ketik aja: 'Aku jualan sambel bawang, pedasnya nampol, cocok buat ayam goreng. Bikinin naskah iklan 30 detik dong.' ChatGPT langsung kasih naskah lengkap — udah ada hook pembuka, deskripsi rasa, sampai kalimat penutup.",
    action: "Buka ChatGPT → ceritain produkmu",
    link: "https://chat.openai.com",
  },
  {
    title: "Suara Narator Kayak TV, Tanpa Rekaman",
    tool: "ElevenLabs (gratis 10.000 karakter)",
    time: "10 menit",
    biaya: "Rp 0",
    detail:
      "Copy naskah dari ChatGPT, buka ElevenLabs di browser HP, paste. Pilih suara 'Bella' — suara cewek Indonesia, intonasinya natural banget. Download. Udah jadi. Nggak ada suara anak nangis di background.",
    action: "Buka ElevenLabs → paste naskah → download",
    link: "https://elevenlabs.io",
  },
  {
    title: "Foto Sambel dari HP + Edit Sekali Klik di CapCut",
    tool: "CapCut (gratis)",
    time: "45 menit",
    biaya: "Rp 0",
    detail:
      "Ambil 3-5 foto produk dari HP (atas meja dapur juga gapapa). Buka CapCut, import foto + suara tadi. CapCut otomatis kasih transisi, musik, dan caption. Tinggal export. Selesai.",
    action: "Buka CapCut → import foto & suara → export",
    link: "https://capcut.com",
  },
];

export interface BeforeAfter {
  problem: string;
  before: string;
  after: string;
}

export const demoExamples: BeforeAfter[] = [
  {
    problem: "Foto produk dari meja dapur",
    before:
      "📱 Foto botol sambel dari atas — cahaya lampu kuning, latar ada piring kotor & tangan megang botol. Dibuka di TikTok: kayak foto kiriman WhatsApp.",
    after:
      "🎬 Video 15 detik: latar bersih otomatis (hapus background), botol sambel zoom rapi, teks 'Sambel Bawang Homemade — Pedes Nampol!' muncul animasi, suara narator perempuan jelasin rasa. Layak TikTok Shop.",
  },
  {
    problem: "Rekam suara sendiri",
    before:
      "🎤 'Halo semuanya kenalin ini sambel...' — suara kecil, anak nangis di belakang, napas ngos-ngosan, jeda nggak jelas. Dengerin sendiri udah males.",
    after:
      "🎙️ Suara cewek profesional, intonasi naik-turun natural, jeda di timing pas, ada musik latar lembut. Semua hasil AI — naskah ChatGPT, suara ElevenLabs. Nol rekaman.",
  },
  {
    problem: "Ide konten mentok tiap hari",
    before:
      "💭 'Bingung... hari ini ngomongin apa lagi ya?' — caption cuma 1 kalimat, isinya sama kayak kemarin, lama-lama nggak upload karena kehabisan ide.",
    after:
      "💡 ChatGPT kasih 30 ide konten dalam 5 menit: '3 alasan sambel ini beda dari yang lain', 'Reaksi pelanggan yang udah nyoba', 'Resep simpel pakai sambel ini', tinggal pilih dan eksekusi.",
  },
];

export interface ObjectionQA {
  q: string;
  a: string;
}

export const faqItems: ObjectionQA[] = [
  {
    q: "Saya nggak ngerti bahasa Inggris. Tools-nya susah ya?",
    a: "Tiga tools utama (ChatGPT, ElevenLabs, CapCut) semuanya support bahasa Indonesia. ChatGPT tinggal ketik bahasa Indonesia kayak chatting WhatsApp. ElevenLabs ada suara Indonesia 'Bella'. CapCut tampilannya bahasa Indonesia. Nggak perlu translate atau ngerti Inggris sama sekali.",
  },
  {
    q: "Takut udah daftar, bayar, eh gagal. Gimana?",
    a: "Tenang — jalur di atas GRATIS semua. ChatGPT gratis selamanya. ElevenLabs gratis 10.000 karakter (cukup buat 30 video). CapCut gratis selamanya. Kamu bisa bikin 30 video pertama tanpa keluar uang sepeser pun. Nggak perlu kartu kredit. Coba dulu, kalau cocok baru upgrade.",
  },
  {
    q: "Suara robot kayak Google Translate?",
    a: "Bukan. Suara 'Bella' dari ElevenLabs itu suara cewek Indonesia natural — sering dikira orang beneran. Ada intonasi naik-turun, jeda pas, nggak monoton kayak text-to-speech jaman dulu. Coba gratis dulu, dengerin sendiri.",
  },
  {
    q: "Saya cuma jualan sambel rumahan. Pantes pakai AI?",
    a: "Lho, justru karena jualan sambel rumahan kamu butuh ini. Kompetitor di TikTok Shop udah pada pakai konten pro. Kamu butuh video yang keliatan meyakinkan — dan AI bikin itu tanpa kamu harus sewa videografer Rp 500rb. Bikin video sambil masak, upload, lanjut masak lagi. AI bantu, bukan gantiin.",
  },
  {
    q: "Dijamin laris nggak?",
    a: "Nggak ada yang bisa jamin viral — waspada kalau ada yang janjiin. Tapi yang pasti: dengan AI kamu bisa upload 1 video/hari secara konsisten. Dan di TikTok Shop, konsistensi itu yang bikin algoritma bekerja. 30 video gratis — coba aja dulu, lihat views-nya naik apa nggak.",
  },
  {
    q: "Saya cuma punya HP Android biasa, bisa?",
    a: "Bisa banget. ChatGPT dan ElevenLabs tinggal buka dari Chrome HP. CapCut tinggal download di Play Store. Semua tutorial di atas dikerjain dari HP. Nggak perlu laptop, nggak perlu kamera.",
  },
];

export interface CostTier {
  level: string;
  harga: string;
  items: string[];
}

export const costTiers: CostTier[] = [
  {
    level: "Gratis (30 video pertama)",
    harga: "Rp 0",
    items: [
      "ChatGPT: unlimited naskah",
      "ElevenLabs: 10.000 karakter (~30 video)",
      "CapCut: editor penuh + auto-caption",
    ],
  },
  {
    level: "Basic (setelah gratis habis)",
    harga: "Rp 85.000/bln",
    items: [
      "ChatGPT: tetap gratis",
      "ElevenLabs: suara premium Indonesia, 30.000 karakter",
      "CapCut: tetap gratis",
    ],
  },
];
