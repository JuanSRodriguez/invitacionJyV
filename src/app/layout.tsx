import { Cormorant_Garamond, Alex_Brush } from 'next/font/google';
import "./globals.css";
import type { Metadata } from 'next';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic']
});

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  variable: '--font-cursive',
  weight: ['400']
});

const IMAGES = [
  '/JuanVale.jpg',
  '/juanyvale1.jpg',
  '/juanyvale2.jpg'
];

export const metadata: Metadata = {
  title: "TOUR DE VIDA 2026 | J&V",
  description: "Únete a nuestra historia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${cormorantGaramond.variable} ${alexBrush.variable} font-serif antialiased min-h-screen overflow-x-hidden text-lg`}>
        {/* Shared Triptych Background */}
        <div className="triptych-container">
          {IMAGES.map((src, index) => (
            <div key={src} className="triptych-pane">
              <img
                src={src}
                alt={`Juan & Vale ${index + 1}`}
                className="triptych-image"
              />
            </div>
          ))}
        </div>

        <div className="hero-overlay" />

        {/* Minimalist Header Logo */}
        <header className="fixed top-0 left-0 w-full p-4 sm:p-8 z-50 text-white pointer-events-none">
          <img src="/logojyv-Photoroom.png" alt="J&V Logo" className="w-8 h-8 sm:w-12 sm:h-12 object-contain opacity-90 drop-shadow-lg" />
        </header>

        <main className="relative z-10 w-full">
          {children}
        </main>

      </body>
    </html>
  );
}
