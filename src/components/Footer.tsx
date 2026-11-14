'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_INFO, getWhatsAppUrl } from '@/constants/contact';
import { MessageSquare, Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import InstagramIcon from '@/components/icons/InstagramIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-slate-300 border-t border-surface-border">
      
      {/* Final Pre-Footer CTA Banner */}
      <div className="border-b border-surface-border bg-gradient-to-b from-surface-bg to-surface-dark py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-surface-card border border-brand-400/40 p-6 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            
            {/* Subtle decorative glow (100% aman untuk Safari & iOS WebKit) */}
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(89, 133, 189, 0.20) 0%, transparent 70%)',
              }}
            />
            <div
              className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(89, 133, 189, 0.20) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-surface-border text-brand-300 text-xs font-semibold uppercase tracking-wider mb-5">
                Konsultasi Bebas Biaya
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tightest mb-5 font-heading">
                Siap Mewujudkan Website & Solusi IT Terbaik untuk Bisnis Anda?
              </h2>

              <p className="text-base sm:text-lg text-brand-100 max-w-2xl mx-auto mb-9 leading-relaxed">
                Mulai diskusikan rencana pembuatan website company profile atau custom web application Anda bersama tim rekayasa Taktis Digital hari ini.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsAppUrl('Halo Taktis Digital, saya ingin berdiskusi mengenai proyek website kami.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-brand-950 bg-white hover:bg-brand-50 transition-all duration-200 shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                  <span>Konsultasi Sekarang via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-700" />
                </a>

                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white bg-surface-dark hover:bg-surface-card border border-surface-border transition-colors"
                >
                  <InstagramIcon className="w-5 h-5 text-rose-400" />
                  <span>Lihat {CONTACT_INFO.instagramHandle}</span>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-surface-border flex items-center justify-center gap-6 text-xs text-brand-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Garansi Pemeliharaan 30 Hari
                </span>
                <span>•</span>
                <span>100% Full Source Code Ownership</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-brand-400/30 bg-white shrink-0">
                <Image
                  src="/images/logo-taktis.jpeg"
                  alt="Logo Taktis Digital"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight group-hover:text-brand-300 transition-colors">
                {CONTACT_INFO.brandName}
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Agensi digital spesialis pembuatan website <em>company profile</em>, <em>custom web application</em>, dan solusi rekayasa IT berorientasi performa tinggi dan konversi nyata.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-400/40 transition-colors"
                aria-label="Instagram Taktis Digital"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-brand-400/40 transition-colors"
                aria-label="WhatsApp Taktis Digital"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#layanan" className="text-slate-400 hover:text-white transition-colors">
                  Layanan & Deliverables
                </a>
              </li>
              <li>
                <a href="#alur-kerja" className="text-slate-400 hover:text-white transition-colors">
                  Alur Kerja Proyek
                </a>
              </li>
              <li>
                <a href="#portofolio" className="text-slate-400 hover:text-white transition-colors">
                  Portofolio Terpilih
                </a>
              </li>
              <li>
                <a href="#tim" className="text-slate-400 hover:text-white transition-colors">
                  Co-Founder & Tim Rekayasa
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors">
                  Pertanyaan Umum (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Kontak Resmi
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {CONTACT_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-300 shrink-0" />
                <span>Email: {CONTACT_INFO.email}</span>
              </a>

              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-rose-400 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Instagram: {CONTACT_INFO.instagramHandle}</span>
              </a>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Indonesia — Layanan Seluruh Nusantara</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-surface-card border border-surface-border">
              <p className="text-xs text-slate-300">
                Respon Cepat:{' '}
                <span className="text-white font-medium">Senin – Sabtu, 08:00 – 21:00 WIB</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {CONTACT_INFO.brandName}. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              Secure Static Infrastructure
            </span>
            <span>Next.js 16+ & TypeScript</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
