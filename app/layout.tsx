import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'AlynCoin | Quantum-Resistant Cryptocurrency',
  description: 'Quantum-secure Layer-1 blockchain with zk-STARKs and post-quantum signatures.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* 🔔 Global Early Mining Notice */}
        <div className="w-full bg-gradient-to-r from-cyan-700 via-black to-cyan-700 text-white text-sm md:text-base font-semibold py-2 px-4 fixed top-0 z-50 animate-marquee overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee-inner">
            🚀 Early Mining Access Alert! Tag <span className="text-yellow-300 font-bold">#AlynCoin</span> on Twitter or Instagram to get whitelist access to early mining rewards & wallet features. 🧠💰 Don’t miss this chance to mine first!
          </div>
        </div>

        {/* Push content down so header isn't overlapped */}
        <div className="h-10"></div>

        <Header />
        <main className="tab-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
