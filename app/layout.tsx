import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'AlynCoin | Quantum-Resistant Cryptocurrency',
  description: 'Quantum-ready Layer-1 blockchain built for decentralization, privacy, and post-quantum security.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-950 text-white min-h-screen">
        <div className="w-full">
          <Header />
          <main className="p-6 max-w-7xl mx-auto">{children}</main>
          <footer className="text-center text-sm text-gray-500 py-10 border-t border-gray-800">
            © 2025 AlynCoin. Built with quantum resistance in mind.
          </footer>
        </div>
      </body>
    </html>
  );
}