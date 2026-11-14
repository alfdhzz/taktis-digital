'use client';

import React, { useState } from 'react';
import { PORTFOLIO } from '@/data/site-content';
import { getWhatsAppUrl } from '@/constants/contact';
import { ExternalLink, Layers, CheckCircle, ArrowRight } from 'lucide-react';

const CATEGORIES = ['Semua', 'Company Profile', 'Custom Web App'] as const;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const filteredItems = activeCategory === 'Semua'
    ? PORTFOLIO
    : PORTFOLIO.filter((item) => item.category === activeCategory);

  return (
    <section id="portofolio" className="py-20 md:py-28 bg-surface-dark/70 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-card border border-surface-border text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
              Portofolio Terpilih
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
              Karya Rekayasa Nyata yang Menggerakkan Bisnis.
            </h2>
            <p className="text-base text-brand-200/90 leading-relaxed">
              Kumpulan studi kasus implementasi website korporat dan sistem aplikasi kustom yang terbukti menghasilkan performa tinggi, efisiensi operasional, dan konversi nyata.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-surface-card border border-surface-border">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${
                  activeCategory === cat
                    ? 'bg-white text-brand-950 shadow-subtle'
                    : 'text-slate-300 hover:text-white hover:bg-surface-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-2xl bg-surface-card border border-surface-border p-6 shadow-subtle hover:border-brand-400/50 hover:bg-surface-cardHover transition-all duration-200 hover:-translate-y-1 group"
            >
              <div>
                {/* Header Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-surface-dark text-brand-200 border border-surface-border">
                    <Layers className="w-3.5 h-3.5 text-brand-400" />
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    ID: {item.id.toUpperCase()}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 font-heading leading-snug group-hover:text-brand-300 transition-colors">
                  {item.title}
                </h3>

                {/* Project Description */}
                <p className="text-xs text-brand-200/80 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="mb-5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Teknologi Utama:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-surface-dark text-brand-200 border border-surface-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tangible Result & CTA */}
              <div className="pt-4 border-t border-surface-border">
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] font-medium text-emerald-300 leading-tight">
                      {item.results}
                    </p>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(`Halo Taktis Digital, saya tertarik dengan portofolio ${item.title}. Bisa diskusikan solusi serupa untuk bisnis saya?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-semibold text-brand-300 hover:text-white transition-colors group-hover:underline"
                >
                  <span>Diskusikan Proyek Serupa</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Project Prompt Box */}
        <div className="mt-14 p-8 rounded-2xl bg-surface-card border border-brand-400/40 shadow-elevated flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl font-bold font-heading text-white mb-2">
              Punya ide sistem atau spesifikasi website yang unik?
            </h3>
            <p className="text-sm text-brand-200/90 leading-relaxed">
              Kami siap menganalisis kebutuhan spesifik bisnis Anda dan memberikan proposal arsitektur teknis yang relevan.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Halo Taktis Digital, saya ingin konsultasi ide sistem web kustom untuk bisnis saya.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-brand-950 bg-white hover:bg-brand-50 transition-all duration-150 shadow-subtle hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Konsultasikan Ide Anda</span>
            <ArrowRight className="w-4 h-4 text-slate-800" />
          </a>
        </div>

      </div>
    </section>
  );
}
