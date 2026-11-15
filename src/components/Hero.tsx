'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Code2, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '@/constants/contact';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 isolate">
      {/* Ambient background glow murni CSS radial-gradient (100% aman di iOS Safari, bebas glitch black-box) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(44, 92, 147, 0.25) 0%, rgba(11, 34, 73, 0) 70%)',
        }}
      />
      <div
        className="absolute top-0 right-0 w-[350px] h-[350px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at top right, rgba(89, 133, 189, 0.20) 0%, rgba(11, 34, 73, 0) 70%)',
        }}
      />
      
      <div
        className="absolute inset-0 -z-10 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#8EB5E0 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border mb-6 shadow-subtle">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-brand-200 tracking-wide uppercase">
                Menerima Proyek Baru — Konsultasi Dibuka
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tightest leading-[1.15] sm:leading-[1.12] mb-6 font-heading">
              Solusi Pembuatan <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 via-brand-300 to-white underline decoration-brand-400 decoration-4 underline-offset-4">Website & Project IT</span> yang Presisi & Skalabel.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-brand-200/90 font-normal leading-relaxed mb-8 max-w-2xl">
              Tingkatkan kredibilitas bisnis Anda dengan website <em>company profile</em> instan dan <em>custom web application</em> modern berbasis Next.js. Dibangun dengan kode bersih, keamanan teruji, dan orientasi konversi nyata.
            </p>

            {/* Dual CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-base font-bold text-brand-950 bg-white hover:bg-brand-50 transition-all duration-200 shadow-elevated hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Mulai Proyek via WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-slate-800" />
              </a>

              <a
                href="#portofolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold text-brand-100 bg-surface-card hover:bg-surface-cardHover border border-surface-border transition-all duration-150 shadow-subtle hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Lihat Portofolio</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-surface-border">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-300 shrink-0" />
                <span className="text-xs font-semibold text-brand-100">Sub-second Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-brand-300 shrink-0" />
                <span className="text-xs font-semibold text-brand-100">Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-300 shrink-0" />
                <span className="text-xs font-semibold text-brand-100">Garansi 30 Hari</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-300 shrink-0" />
                <span className="text-xs font-semibold text-brand-100">100% Hak Milik</span>
              </div>
            </div>

          </div>

          {/* Right Column: Bento Feature Card Preview */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none rounded-2xl bg-surface-card border border-surface-border p-6 shadow-elevated">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-surface-border mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-slate-500/60" />
                    <span className="w-3 h-3 rounded-full bg-slate-500/60" />
                    <span className="w-3 h-3 rounded-full bg-slate-500/60" />
                  </div>
                  <span className="text-xs font-mono text-brand-300/80">taktis-engine.v1</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Production Ready
                </span>
              </div>

              {/* Bento Inner Stats Grid */}
              <div className="grid grid-cols-2 gap-3.5 mb-5">
                
                <div className="p-4 rounded-xl bg-surface-dark border border-surface-border">
                  <p className="text-xs font-medium text-brand-300 mb-1">Google Lighthouse</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-extrabold text-white font-heading">98+</span>
                    <span className="text-xs font-semibold text-emerald-400">Optimal</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">SEO, Perf & Best Practice</p>
                </div>

                <div className="p-4 rounded-xl bg-surface-dark border border-surface-border">
                  <p className="text-xs font-medium text-brand-300 mb-1">Stack Teknologi</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-extrabold text-white font-heading">SSG</span>
                    <span className="text-xs font-semibold text-brand-300">Static Export</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Next.js 16+ & TypeScript</p>
                </div>

              </div>

              {/* Engineering Highlights List */}
              <div className="space-y-3 mb-5">
                <div className="flex items-center justify-between p-3 rounded-lg border border-surface-border bg-surface-dark/70">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-brand-400" />
                    <span className="text-xs font-medium text-slate-200">Strict Content Security Policy (CSP)</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">Active</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border border-surface-border bg-surface-dark/70">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-brand-400" />
                    <span className="text-xs font-medium text-slate-200">Automated Direct WhatsApp Engine</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">Synced</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border border-surface-border bg-surface-dark/70">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-brand-400" />
                    <span className="text-xs font-medium text-slate-200">Edge Caching & Zero Server Overhead</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">Fast</span>
                </div>
              </div>

              {/* Direct Quick Contact Footer */}
              <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs">
                <div className="flex flex-col">
                  <span className="text-slate-400">Direct Contact</span>
                  <span className="font-semibold text-white">{CONTACT_INFO.email}</span>
                </div>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand-300 hover:text-white transition-colors"
                >
                  Hubungi Sekarang &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
