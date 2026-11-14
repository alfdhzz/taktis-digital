/**
 * Konfigurasi kontak terpusat Taktis Digital
 * Sesuai spesifikasi PRD & Kartu Nama Resmi
 */

export const CONTACT_INFO = {
  brandName: 'Taktis Digital',
  tagline: 'Solusi Solutif & Terpercaya untuk Website & Project IT',
  phoneDisplay: '0878-0405-4071',
  phoneRaw: '087804054071',
  phoneIntl: '6287804054071',
  email: 'taktisdigitalmyid@gmail.com',
  instagramHandle: '@taktis.digital',
  instagramUrl: 'https://www.instagram.com/taktis.digital/',
  location: 'Indonesia',
  founders: {
    alif: {
      name: 'Alif Fajdhan Yudhistiro',
      role: 'Lead Developer & Co-Founder',
      phoneDisplay: '+62 878-0405-4071',
      phoneIntl: '6287804054071',
      email: 'taktisdigitalmyid@gmail.com',
      instagram: '@taktis.digital',
    },
    yusup: {
      name: 'Yusup Kurniawan',
      role: 'Project Manager & Co-Founder',
      phoneDisplay: '+62 896-2989-2369',
      phoneIntl: '6289629892369',
      email: 'taktisdigitalmyid@gmail.com',
      instagram: '@taktis.digital',
    },
  },
} as const;

/**
 * Generator URL WhatsApp otomatis yang aman dengan encodeURIComponent
 */
export function getWhatsAppUrl(customMessage?: string, targetPhone: string = CONTACT_INFO.phoneIntl): string {
  const defaultMessage = 'Halo Taktis Digital, saya tertarik untuk konsultasi mengenai pembuatan website / project IT.';
  const message = customMessage || defaultMessage;
  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Link WhatsApp dengan pesan spesifik per layanan
 */
export function getServiceWhatsAppUrl(serviceTitle: string): string {
  const message = `Halo Taktis Digital, saya tertarik untuk konsultasi mengenai layanan ${serviceTitle}. Mohon informasi lebih lanjut.`;
  return `https://wa.me/${CONTACT_INFO.phoneIntl}?text=${encodeURIComponent(message)}`;
}
