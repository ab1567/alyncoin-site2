'use client';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Sidebar from './Sidebar';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="sticky top-10 z-40 bg-white/70 dark:bg-black/70 backdrop-blur-lg border-b border-cyan-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="sm:hidden p-2 rounded-md bg-cyan-600 text-white self-start"
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="AlynCoin Logo"
            className="w-12 h-12 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
            AlynCoin
          </h1>
        </div>

        {/* Nav Buttons */}
        <nav className="hidden sm:flex flex-wrap gap-3 text-sm sm:text-base font-semibold">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Downloads', href: '/downloads' },
            { label: 'Videos', href: '/videos' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 rounded-full bg-cyan-600/10 text-cyan-700 dark:bg-cyan-800/20 dark:text-cyan-300 hover:bg-cyan-600 hover:text-white transition-all duration-200 shadow-md backdrop-blur-sm"
            >
              {label}
            </a>
          ))}
        </nav>

        <ThemeToggle />

      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
}
