import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { CONTACT_INFO } from '@/constants/contact';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://taktisdigital.com'),
  title: 'Taktis Digital',
  description:
    'Layanan pembuatan website company profile modern, custom web application, dan solusi project IT berstandar industri dengan kecepatan tinggi, clean code, dan garansi pemeliharaan.',
  icons: {
    icon: '/images/logo-taktis.jpeg',
    shortcut: '/images/logo-taktis.jpeg',
    apple: '/images/logo-taktis.jpeg',
  },
  keywords: [
    'Taktis Digital',
    'Jasa Pembuatan Website',
    'Company Profile Modern',
    'Custom Web Application',
    'Project IT Solutions',
    'Next.js Developer Indonesia',
    'Software House Terpercaya',
  ],
  authors: [{ name: 'Taktis Digital Team' }],
  creator: 'Taktis Digital',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://taktisdigital.com',
    siteName: CONTACT_INFO.brandName,
    title: 'Taktis Digital',
    description:
      'Solusi pembuatan website company profile dan sistem web kustom berkecepatan tinggi dengan Next.js, clean code, dan orientasi konversi bisnis.',
    images: [
      {
        url: '/images/logo-taktis.jpeg',
        width: 800,
        height: 600,
        alt: 'Taktis Digital Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taktis Digital',
    description: 'Solusi pembuatan website company profile dan custom web app berstandar industri.',
    images: ['/images/logo-taktis.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-surface-bg text-slate-100 antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

