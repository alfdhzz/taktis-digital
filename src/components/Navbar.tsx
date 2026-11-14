'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '@/constants/contact';

const NAV_LINKS = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Alur Kerja', href: '#alur-kerja' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Tim Kami', href: '#tim' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0B2249]/90 backdrop-blur-md border-b border-surface-border shadow-elevated'
          : 'bg-[#0B2249]/70 backdrop-blur-sm border-b border-surface-border/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform duration-150 hover:-translate-y-0.5"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-brand-400/30 shadow-subtle bg-white shrink-0">
              <Image
                src="/images/logo-taktis.jpeg"
                alt="Logo Taktis Digital"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight text-white group-hover:text-brand-300 transition-colors">
              {CONTACT_INFO.brandName}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={getWhatsAppUrl('Halo Taktis Digital, saya ingin konsultasi gratis mengenai proyek website.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-brand-950 bg-white hover:bg-brand-50 transition-all duration-150 shadow-subtle hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Konsultasi Gratis</span>
              <ArrowUpRight className="w-4 h-4 text-slate-600" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-surface-card transition-colors"
              aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-surface-border bg-[#0C1F41] shadow-elevated px-4 pt-3 pb-6">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-white hover:bg-surface-card px-3 py-2 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-surface-border">
              <a
                href={getWhatsAppUrl('Halo Taktis Digital, saya ingin konsultasi gratis mengenai proyek website.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg text-sm font-semibold text-brand-950 bg-white hover:bg-brand-50 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Konsultasi Gratis via WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
