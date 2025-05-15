export default function Header() {
  return (
    <header className="backdrop-blur bg-black/80 border-b border-cyan-700/40 shadow-sm sticky top-10 z-40 px-6 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <img
            src="/assets/logo.png"
            alt="AlynCoin Logo"
            className="w-12 h-12 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
          <h1 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight">AlynCoin</h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-6 text-sm sm:text-base font-medium tracking-wide" aria-label="Main navigation">
          <a href="/" className="text-cyan-400 hover:text-white transition duration-150">Home</a>
          <a href="/about" className="text-cyan-400 hover:text-white transition duration-150">About</a>
          <a href="/downloads" className="text-cyan-400 hover:text-white transition duration-150">Downloads</a>
          <a href="/videos" className="text-cyan-400 hover:text-white transition duration-150">Videos</a>
        </nav>

      </div>
    </header>
  );
}
