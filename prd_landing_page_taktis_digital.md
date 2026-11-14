# Product Requirements Document (PRD)
**Nama Proyek:** Website Landing Page Resmi — Taktis Digital  
**Versi Dokumen:** 1.0  
**Tipe Aplikasi:** Static Front-End Landing Page (Tanpa Backend)  
**Tech Stack Utama:** Next.js (App Router), TypeScript, Tailwind CSS  

---

## 1. Ringkasan Eksekutif & Tujuan Produk
**Taktis Digital** membutuhkan website *landing page* resmi yang berfungsi sebagai pusat kredibilitas digital dan mesin konversi klien untuk layanan jasa *Project IT*, pembuatan website *company profile*, dan pengembangan sistem web kustom (*custom web application*).

**Tujuan Utama:**
* Menampilkan identitas profesional agensi secara ringkas, modern, dan tepercaya.
* Mengonversi pengunjung menjadi prospek (*leads*) melalui tombol aksi langsung menuju **WhatsApp (`087804054071`)** dengan pesan otomatis yang terstruktur.
* Menghubungkan pengunjung dengan aktivitas dan portofolio terbaru di **Instagram (`@taktis.digital`)**.
* Mencapai kecepatan muat instan (*Static Site Generation*) dan skor SEO optimal tanpa ketergantungan pada server backend atau database.

---

## 2. Arsitektur Teknologi (Tech Stack)
* **Framework:** Next.js 15+ (App Router dengan mode *Static Export* / SSG).
* **Bahasa Pemrograman:** TypeScript (untuk keamanan tipe data dan meminimalkan *runtime bug*).
* **Styling:** Tailwind CSS (utility-first CSS untuk konsistensi desain dan ukuran *bundle* minimal).
* **Ikonografi:** Lucide React (ikon garis geometris yang bersih dan ringan).
* **Animasi:** CSS Transitions / Framer Motion (dibatasi hanya untuk *micro-interaction* halus).
* **Hosting & CDN:** Vercel (mendukung *edge caching* global, kompresi aset otomatis, dan sertifikat SSL/HTTPS bawaan).

---

## 3. Struktur Halaman & Fitur Utama

| Bagian (Section) | Tujuan & Konten Utama | Elemen Interaktif / CTA |
| :--- | :--- | :--- |
| **1. Sticky Navbar** | Menampilkan logo **Taktis Digital**, menu navigasi cepat (*Layanan*, *Portofolio*, *Alur Kerja*, *FAQ*), dan tombol kontak. | Tombol CTA primer: **"Konsultasi Gratis"** (mengarah ke WA). |
| **2. Hero Section** | *Headline* tegas mengenai solusi pembuatan website & *project* IT, sub-headline nilai bisnis, serta indikator kepercayaan (mis. *Fast Delivery*, *Clean Code*, *Scalable*). | • CTA Utama: **Mulai Proyek via WhatsApp**<br>• CTA Sekunder: **Lihat Portofolio** |
| **3. Layanan (Services)** | Tiga kartu layanan utama: **Website Company Profile**, **Custom Web Application**, dan **IT Project Solutions**. | Fitur rincian cakupan kerja (*deliverables*) pada masing-masing layanan. |
| **4. Alur Kerja (Workflow)** | Penjelasan 4 tahap kerja yang transparan: *1. Konsultasi & Analisis*, *2. Desain & Prototyping*, *3. Pengembangan & Testing*, *4. Deployment & Serah Terima*. | Tata letak garis waktu horizontal/vertikal yang mudah dipindai mata. |
| **5. Portofolio Terpilih** | Menampilkan studi kasus proyek website dan sistem yang telah dikerjakan lengkap dengan label teknologi yang digunakan. | Filter kategori (*Semua*, *Company Profile*, *Web App*) dan tautan pratinjau. |
| **6. FAQ** | Menjawab 5–6 pertanyaan umum klien (estimasi waktu pengerjaan, sistem pembayaran, dukungan teknis/maintenance, dan kepemilikan *source code*). | Komponen *Accordion* interaktif yang ringan. |
| **7. Final CTA & Footer** | Ajakan penutup bagi calon klien yang siap berdiskusi, informasi kontak resmi, tautan Instagram `@taktis.digital`, dan hak cipta. | Tombol langsung ke WhatsApp (`087804054071`) dan ikon/tautan Instagram (`@taktis.digital`). |

---

## 4. Skill Desain: Standar "Human-Crafted" (Anti-AI Aesthetic)
Untuk menghindari tampilan website yang terasa seperti hasil generate template AI generik (seperti gradasi ungu-biru neon, bayangan tebal berlebihan, atau tata letak simetris yang membosankan), implementasi UI wajib mematuhi aturan berikut:

