export default function Header() {
  return (
    <header className="bg-black border-b border-gray-800 px-6 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <img src="/assets/logo.png" alt="AlynCoin Logo" className="w-12 h-12" />
          <h1 className="text-white text-2xl font-bold tracking-tight">AlynCoin</h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-4 text-sm font-medium">
          <a href="/" className="text-teal-400 hover:text-teal-300">Home</a>
          <a href="/about" className="text-teal-400 hover:text-teal-300">About</a>
          <a href="/downloads" className="text-teal-400 hover:text-teal-300">Downloads</a>
          <a href="/videos" className="text-teal-400 hover:text-teal-300">Videos</a>
        </nav>
      </div>
    </header>
  );
}
