'use client';

import React from 'react';
import Image from 'next/image';
import { FOUNDERS } from '@/data/site-content';
import { ShieldCheck, Compass, Phone, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/constants/contact';
import InstagramIcon from '@/components/icons/InstagramIcon';

export default function Team() {
  return (
    <section id="tim" className="py-20 md:py-28 bg-surface-bg border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-card border border-surface-border text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Di Balik Taktis Digital
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Komitmen Personal & Keahlian Teknikal Langsung dari Co-Founder.
          </h2>
          <p className="text-base sm:text-lg text-brand-200/90 leading-relaxed">
            Kami bukan perantara atau agensi tanpa wajah. Setiap arsitektur sistem dan baris kode diawasi langsung oleh para pendiri yang memiliki dedikasi penuh terhadap kualitas rekayasa dan kepuasan klien.
          </p>
        </div>

        {/* Co-Founders Digital Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="flex flex-col rounded-2xl bg-surface-card border border-surface-border overflow-hidden shadow-elevated hover:border-brand-400/50 hover:bg-surface-cardHover transition-all duration-200 group"
            >
              {/* Photo Area */}
              <div className="relative w-full h-80 sm:h-96 bg-surface-dark">
                <Image
                  src={founder.image}
                  alt={`Foto ${founder.name} - ${founder.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/40 to-transparent" />
                
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-300">
                    Kartu Nama Digital
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight mt-1 mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-brand-200">
                    {founder.role}
                  </p>
                </div>
              </div>

              {/* Bio & Focus Area */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-sm text-brand-100/90 leading-relaxed mb-6">
                    {founder.bio}
                  </p>

                  <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-300 mb-2.5">
                      Fokus Keahlian:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {founder.focus.map((item, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium px-2.5 py-1 rounded-md bg-surface-dark text-slate-200 border border-surface-border"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Business Card Official Contacts */}
                  <div className="p-4 rounded-xl bg-surface-dark/80 border border-surface-border space-y-3 text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        WhatsApp:
                      </span>
                      <a
                        href={getWhatsAppUrl(`Halo ${founder.name}, saya ingin berdiskusi mengenai proyek website kami.`, founder.phoneIntl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-emerald-400 hover:underline"
                      >
                        {founder.phoneDisplay}
                      </a>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-brand-300" />
                        Email:
                      </span>
                      <a
                        href={`mailto:${founder.email}`}
                        className="font-medium text-slate-200 hover:text-white hover:underline break-all"
                      >
                        {founder.email}
                      </a>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                      <span className="text-slate-400 flex items-center gap-2">
                        <InstagramIcon className="w-3.5 h-3.5 text-rose-400" />
                        Instagram:
                      </span>
                      <a
                        href="https://www.instagram.com/taktis.digital/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-rose-300 hover:text-rose-200 hover:underline"
                      >
                        {founder.instagram}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Connect Action */}
                <div className="mt-6 pt-5 border-t border-surface-border">
                  <a
                    href={getWhatsAppUrl(`Halo ${founder.name}, saya ingin konsultasi langsung dengan Anda mengenai project IT.`, founder.phoneIntl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg text-xs font-bold text-brand-950 bg-white hover:bg-brand-50 transition-all duration-150 shadow-subtle hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Hubungi {founder.name.split(' ')[0]} Langsung via WA</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-700" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Transparency Commitment Card */}
        <div className="mt-12 max-w-5xl mx-auto p-6 rounded-2xl bg-surface-card border border-surface-border shadow-subtle flex flex-col sm:flex-row items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-surface-dark border border-surface-border text-brand-300 flex items-center justify-center shrink-0">
            <Compass className="w-6 h-6" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white mb-1 font-heading">
              Diskusi Langsung dengan Tim Rekayasa (Bukan Salesteam)
            </h4>
            <p className="text-xs text-brand-200/90 leading-relaxed">
              Saat Anda berkonsultasi dengan Taktis Digital, Anda langsung berdiskusi dengan orang yang mengerti teknis, arsitektur, dan eksekusi website Anda.
            </p>
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-brand-950 bg-white hover:bg-brand-50 transition-colors shadow-subtle"
          >
            Ngobrol Langsung via WA &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
