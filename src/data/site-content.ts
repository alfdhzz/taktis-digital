export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  popular?: boolean;
}

export interface WorkflowStep {
  step: string;
  title: string;
  summary: string;
  description: string;
  points: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Company Profile' | 'Custom Web App';
  description: string;
  techStack: string[];
  results: string;
}

export interface FounderItem {
  name: string;
  role: string;
  image: string;
  bio: string;
  focus: string[];
  phoneDisplay: string;
  phoneIntl: string;
  email: string;
  instagram: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'company-profile',
    title: 'Website Company Profile',
    badge: 'Branding & Kredibilitas',
    description: 'Landing page dan website representasi korporat modern untuk membangun kepercayaan klien dengan kecepatan muat instan dan struktur konten berorientasi konversi.',
    deliverables: [
      'Desain UI/UX custom non-template (Human-crafted)',
      'Arsitektur Next.js Static Export berkecepatan tinggi',
      'Integrasi tombol konversi WhatsApp & media sosial',
      'Optimasi SEO on-page dan metadata OpenGraph',
      'Mobile-first responsive (teruji di berbagai ukuran layar)',
      'Setup domain, SSL, dan deployment ke Vercel CDN',
    ],
    popular: true,
  },
  {
    id: 'custom-web-app',
    title: 'Custom Web Application',
    badge: 'Sistem & Skalabilitas',
    description: 'Pengembangan sistem web interaktif sesuai logika bisnis spesifik perusahaan, mulai dari portal internal, dashboard manajemen data, hingga automasi alur kerja.',
    deliverables: [
      'Arsitektur Next.js App Router & TypeScript aman',
      'Desain dashboard modular & intuitif (Bento style)',
      'Integrasi database, REST API, atau backend pihak ketiga',
      'Manajemen autentikasi dan hak akses (Role-Based Access)',
      'Validasi data ketat dan perlindungan celah keamanan sisi klien',
      'Dokumentasi teknis menyeluruh dan arsitektur kode bersih',
    ],
  },
  {
    id: 'it-project-solutions',
    title: 'IT Project Solutions',
    badge: 'Konsultasi & Refactoring',
    description: 'Penyelesaian kendala teknis perangkat lunak, modernisasi website lawas, audit performa, serta percepatan delivery proyek IT yang tertunda.',
    deliverables: [
      'Audit kode & performa (mencapai skor Lighthouse 95+)',
      'Refactoring kode usang ke modern web stack',
      'Integrasi payment gateway, webhook, & automasi data',
      'Penyusunan arsitektur sistem yang modular dan tahan uji',
      'Pendampingan teknis intensif dan transfer knowledge tim',
    ],
  },
];

export const WORKFLOW: WorkflowStep[] = [
  {
    step: '01',
    title: 'Konsultasi & Analisis Kebutuhan',
    summary: 'Memahami tujuan bisnis dan spesifikasi teknis',
    description: 'Kami mendengarkan target bisnis Anda, menentukan ruang lingkup proyek (scope), serta merumuskan arsitektur solusi teknis yang paling efisien tanpa fitur mubazir.',
    points: ['Requirement Gathering & Scope Definition', 'Estimasi Timeline & Anggaran Transparan'],
  },
  {
    step: '02',
    title: 'Desain & Wireframing Presisi',
    summary: 'Struktur visual terarah tanpa template generik',
    description: 'Merancang tata letak antarmuka (UI/UX) dengan pendekatan editorial modern, palet warna brand terkurasi, dan alur konversi pengunjung yang terukur.',
    points: ['Bento Grid Layout & Tipografi Human-Crafted', 'Review & Persetujuan Mockup Interaktif'],
  },
  {
    step: '03',
    title: 'Pengembangan & Pengujian Ketat',
    summary: 'Clean code dengan TypeScript & Tailwind',
    description: 'Penulisan kode berskala industri menggunakan Next.js dan TypeScript. Melalui uji responsivitas multi-device, sanitasi keamanan, dan audit performa Lighthouse.',
    points: ['Clean, Maintainable & Scalable Codebase', 'Lighthouse 95+ & Security Header Configuration'],
  },
  {
    step: '04',
    title: 'Deployment & Serah Terima Penuh',
    summary: 'Website live di Vercel dengan hak milik 100%',
    description: 'Peluncuran website di cloud CDN global, serah terima kode sumber lengkap tanpa lock-in vendor, serta masa garansi pemeliharaan teknis pasca-rilis.',
    points: ['Live Global CDN Deployment & SSL Aktif', '100% Full Source Code Ownership & Garansi'],
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Logistics Fleet & Dispatch Management System',
    category: 'Custom Web App',
    description: 'Aplikasi web pemantauan armada logistik terintegrasi dengan pelacakan status rute, analitik bahan bakar, dan otomasi laporan pengiriman harian.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    results: 'Efisiensi waktu dispatch armada meningkat 35% dan waktu muat dashboard < 0.8 detik.',
  },
  {
    id: 'p2',
    title: 'Advisory & Corporate Law Firm Profile',
    category: 'Company Profile',
    description: 'Website profil firma hukum korporat dengan estetika editorial berkelas, navigasi jasa hukum spesifik, serta formulir intake klien langsung ke WhatsApp.',
    techStack: ['Next.js SSG', 'TypeScript', 'Tailwind CSS', 'Vercel Edge'],
    results: 'Skor Lighthouse 99 di mobile dan tingkat konversi formulir konsultasi naik 60%.',
  },
  {
    id: 'p3',
    title: 'Internal Procurement & Inventory Management',
    category: 'Custom Web App',
    description: 'Sistem pengadaan barang internal dengan validasi alur approval multi-level, manajemen stok otomatis, dan export laporan audit instan.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Role-Based Access'],
    results: 'Mengeliminasi duplikasi order pembelian dan memangkas waktu approval dari 3 hari menjadi 2 jam.',
  },
  {
    id: 'p4',
    title: 'Industrial Equipment & Heavy Machinery Showcase',
    category: 'Company Profile',
    description: 'Katalog digital dan profil bisnis manufaktur alat berat dengan spesifikasi teknis interaktif dan filter kategori produk multi-parameter.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
    results: 'Mendapat 120+ leads prospek B2B via WhatsApp dalam bulan pertama peluncuran.',
  },
  {
    id: 'p5',
    title: 'Automated Invoice & Client Billing Engine',
    category: 'Custom Web App',
    description: 'Platform pembuatan invoice digital otomatis dengan integrasi pengingat jatuh tempo via WhatsApp dan rekonsiliasi status pembayaran.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js API'],
    results: 'Mempercepat rata-rata penerimaan pembayaran piutang klien hingga 40%.',
  },
  {
    id: 'p6',
    title: 'Digital Property & Residential Portfolio',
    category: 'Company Profile',
    description: 'Landing page showcase properti hunian eksklusif dengan galeri interaktif, kalkulator simulasi cicilan sederhana, dan direct agent connection.',
    techStack: ['Next.js SSG', 'TypeScript', 'Tailwind CSS'],
    results: 'Zero downtime dengan latensi global rata-rata di bawah 45ms via Vercel Edge.',
  },
];

