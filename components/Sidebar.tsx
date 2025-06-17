'use client';
import ThemeToggle from './ThemeToggle';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      {/* Panel */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white dark:bg-black shadow-lg z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 space-y-4 h-full flex flex-col">
          <button onClick={onClose} className="self-end mb-4 text-2xl">×</button>
          <nav className="flex flex-col gap-3 text-lg font-semibold flex-grow">
            <a href="/" onClick={onClose} className="hover:text-cyan-500">Home</a>
            <a href="/about" onClick={onClose} className="hover:text-cyan-500">About</a>
            <a href="/downloads" onClick={onClose} className="hover:text-cyan-500">Downloads</a>
            <a href="/videos" onClick={onClose} className="hover:text-cyan-500">Videos</a>
          </nav>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
