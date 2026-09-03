import {
  Users,
  MousePointerClick,
  Download,
  Share2,
  Layers,
  Shapes,
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Real-time collaboration',
    desc: 'Invite teammates with a link and watch their cursors dance across the canvas. Everyone draws together, live.',
    color: 'ocean',
    badge: 'Live cursors',
  },
  {
    icon: Shapes,
    title: 'Hand-drawn aesthetic',
    desc: "Rough, sketchy lines that feel like pen on paper. Perfect for wireframes and diagrams that don't need to be perfect.",
    color: 'accent',
    badge: 'Rough.js',
  },
  {
    icon: Layers,
    title: 'Infinite canvas',
    desc: 'Pan and zoom across an endless board. No page breaks, no resizing — just draw wherever the idea takes you.',
    color: 'mint',
    badge: 'Unlimited',
  },
  {
    icon: MousePointerClick,
    title: 'Smart shapes & snapping',
    desc: 'Draw a rough rectangle and Sketchly cleans it up. Snap to grid, align objects, and arrow-bind to shapes automatically.',
    color: 'ocean',
    badge: 'Auto-bind',
  },
  {
    icon: Download,
    title: 'Export anywhere',
    desc: 'Download as PNG, SVG, or PDF. Copy to clipboard. Embed in Notion, Confluence, or anywhere that supports images.',
    color: 'accent',
    badge: 'PNG · SVG · PDF',
  },
  {
    icon: Share2,
    title: 'Share in one click',
    desc: 'Every board has a public link. Share read-only or grant edit access. No accounts required to view or draw.',
    color: 'mint',
    badge: 'Link sharing',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  ocean: {
    bg: 'bg-ocean-50',
    text: 'text-ocean-600',
    border: 'group-hover:border-ocean-300',
    badge: 'bg-ocean-100 text-ocean-700',
  },
  accent: {
    bg: 'bg-accent-50',
    text: 'text-accent-600',
    border: 'group-hover:border-accent-300',
    badge: 'bg-accent-100 text-accent-700',
  },
  mint: {
    bg: 'bg-mint-50',
    text: 'text-mint-600',
    border: 'group-hover:border-mint-300',
    badge: 'bg-mint-100 text-mint-700',
  },
};

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-hand text-2xl text-accent-600">features</span>
          <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Everything you need to sketch ideas
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            A complete whiteboard toolkit, built for the way teams think —
            fast, messy, and collaborative.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const c = colorMap[f.color];
            return (
              <div
                key={f.title}
                className={`group rounded-2xl border border-ink-200 bg-ink-50 p-6 transition-all duration-300 hover:shadow-lg ${c.border} hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.bg} ${c.text} transition-transform group-hover:scale-110`}>
                    <f.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${c.badge}`}>
                    {f.badge}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}