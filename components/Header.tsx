// components/Header.tsx
export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center gap-4">
        <img src="/assets/logo.png" alt="AlynCoin Logo" className="w-12 h-12" />
        <h1 className="text-white text-2xl font-bold tracking-tight">AlynCoin</h1>
      </div>
      <nav className="flex gap-6 text-sm font-medium">
        <a href="/" className="text-teal-400 hover:text-teal-300">Home</a>
        <a href="/about" className="text-teal-400 hover:text-teal-300">About</a>
        <a href="/downloads" className="text-teal-400 hover:text-teal-300">Downloads</a>
        <a href="/videos" className="text-teal-400 hover:text-teal-300">Videos</a>
      </nav>
    </header>
  );
}
