'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/site-content';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/constants/contact';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-surface-dark/70 border-b border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-card border border-surface-border text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Pertanyaan Umum (FAQ)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Segala Hal yang Perlu Anda Ketahui.
          </h2>
          <p className="text-base text-brand-200/90 leading-relaxed">
            Transparansi adalah prioritas kami. Berikut rangkuman pertanyaan yang sering diajukan mengenai layanan, proses kerja, dan kepemilikan kode di Taktis Digital.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-brand-400/70 bg-surface-cardHover shadow-elevated'
                    : 'border-surface-border bg-surface-card hover:border-brand-400/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white font-heading pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-white text-brand-950 rotate-180'
                        : 'bg-surface-dark text-brand-300 border border-surface-border'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-brand-100/90 leading-relaxed border-t border-surface-border/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-surface-card border border-surface-border">
          <p className="text-sm font-medium text-slate-200 mb-3">
            Punya pertanyaan lain yang belum terjawab di sini?
          </p>
          <a
            href={getWhatsAppUrl('Halo Taktis Digital, saya ingin bertanya lebih lanjut mengenai layanan pembuatan website.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-white underline underline-offset-4 decoration-brand-400 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanyakan Langsung ke Tim Kami via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
