'use client';

import React from 'react';
import { SERVICES } from '@/data/site-content';
import { getServiceWhatsAppUrl } from '@/constants/contact';
import { Globe, Cpu, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

const ICON_MAP = {
  'company-profile': Globe,
  'custom-web-app': Cpu,
  'it-project-solutions': Wrench,
};

export default function Services() {
  return (
    <section id="layanan" className="py-20 md:py-28 bg-surface-dark/70 border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-card border border-surface-border text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Layanan Utama
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Solusi Rekayasa Web yang Disesuaikan dengan Skala Bisnis Anda.
          </h2>
          <p className="text-base sm:text-lg text-brand-200/90 leading-relaxed">
            Dari representasi korporat elegan hingga sistem manajemen data internal kompleks, kami membangun perangkat lunak dengan pendekatan arsitektur modern, performa tinggi, dan bebas repot.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.id as keyof typeof ICON_MAP] || Globe;
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between rounded-2xl p-7 transition-all duration-200 border ${
                  service.popular
                    ? 'border-brand-400/80 bg-gradient-to-b from-surface-card to-surface-dark shadow-elevated relative'
                    : 'border-surface-border bg-surface-card shadow-subtle hover:border-brand-400/50 hover:bg-surface-cardHover hover:-translate-y-1'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 right-6 bg-brand-400 text-brand-950 text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    Paling Diminati
                  </div>
                )}

                <div>
                  {/* Service Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-surface-dark text-white flex items-center justify-center border border-surface-border shadow-subtle">
                      <IconComponent className="w-6 h-6 text-brand-300" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-surface-dark text-brand-200 border border-surface-border">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-heading">
                    {service.title}
                  </h3>

                  <p className="text-sm text-brand-200/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-5 border-t border-surface-border">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-300 mb-3.5">
                      Cakupan Kerja (Deliverables):
                    </h4>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Service Card CTA */}
                <div className="mt-8 pt-5 border-t border-surface-border">
                  <a
                    href={getServiceWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-150 ${
                      service.popular
                        ? 'bg-white hover:bg-brand-50 text-brand-950 shadow-subtle'
                        : 'bg-surface-dark hover:bg-white hover:text-brand-950 text-white border border-surface-border'
                    }`}
                  >
                    <span>Konsultasikan Layanan Ini</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
