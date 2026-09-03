'use client'

import { useEffect, useRef, useState } from 'react';
import { Menu, X, PenTool } from 'lucide-react';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 24);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-50/90 backdrop-blur-md border-b border-ink-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-900 text-ink-50 transition-transform group-hover:rotate-6 group-hover:scale-105">
            <PenTool className="h-5 w-5" strokeWidth={2.2} />
          </div>
          <span className="text-xl font-bold tracking-tight text-ink-900">
            Sketchly
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:text-ink-900 hover:bg-ink-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="text-sm font-semibold text-ink-700 transition-colors hover:text-ink-900"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-ink-50 shadow-sm transition-all hover:bg-ink-800 hover:shadow-md active:scale-95"
          >
            Try for free
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 pb-5 pt-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3.5 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-100"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <a
              href="#"
              className="rounded-lg border border-ink-200 px-4 py-2.5 text-center text-sm font-semibold text-ink-700"
            >
              Sign in
            </a>
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-ink-900 px-4 py-2.5 text-center text-sm font-semibold text-ink-50"
            >
              Try for free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}