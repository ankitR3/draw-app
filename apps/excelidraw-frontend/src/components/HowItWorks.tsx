const steps = [
  {
    number: '01',
    title: 'Open the canvas',
    desc: "Click \"Start drawing\" and you're in. No signup, no download, no setup — just a blank canvas ready for your ideas.",
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="h-full w-full">
        <rect x="8" y="12" width="44" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <line x1="8" y1="22" x2="52" y2="22" stroke="currentColor" strokeWidth="2" />
        <circle cx="15" cy="17" r="2" fill="currentColor" />
        <circle cx="22" cy="17" r="2" fill="currentColor" />
        <path d="M18 38 Q25 30 32 38 T46 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Draw your idea',
    desc: 'Pick a tool, drag to draw, and type to add text. Snap shapes together, bind arrows, and let Sketchly clean up your strokes.',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="h-full w-full">
        <path d="M12 48 L12 20 L30 8 L48 20 L48 48 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <rect x="22" y="30" width="16" height="18" stroke="currentColor" strokeWidth="2" />
        <path d="M40 14 L46 20" stroke="#ff7d11" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="48" cy="14" r="3" stroke="#ff7d11" strokeWidth="2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Share & collaborate',
    desc: 'Send the link to your team. They join instantly, cursors appear, and you brainstorm together in real time.',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="h-full w-full">
        <circle cx="20" cy="22" r="8" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="40" cy="22" r="8" stroke="#ff7d11" strokeWidth="2.5" />
        <path d="M8 48 Q8 38 20 38 Q28 38 30 44" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M32 48 Q32 38 40 38 Q52 38 52 48" stroke="#ff7d11" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-ink-200 bg-ink-100/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-hand text-2xl text-mint-600">how it works</span>
          <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            From idea to shared board in 3 steps
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.number} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="absolute top-12 left-[60%] hidden h-px w-[80%] bg-gradient-to-r from-ink-300 to-transparent md:block"
                  aria-hidden
                />
              )}

              <div className="relative mx-auto flex h-24 w-24 items-center justify-center text-ink-700">
                {s.icon}
                <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-ink-900 text-xs font-bold text-ink-50">
                  {s.number}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}