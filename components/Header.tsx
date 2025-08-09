"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Site header component.
 *
 * A sticky header that displays a small promotional banner above a dark
 * navigation bar. The navigation collapses into a hamburger menu on
 * smaller screens. Active links are highlighted with a coloured
 * accent.
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/tokenomics', label: 'Tokenomics' },
    { href: '/governance', label: 'Governance' },
    { href: '/mining', label: 'Mining' },
    { href: '/progress', label: 'Progress' },
    { href: '/downloads', label: 'Downloads' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Promotional banner */}
      <div className="bg-teal-700 text-white text-sm py-1 text-center">
        🚀 Don’t miss this chance to mine early!
      </div>
      {/* Main nav */}
      <header className="bg-black bg-opacity-80 backdrop-blur-md">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="AlynCoin logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold text-white">AlynCoin</span>
          </Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-full transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile nav panel */}
        {open && (
          <nav className="md:hidden bg-black bg-opacity-90 backdrop-blur-md px-4 pt-2 pb-4 space-y-2">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </div>
  );
}