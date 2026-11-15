'use client';

import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, CreditCard, FolderCheck } from 'lucide-react';

interface PricingCard {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  subtitle: string;
  price: string;
  features: string[];
  ctaLabel: string;
  waLink: string;
}

const PRICING_PLANS: PricingCard[] = [
  {
    id: 'starter',
    name: 'Paket Starter — Landing Page',
    subtitle: 'Cocok untuk UMKM, promosi produk, atau profil usaha baru.',
    price: 'Mulai Rp750.000',
    features: [
      '1 Halaman website lengkap & rapi di layar HP maupun laptop',
      'Gratis domain (.my.id / .com) & server aktif 1 tahun',
      'Tombol langsung terhubung ke WhatsApp & Instagram',
      'Loading cepat & ringan diakses',
      'Selesai dalam 3–5 hari kerja + 2x revisi',
    ],
    ctaLabel: 'Pilih Paket Starter',
    waLink:
      'https://wa.me/6287804054071?text=Halo%20Taktis%20Digital%2C%20saya%20tertarik%20dengan%20Paket%20Starter%20(Landing%20Page)%20untuk%20bisnis%20saya.',
  },
  {
    id: 'business',
    name: 'Paket Business — Company Profile',
    badge: 'Paling Diminati',
    popular: true,
    subtitle: 'Cocok untuk perusahaan, instansi, klinik, atau jasa profesional.',
    price: 'Mulai Rp2.000.000',
    features: [
      'Hingga 6 halaman (Beranda, Tentang, Layanan, Galeri/Portofolio, Kontak)',
      'Gratis domain (.com / .id) & sertifikat keamanan SSL (HTTPS)',
      'Halaman Admin untuk ubah teks & foto secara mandiri',
      'Terdaftar di pencarian Google (SEO Dasar) + Google Maps',
      'Selesai dalam 7–14 hari kerja + 3x revisi',
    ],
    ctaLabel: 'Pilih Paket Business',
    waLink:
      'https://wa.me/6287804054071?text=Halo%20Taktis%20Digital%2C%20saya%20tertarik%20dengan%20Paket%20Business%20(Company%20Profile).%20Boleh%20konsultasi%20detailnya%3F',
  },
  {
    id: 'custom',
    name: 'Paket Custom — Web App & Project IT',
    subtitle: 'Cocok untuk sistem operasional bisnis (Kasir, Inventaris, Keuangan, Booking).',
    price: 'Mulai Rp5.000.000',
    features: [
      'Fitur & alur kerja dirancang khusus sesuai kebutuhan bisnis',
      'Sistem login bertingkat (Owner, Admin, Staf)',
      'Database aman & laporan otomatis',
      'Garansi maintenance & dukungan teknis 1–3 bulan',
    ],
    ctaLabel: 'Konsultasi Sistem via WA',
    waLink:
      'https://wa.me/6287804054071?text=Halo%20Taktis%20Digital%2C%20saya%20ingin%20diskusi%20pembuatan%20Paket%20Custom%20(Web%20App%20%2F%20Project%20IT).',
  },
];

export default function Pricing() {
  return (
    <section id="paket-harga" className="py-20 md:py-28 bg-surface-bg border-b border-surface-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-card border border-surface-border text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Pilihan Investasi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Paket Harga Transparan Sesuai Kebutuhan Bisnis Anda.
          </h2>
          <p className="text-base sm:text-lg text-brand-200/90 leading-relaxed">
            Investasi pasti tanpa biaya tersembunyi. Dapatkan website berkecepatan tinggi, tampilan human-crafted berstandar profesional, dan dukungan teknis terpercaya.
          </p>
        </div>

        {/* Pricing Cards Grid (3 Columns on Desktop, 1 Column on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col justify-between rounded-2xl p-7 transition-all duration-200 ${
                plan.popular
                  ? 'relative bg-gradient-to-b from-surface-card to-surface-dark border-2 border-brand-400 shadow-elevated md:-translate-y-2'
                  : 'bg-surface-card border border-surface-border shadow-subtle hover:border-brand-400/50 hover:bg-surface-cardHover hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 right-6 bg-brand-400 text-brand-950 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {/* Plan Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-2 font-heading leading-snug">
                  {plan.name}
                </h3>
                <p className="text-xs text-brand-200/80 leading-relaxed mb-6 min-h-[36px]">
                  {plan.subtitle}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-xl bg-surface-dark border border-surface-border mb-6">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Estimasi Investasi
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
                    {plan.price}
                  </span>
                </div>

                {/* Features List */}
                <div className="pt-2 mb-8">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-brand-300 mb-3.5">
                    Fasilitas & Fitur:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 border-t border-surface-border">
                <a
                  href={plan.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-150 ${
                    plan.popular
                      ? 'bg-white hover:bg-brand-50 text-brand-950 shadow-subtle hover:-translate-y-0.5 active:translate-y-0'
                      : 'bg-surface-dark hover:bg-white hover:text-brand-950 text-white border border-surface-border'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Catatan Transparan di Bawah Kartu Paket */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-surface-card border border-surface-border shadow-subtle">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Sistem Pembayaran */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-surface-dark border border-surface-border text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1 font-heading">
                  Sistem Pembayaran
                </h4>
                <p className="text-xs text-brand-200/90 leading-relaxed">
                  DP 50% di awal pengerjaan, pelunasan 50% setelah website selesai dan siap online.
                </p>
              </div>
            </div>

            {/* Bahan dari Klien */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-surface-dark border border-surface-border text-brand-300 flex items-center justify-center shrink-0 mt-0.5">
                <FolderCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1 font-heading">
                  Bahan dari Klien
                </h4>
                <p className="text-xs text-brand-200/90 leading-relaxed">
                  Cukup siapkan logo, profil singkat usaha, dan foto produk/kegiatan (teks bisa kami bantu rapikan).
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
