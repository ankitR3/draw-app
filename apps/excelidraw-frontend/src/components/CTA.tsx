import { ArrowRight, PenTool } from 'lucide-react';

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-ink-900" aria-hidden />
      <div className="absolute inset-0 dot-paper opacity-20" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,125,17,0.12) 0%, rgba(0,0,0,0) 70%)',
        }}
        aria-hidden
      />

      {/* Decorative sketch elements */}
      <svg className="absolute left-8 top-12 hidden lg:block animate-float" width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden>
        <rect x="10" y="10" width="40" height="30" rx="4" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <path d="M50 25 L70 25" stroke="rgba(255,125,17,0.4)" strokeWidth="2" />
        <path d="M66 21 L70 25 L66 29" stroke="rgba(255,125,17,0.4)" strokeWidth="2" fill="none" />
      </svg>
      <svg className="absolute right-10 bottom-16 hidden lg:block animate-float" width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ animationDelay: '1.5s' }} aria-hidden>
        <circle cx="40" cy="40" r="25" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
        <circle cx="40" cy="40" r="12" stroke="rgba(14,165,233,0.3)" strokeWidth="2" />
      </svg>

      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-800 px-3.5 py-1.5 text-xs font-medium text-ink-300">
          <PenTool className="h-3.5 w-3.5" />
          No credit card required
        </div>

        <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink-50 sm:text-5xl">
          Ready to sketch your
          <span className="font-hand text-5xl text-accent-400 sm:text-6xl"> next big idea?</span>
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-lg text-ink-300">
          Join 120,000+ creators using Sketchly to visualize thinking. Open a
          blank canvas in seconds — it's free.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-xl bg-ink-50 px-7 py-4 text-base font-bold text-ink-900 shadow-xl transition-all hover:bg-white hover:shadow-2xl active:scale-95"
          >
            Open the canvas
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl border border-ink-700 px-7 py-4 text-base font-semibold text-ink-200 transition-all hover:border-ink-600 hover:bg-ink-800 active:scale-95"
          >
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}