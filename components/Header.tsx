import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-950 text-white px-6 py-4 shadow-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <img src="/assets/logo.png" alt="AlynCoin Logo" className="w-10 h-10 rounded-full" />
          <div className="leading-tight">
            <h1 className="text-lg font-bold">AlynCoin</h1>
            <p className="text-xs text-gray-400">Quantum-Resistant Currency</p>
          </div>
        </Link>
        <nav className="flex space-x-6 text-sm text-blue-400 font-medium">
          <Link href="/" className="hover:text-blue-300 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-300 transition">About</Link>
          <Link href="/videos" className="hover:text-blue-300 transition">Videos</Link>
          <Link href="/downloads" className="hover:text-blue-300 transition">Downloads</Link>
        </nav>
      </div>
    </header>
  );
}