import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Navy Blue resmi dari referensi gambar
        brand: {
          50: '#F0F4FA',
          100: '#DEE8F5',
          200: '#BDD3EE',
          300: '#8EB5E0',
          400: '#5985BD', // Palette Swatch 3 (Soft Muted Blue)
          500: '#3D6FA8',
          600: '#2C5C93', // Palette Swatch 2 (Steel Navy)
          700: '#1E477A',
          800: '#133C6F', // Palette Swatch 1 (Mid Navy)
          900: '#0B2249', // Palette Main Navy Blue (HEX #0B2249)
          950: '#0C1F41', // Palette Swatch 4 (Deepest Navy)
        },
        surface: {
          bg: '#0B2249',       // Background website utama (Navy Blue)
          dark: '#081730',     // Background kontras lebih pekat
          card: '#102B52',     // Surface kartu / Bento
          cardHover: '#163868',// Surface kartu saat di-hover
          muted: '#133C6F',
          border: 'rgba(89, 133, 189, 0.22)', // Border tipis presisi bernuansa soft navy
          borderHover: 'rgba(89, 133, 189, 0.45)',
        },
      },
      fontFamily: {
        heading: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.02em',
      },
      boxShadow: {
        subtle: '0 2px 6px 0 rgba(8, 23, 48, 0.3)',
        elevated: '0 10px 25px -5px rgba(8, 23, 48, 0.5), 0 8px 10px -6px rgba(8, 23, 48, 0.4)',
        glow: '0 0 35px -5px rgba(89, 133, 189, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
