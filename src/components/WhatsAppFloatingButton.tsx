'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '@/constants/contact';

export default function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-fadeIn">
      {/* Tooltip prompt (dismissible or auto-shown) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-surface-card text-white text-xs font-semibold py-2 px-3.5 rounded-xl shadow-elevated border border-surface-border">
          <span>Tanya tim kami via WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Tutup tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl('Halo Taktis Digital, saya ingin konsultasi via WhatsApp.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Taktis Digital via WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
}

