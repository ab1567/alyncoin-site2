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
        <Header />
        <main className="tab-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
