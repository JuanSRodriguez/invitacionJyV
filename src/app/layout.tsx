import { Playfair_Display, Montserrat } from 'next/font/google';
import "./globals.css";
import type { Metadata } from 'next';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '700']
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
      <body className={`${playfair.variable} ${montserrat.variable} font-montserrat antialiased min-h-screen overflow-x-hidden`}>
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
          <div className="names-logo font-serif text-base sm:text-lg tracking-wider opacity-80">J&V</div>
        </header>

        <main className="relative z-10 w-full">
          {children}
        </main>

        {/* Shared Footer */}
        <footer className="fixed bottom-4 w-full text-center opacity-30 text-[10px] tracking-[0.5em] text-white uppercase z-50 pointer-events-none">
          Juan & Vale 2026
        </footer>
      </body>
    </html>
  );
}
