import { ArrowRight, Play, MousePointer2, Square, Circle, Minus, Type } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background grid */}
      <div className="absolute inset-0 grid-paper opacity-60" aria-hidden />
      {/* Radial fade mask */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(248,247,244,0.9) 0%, rgba(248,247,244,0) 70%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-3.5 py-1.5 text-xs font-medium text-ink-600 opacity-start-0 animate-fade-in animate-delay-100">
              <span className="flex h-2 w-2 rounded-full bg-mint-500 animate-pulse-slow" />
              Open source · No signup needed
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl opacity-start-0 animate-fade-in-up animate-delay-200">
              Draw together,
              <br />
              <span className="font-hand text-5xl text-accent-600 sm:text-6xl lg:text-7xl">
                think together
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-600 lg:mx-0 opacity-start-0 animate-fade-in-up animate-delay-300">
              Sketchly is a virtual whiteboard with a hand-drawn feel. Sketch
              diagrams, flowcharts, and wireframes, then invite your team to
              collaborate in real time — right in the browser.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start opacity-start-0 animate-fade-in-up animate-delay-500">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-xl bg-ink-900 px-6 py-3.5 text-base font-semibold text-ink-50 shadow-lg shadow-ink-900/10 transition-all hover:bg-ink-800 hover:shadow-xl hover:shadow-ink-900/15 active:scale-95"
              >
                Start drawing — it's free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#showcase"
                className="group inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-ink-50 px-6 py-3.5 text-base font-semibold text-ink-700 transition-all hover:border-ink-300 hover:bg-ink-100 active:scale-95"
              >
                <Play className="h-4 w-4 fill-ink-700" />
                Watch demo
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-500 lg:justify-start opacity-start-0 animate-fade-in animate-delay-700">
              <span className="font-medium">Trusted by 120k+ creators</span>
              <div className="flex items-center gap-2">
                <span className="text-amber-500">{'★★★★★'}</span>
                <span className="font-medium text-ink-600">4.9/5</span>
              </div>
              <span className="font-medium">No credit card</span>
            </div>
          </div>

          {/* Right: Canvas mockup */}
          <div className="relative opacity-start-0 animate-fade-in-up animate-delay-500">
            <CanvasMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function CanvasMockup() {
  return (
    <div className="relative">
      {/* Floating shapes */}
      <div className="absolute -left-4 top-8 hidden animate-float lg:block">
        <div className="rounded-lg bg-ocean-100 p-2 shadow-md">
          <Circle className="h-6 w-6 text-ocean-600" />
        </div>
      </div>
      <div className="absolute -right-2 top-20 hidden animate-float lg:block" style={{ animationDelay: '1s' }}>
        <div className="rounded-lg bg-accent-100 p-2 shadow-md">
          <Square className="h-6 w-6 text-accent-600" />
        </div>
      </div>
      <div className="absolute -right-3 bottom-16 hidden animate-float lg:block" style={{ animationDelay: '2s' }}>
        <div className="rounded-lg bg-mint-100 p-2 shadow-md">
          <Type className="h-6 w-6 text-mint-600" />
        </div>
      </div>

      {/* Canvas window */}
      <div className="rounded-2xl border border-ink-200 bg-ink-50 shadow-2xl shadow-ink-900/10">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-ink-200 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-medium text-ink-400">
            untitled-sketch.sketchly
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="flex -space-x-1.5">
              <span className="h-6 w-6 rounded-full border-2 border-ink-50 bg-ocean-400" />
              <span className="h-6 w-6 rounded-full border-2 border-ink-50 bg-accent-400" />
              <span className="h-6 w-6 rounded-full border-2 border-ink-50 bg-mint-400" />
            </div>
            <span className="ml-1 text-xs font-medium text-mint-600">● Live</span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-1 border-b border-ink-200 px-3 py-2">
          <ToolButton icon={<MousePointer2 className="h-4 w-4" />} active />
          <ToolButton icon={<Square className="h-4 w-4" />} />
          <ToolButton icon={<Circle className="h-4 w-4" />} />
          <ToolButton icon={<Minus className="h-4 w-4" />} />
          <ToolButton icon={<Type className="h-4 w-4" />} />
          <div className="mx-1 h-5 w-px bg-ink-200" />
          <div className="flex items-center gap-1.5 px-2">
            <span className="h-4 w-4 rounded-full bg-ink-900 ring-2 ring-ink-200" />
            <span className="h-4 w-4 rounded-full bg-accent-500" />
            <span className="h-4 w-4 rounded-full bg-ocean-500" />
            <span className="h-4 w-4 rounded-full bg-mint-500" />
          </div>
        </div>

        {/* Canvas area */}
        <div className="relative dot-paper h-[320px] overflow-hidden rounded-b-2xl">
          <svg viewBox="0 0 400 320" className="h-full w-full" fill="none">
            {/* Box 1 */}
            <rect x="30" y="40" width="90" height="50" rx="4" stroke="#2e2c25" strokeWidth="2" className="draw-path animate-draw-line" />
            <text x="75" y="70" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="18" fill="#2e2c25">Idea</text>

            {/* Arrow */}
            <path d="M120 65 L190 65" stroke="#ff7d11" strokeWidth="2.5" strokeLinecap="round" className="draw-path animate-draw-line animate-delay-500" />
            <path d="M185 60 L195 65 L185 70" stroke="#ff7d11" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="draw-path animate-draw-line animate-delay-700" />

            {/* Box 2 */}
            <rect x="195" y="40" width="90" height="50" rx="4" stroke="#2e2c25" strokeWidth="2" className="draw-path animate-draw-line animate-delay-300" />
            <text x="240" y="70" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="18" fill="#2e2c25">Design</text>

            {/* Arrow down */}
            <path d="M240 90 L240 150" stroke="#ff7d11" strokeWidth="2.5" strokeLinecap="round" className="draw-path animate-draw-line animate-delay-1000" />
            <path d="M235 145 L240 155 L245 145" stroke="#ff7d11" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="draw-path animate-draw-line animate-delay-1500" />

            {/* Box 3 */}
            <rect x="195" y="155" width="90" height="50" rx="4" stroke="#2e2c25" strokeWidth="2" className="draw-path animate-draw-line animate-delay-1000" />
            <text x="240" y="185" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="18" fill="#2e2c25">Ship!</text>

            {/* Circle */}
            <circle cx="75" cy="210" r="28" stroke="#0ea5e9" strokeWidth="2.5" className="draw-path animate-draw-line animate-delay-1500" />
            <text x="75" y="215" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="16" fill="#0284c7">Notes</text>

            {/* Scribble */}
            <path d="M130 200 Q150 190 170 205 T210 200" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" fill="none" className="draw-path animate-draw-line animate-delay-2000" />
          </svg>

          {/* Collaborator cursor */}
          <div className="absolute left-[280px] top-[100px] animate-float" style={{ animationDuration: '3s' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 2 L4 16 L8 12 L11 18 L13 17 L10 11 L16 11 Z" fill="#ff7d11" stroke="#fff" strokeWidth="1" />
            </svg>
            <span className="ml-1 rounded bg-accent-500 px-1.5 py-0.5 text-[10px] font-medium text-white">
              Alex
            </span>
          </div>
        </div>
      </div>

      {/* Shadow tilt */}
      <div
        className="absolute -bottom-4 left-4 right-4 h-8 rounded-2xl bg-ink-900/5 blur-xl"
        aria-hidden
      />
    </div>
  );
}

function ToolButton({ icon, active }: { icon: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
        active ? 'bg-ink-200 text-ink-900' : 'text-ink-500 hover:bg-ink-100'
      }`}
    >
      {icon}
    </button>
  );
}