* **Identitas Warna Brand Asli:** Menggunakan palet warna yang diturunkan langsung dari logo **Taktis Digital** — **Deep Navy Blue (`#0D2B52`)** sebagai warna aksen utama, **Dark Slate (`#0F172A`)** untuk teks judul, dan **Cool Off-White (`#F4F7FB`)** sebagai latar belakang dominan. Dilarang menggunakan *dark mode* neon atau gradasi warna-warni yang tidak relevan dengan brand.
* **Tipografi Editorial & Presisi:** Menggunakan **Plus Jakarta Sans** untuk *heading* (dengan *tight letter-spacing* `-0.02em`) yang dipadukan dengan **Inter** untuk teks paragraf agar keterbacaan tinggi dan terlihat seperti desain agensi korporat modern.
* **Struktur *Bento Grid* & Garis Tegas:** Mengganti kotak-kotak berbayang tebal (*heavy drop-shadow*) dengan permukaan datar (*flat surface*), *border* tipis presisi (`1px solid #E2E8F0`), serta *whitespace* (ruang kosong) yang lega di setiap antar-bagian.
* **Copywriting Manusiawi & Spesifik:** Menghindari jargon klise khas AI (seperti *"Transformasi digital masa depan tanpa batas"*). Gunakan kalimat lugas yang berfokus pada solusi bisnis, kecepatan akses, dan kemudahan pengelolaan sistem.
* **Gerakan Halus (*Restrained Motion*):** Efek *hover* pada tombol dan kartu hanya menggunakan perubahan warna latar atau pergeseran posisi mikro (`translateY(-2px)`) berdurasi `150ms–200ms`.

---

## 5. Skill Keamanan: Standar Keamanan Front-End
Meskipun website bersifat statis (*front-end only*) tanpa penyimpanan data pengguna, lapisan keamanan wajib dikonfigurasi untuk melindungi reputasi domain dan mencegah penyalahgunaan celah sisi klien:

1. **Konfigurasi HTTP Security Headers (`next.config.mjs`):**
   * **`Content-Security-Policy (CSP)`:** Membatasi sumber pemuatan skrip, *font*, dan gambar hanya dari domain resmi sendiri (*self*) dan aset terpercaya untuk mencegah injeksi skrip berbahaya.
   * **`X-Frame-Options: DENY`:** Mencegah website disematkan di dalam `<iframe>` pihak luar (*anti-clickjacking*).
   * **`X-Content-Type-Options: nosniff`:** Mencegah browser menebak tipe MIME file secara sembarangan.
   * **`Referrer-Policy: strict-origin-when-cross-origin`:** Menjaga privasi informasi asal pengunjung saat mengeklik tautan keluar.
   * **`Permissions-Policy`:** Menonaktifkan izin perangkat keras browser yang tidak diperlukan (`camera=(), microphone=(), geolocation=()`).
2. **Keamanan Tautan Eksternal (*Anti-Tabnabbing*):**
   * Seluruh tautan menuju WhatsApp dan Instagram wajib menggunakan atribut `target="_blank" rel="noopener noreferrer"` agar halaman eksternal tidak dapat memanipulasi objek `window.opener` halaman utama.
3. **Sanitasi & Perlindungan Anti-XSS:**
   * Melarang penggunaan `dangerouslySetInnerHTML` di seluruh komponen React.
   * Seluruh parameter teks otomatis pada tautan WhatsApp wajib di-encode menggunakan fungsi bawaan `encodeURIComponent()` agar karakter khusus tidak merusak struktur URL.
4. **Kebersihan Kode & Dependensi:**
   * Tidak menyimpan variabel sensitif di dalam berkas konfigurasi publik (`NEXT_PUBLIC_`).
   * Menjalankan `npm audit` sebelum proses *build* produksi untuk memastikan tidak ada paket pihak ketiga dengan kerentanan kritis.

---

## 6. Spesifikasi Konversi & Integrasi Kontak
Seluruh tombol konsultasi dan media sosial dikelola secara terpusat di dalam satu berkas konstanta (`src/constants/contact.ts`) agar mudah diperbarui di kemudian hari:

* **Nomor WhatsApp Bisnis:** `087804054071` (Format internasional: `6287804054071`)
* **Format Tautan WhatsApp Otomatis:**
  ```text
  https://wa.me/6287804054071?text=Halo%20Taktis%20Digital%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20pembuatan%20website%20%2F%20project%20IT.
  ```
* **Akun Instagram Resmi:** `@taktis.digital`
* **Format Tautan Instagram:**
  ```text
  https://www.instagram.com/taktis.digital/
  ```

---

## 7. Kriteria Keberhasilan & Performa (Acceptance Criteria)
* **Performa Google Lighthouse:** Skor minimal **95+** pada kategori *Performance*, *Accessibility*, *Best Practices*, dan *SEO* untuk tampilan *mobile* maupun *desktop*.
* **Responsivitas Penuh:** Tampilan teruji rapi tanpa *horizontal scroll* pada ukuran layar *mobile* (`360px`–`430px`), tablet (`768px`), hingga layar *desktop* lebar (`1440px`).
* **Validasi Tautan:** Seluruh tombol CTA WhatsApp langsung membuka aplikasi/web WhatsApp dengan nomor `087804054071` dan tautan Instagram mengarah tepat ke profil `@taktis.digital`.