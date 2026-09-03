'use client'

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Do I need to create an account to use Sketchly?',
    a: 'Nope! You can start drawing instantly without signing up. An account is only needed if you want to save boards to your profile or use Pro features.',
  },
  {
    q: 'Is Sketchly really free?',
    a: 'Yes. The Free plan includes unlimited boards, real-time collaboration with up to 3 people, and PNG/SVG export — no time limit, no credit card.',
  },
  {
    q: 'Can I use Sketchly offline?',
    a: 'Sketchly works in the browser and caches your current board locally. Full offline mode with background sync is on our roadmap for Q4.',
  },
  {
    q: 'How does real-time collaboration work?',
    a: 'Every board has a shareable link. When someone opens it, their cursor appears on your canvas instantly. Changes sync in milliseconds via our CRDT-based engine.',
  },
  {
    q: 'Can I export my drawings?',
    a: 'Free plans can export to PNG and SVG. Pro adds PDF export, high-resolution PNG, and clipboard copy for pasting into docs and wikis.',
  },
  {
    q: 'Is my data private?',
    a: 'All boards are private by default. Only people with the link can view or edit. Team plans add SSO, audit logs, and enterprise-grade security.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <span className="font-hand text-2xl text-ocean-600">faq</span>
          <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Questions? We've got answers
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-ink-200 bg-ink-50 transition-colors hover:border-ink-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-base font-semibold text-ink-900">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-ink-500 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm leading-relaxed text-ink-600">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}