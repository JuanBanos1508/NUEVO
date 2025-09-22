import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { FaWhatsapp } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Work Now',
  description: 'Created with v0',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.className}>
      <body>
        {children}

        {/* Botón de WhatsApp fijo abajo a la izquierda */}
        <a
          href="https://wa.me/5493413650224"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 left-4 z-50 bg-[#1C0B35] hover:bg-[#A463F2] text-white rounded-full p-3 shadow-lg flex items-center justify-center"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
      </body>
    </html>
  );
}
