# Taktis Digital — Website Landing Page Resmi

Website *landing page* resmi untuk **Taktis Digital** — Digital Agency yang berspesialisasi dalam pembuatan website *company profile*, *custom web application*, dan solusi *project IT*.

Dibangun sesuai spesifikasi **Product Requirements Document (PRD v1.0)** dengan standar *Anti-AI / Human-Crafted Aesthetic*, skor performa Google Lighthouse 95+, dan arsitektur statis yang aman.

---

## 🛠️ Stack Teknologi

- **Framework:** [Next.js 16+ (App Router)](https://nextjs.org/)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Ikonografi:** [Lucide React](https://lucide.dev/) + Custom SVG Icons
- **Tipografi:** Plus Jakarta Sans (Heading) & Inter (Body)
- **Deployment:** Vercel (Edge CDN, SSL otomatis)

---

## 📁 Struktur Direktori

```text
taktis-digital/
├── img/                             # Aset gambar asli pengguna
├── public/
│   └── images/
│       ├── logo-taktis.jpeg         # Logo resmi Taktis Digital
│       ├── profile-alif.jpeg        # Foto Co-Founder & Lead Engineer (Alif)
│       └── profile-yusup.jpeg       # Foto Co-Founder & Tech Strategist (Yusup)
├── src/
│   ├── app/
│   │   ├── globals.css              # Styling Tailwind & font definitions
│   │   ├── layout.tsx               # Root Layout & Metadata SEO OpenGraph
│   │   └── page.tsx                 # Halaman utama landing page
│   ├── components/
│   │   ├── Navbar.tsx               # Sticky Navbar & mobile responsive menu
│   │   ├── Hero.tsx                 # Headline editorial & trust indicator Bento
│   │   ├── Services.tsx             # 3 Kartu layanan utama & deliverables
│   │   ├── Workflow.tsx             # 4 Tahapan alur kerja transparan
│   │   ├── Portfolio.tsx            # Portofolio terpilih & filter kategori
│   │   ├── Team.tsx                 # Co-Founder & Tim Rekayasa
│   │   ├── Faq.tsx                  # Accordion tanya-jawab interaktif
│   │   ├── Footer.tsx               # Pre-footer CTA, legal info, kontak
│   │   ├── WhatsAppFloatingButton.tsx # Quick WhatsApp conversion button
│   │   └── icons/
│   │       └── InstagramIcon.tsx    # Clean SVG icon
│   ├── constants/
│   │   └── contact.ts               # Konfigurasi kontak & WA generator aman
│   └── data/
│       └── site-content.ts          # Konten terstruktur layanan, portofolio, FAQ
├── next.config.mjs                  # HTTP Security Headers (CSP, anti-clickjacking)
├── tailwind.config.ts               # Palet warna brand & tipografi
└── tsconfig.json                    # Konfigurasi TypeScript
```

---

## 🚀 Cara Menjalankan Secara Lokal

1. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

2. **Build untuk produksi:**
   ```bash
   npm run build
   ```

3. **Pratinjau build produksi secara lokal:**
   ```bash
   npm run start
   ```

---

## 📞 Informasi Kontak & Integrasi

Semua link kontak terpusat di `src/constants/contact.ts`:
- **WhatsApp:** `0878-0405-4071` (`6287804054071`)
- **Instagram:** `@taktis.digital`

