import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AlynCoin – Quantum‑Resistant Layer‑1',
  description: 'AlynCoin is a pioneering Layer‑1 chain combining post‑quantum signatures, zk‑STARK proofs and a hybrid PoW consensus to deliver unmatched security, scalability and privacy.',
};

/**
 * Root layout wraps every page with the site header, footer and a dark
 * background. The children prop is rendered inside a main element with
 * a maximum width to keep content comfortably readable on large
 * displays.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Header />
        <main className="mx-auto max-w-screen-xl">{children}</main>
        <Footer />
      </body>
    </html>
  );
}