export const FOUNDERS: FounderItem[] = [
  {
    name: 'Alif Fajdhan Yudhistiro',
    role: 'Lead Developer & Co-Founder',
    image: '/images/profile-alif.jpeg',
    bio: 'Memimpin rekayasa teknis perangkat lunak, perancangan arsitektur sistem Next.js yang skalabel, penulisan kode bersih (clean code), dan optimasi performa berkecepatan tinggi.',
    focus: ['Full-Stack Engineering', 'System Architecture', 'High Performance & Security'],
    phoneDisplay: '+62 878-0405-4071',
    phoneIntl: '6287804054071',
    email: 'taktisdigitalmyid@gmail.com',
    instagram: '@taktis.digital',
  },
  {
    name: 'Yusup Kurniawan',
    role: 'Project Manager & Co-Founder',
    image: '/images/profile-yusup.jpeg',
    bio: 'Mengelola manajemen siklus proyek IT, memastikan alur kerja tepat waktu, transparansi komunikasi dengan klien, dan keselarasan teknologi dengan strategi pertumbuhan bisnis.',
    focus: ['Project Management', 'Client Strategy', 'Agile Delivery & Quality Assurance'],
    phoneDisplay: '+62 896-2989-2369',
    phoneIntl: '6289629892369',
    email: 'taktisdigitalmyid@gmail.com',
    instagram: '@taktis.digital',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Berapa lama estimasi waktu pengerjaan sebuah proyek?',
    answer: 'Untuk Website Company Profile standar, waktu pengerjaan berkisar antara 7 hingga 14 hari kerja. Untuk Custom Web Application atau solusi IT dengan fitur spesifik, estimasi waktu disesuaikan dengan kompleksitas alur kerja (biasanya 3–6 minggu). Seluruh linimasa disepakati di awal secara transparan.',
  },
  {
    question: 'Bagaimana skema pembayaran di Taktis Digital?',
    answer: 'Kami menerapkan sistem pembayaran bertahap yang aman dan adil: Down Payment (DP) awal sebesar 50% untuk memulai tahap desain & pengembangan, dan pelunasan 50% setelah website selesai diuji coba serta siap dideploy ke domain resmi Anda.',
  },
  {
    question: 'Apakah saya mendapatkan kepemilikan penuh atas source code?',
    answer: 'Ya, 100%. Kami tidak menerapkan sistem sewa atau vendor lock-in. Setelah proyek selesai dan dilunasi, seluruh source code (repositori Git) dan aset desain diserahkan sepenuhnya menjadi aset intelektual bisnis Anda.',
  },
  {
    question: 'Apakah ada garansi dan dukungan pemeliharaan setelah website rilis?',
    answer: 'Pasti. Setiap proyek kami sertai masa garansi pemeliharaan teknis gratis (free maintenance) selama 30 hari pasca-peluncuran untuk memastikan tidak ada kendala teknis atau bug tak terduga.',
  },
  {
    question: 'Mengapa Taktis Digital menggunakan Next.js dan Tailwind CSS, bukan WordPress?',
    answer: 'Next.js memungkinkan website dimuat secara instan (sub-second loading), tahan terhadap serangan malware database umum yang sering menyerang plugin WordPress, serta memiliki performa SEO dan fleksibilitas integrasi masa depan yang jauh lebih unggul.',
  },
  {
    question: 'Apakah saya bisa berkonsultasi terlebih dahulu tanpa komitmen langsung?',
    answer: 'Tentu saja. Konsultasi awal 100% gratis. Anda dapat mendiskusikan kendala teknis, rencana proyek, atau sekadar meminta opini arsitektur website dengan tim kami langsung melalui WhatsApp.',
  },
];

