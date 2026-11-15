'use client';

import React from 'react';
import { WORKFLOW } from '@/data/site-content';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/constants/contact';

export default function Workflow() {
  return (
    <section id="alur-kerja" className="py-20 md:py-28 bg-surface-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-card border border-surface-border text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Alur Kerja Transparan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Proses Terstruktur dari Ide Hingga Serah Terima.
          </h2>
          <p className="text-base sm:text-lg text-brand-200/90 leading-relaxed">
            Tidak ada kejutan atau birokrasi berbelit. Kami menerapkan metodologi kerja taktis dan transparan pada setiap fase agar proyek Anda selesai tepat waktu dengan kualitas tertinggi.
          </p>
        </div>

        {/* 4 Steps Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW.map((step, index) => (
            <div
              key={step.step}
              className="flex flex-col justify-between rounded-2xl bg-surface-card border border-surface-border p-6 shadow-subtle hover:border-brand-400/50 hover:bg-surface-cardHover transition-all duration-200 hover:-translate-y-1 relative group"
            >
              <div>
                {/* Step Number & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-black text-3xl text-brand-400/30 group-hover:text-brand-300 transition-colors duration-200">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded bg-surface-dark text-brand-200 border border-surface-border">
                    Fase {index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-heading leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs font-medium text-brand-300 mb-3">
                  {step.summary}
                </p>

                <p className="text-xs text-brand-200/80 leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              {/* Highlights Points */}
              <div className="pt-4 border-t border-surface-border space-y-2">
                {step.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-300 shrink-0 mt-0.5" />
                    <span className="leading-tight">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Bottom Trust Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-surface-card border border-surface-border shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-slate-200">
              Punya kebutuhan mendesak atau deadline proyek yang ketat?
            </span>
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-white underline underline-offset-4 decoration-brand-400 transition-colors"
          >
            <span>Diskusikan Timeline Anda</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
