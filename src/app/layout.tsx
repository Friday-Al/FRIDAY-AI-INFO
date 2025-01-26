import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import '@/styles/globals.css';

const ProtoMono = localFont({
  src: '../../public/fonts/proto-mono.woff',
  variable: '--font-proto-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Friday',
  description: 'AI powered crypto trading',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark ${ProtoMono.className} antialiased w-full h-full px-10 py-6 max-md:py-4 max-md:px-5 space-y-10`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
