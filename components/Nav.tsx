import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-gray-950 border-b border-gray-800 text-sm text-blue-400 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-center gap-6">
        <Link href="/" className="hover:text-blue-300 transition">Home</Link>
        <Link href="/about" className="hover:text-blue-300 transition">About</Link>
        <Link href="/videos" className="hover:text-blue-300 transition">Videos</Link>
        <Link href="/downloads" className="hover:text-blue-300 transition">Downloads</Link>
      </div>
    </nav>
  );
}
