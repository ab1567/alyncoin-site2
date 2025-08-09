export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center bg-transparent absolute top-0 left-0 right-0 z-50">
      {/* Logo + Title */}
      <a href="/" className="text-2xl font-bold text-white">
        AlynCoin
      </a>
      {/* Navigation links */}
      <nav className="flex gap-4 text-white">
        {[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Tokenomics', href: '/tokenomics' },
          { label: 'Governance', href: '/governance' },
          { label: 'Mining', href: '/mining' },
          { label: 'Downloads', href: '/downloads' },
        ].map(({ label, href }) => (
          <a key={href} href={href} className="hover:underline">
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}