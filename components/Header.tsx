"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Top navigation bar component.
 *
 * Renders a responsive header with the AlynCoin logo and primary navigation links.
 * On mobile screens a hamburger menu toggles the link list.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Tokenomics', href: '/tokenomics' },
    { label: 'Governance', href: '/governance' },
    { label: 'Mining', href: '/mining' },
    { label: 'Progress', href: '/progress' },
    { label: 'Downloads', href: '/downloads' },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-2 hover:text-primary dark:hover:text-primary">
          <Image src="/assets/logo.png" alt="AlynCoin logo" width={32} height={32} />
          <span className="text-2xl font-semibold tracking-tight">AlynCoin</span>
        </Link>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary dark:hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Mobile hamburger toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <nav className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
