'use client'

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const tabs = [
  {
    id: 'flowchart',
    label: 'Flowcharts',
    title: 'Map any process in minutes',
    desc: 'Drag shapes, connect them with arrows that bind automatically, and label each step. Perfect for user flows, system diagrams, and decision trees.',
  },
  {
    id: 'wireframe',
    label: 'Wireframes',
    title: 'Sketch UI before you code',
    desc: 'Quick, low-fidelity wireframes that communicate intent without getting lost in pixel-perfection. Share with designers and stakeholders in seconds.',
  },
  {
    id: 'mindmap',
    label: 'Mind maps',
    title: 'Brainstorm without limits',
    desc: 'Branch ideas organically on an infinite canvas. Group, color, and connect thoughts to build a visual map of your thinking.',
  },
];

export function Showcase() {
  const [active, setActive] = useState('flowchart');
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <section id="showcase" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <span className="font-hand text-2xl text-ocean-600">showcase</span>
          <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            From blank canvas to brilliant idea
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex gap-1 rounded-xl border border-ink-200 bg-ink-100 p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all sm:px-5 ${
                  active === t.id
                    ? 'bg-ink-900 text-ink-50 shadow-sm'
                    : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-ink-900">{activeTab.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">{activeTab.desc}</p>
            <a
              href="#cta"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700"
            >
              Try it yourself
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-ink-50 p-2 shadow-xl">
            <div className="rounded-xl border border-ink-200 bg-white overflow-hidden">
              <CanvasPreview type={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CanvasPreview({ type }: { type: string }) {
  return (
    <div className="dot-paper relative h-[300px] w-full overflow-hidden">
      <svg viewBox="0 0 400 300" className="h-full w-full" fill="none">
        {type === 'flowchart' && <FlowchartArt />}
        {type === 'wireframe' && <WireframeArt />}
        {type === 'mindmap' && <MindMapArt />}
      </svg>
    </div>
  );
}

function FlowchartArt() {
  return (
    <>
      <ellipse cx="200" cy="30" rx="55" ry="18" stroke="#2e2c25" strokeWidth="2" />
      <text x="200" y="35" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="16" fill="#2e2c25">Start</text>

      <path d="M200 48 L200 80" stroke="#ff7d11" strokeWidth="2" strokeLinecap="round" />
      <path d="M195 75 L200 85 L205 75" stroke="#ff7d11" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="140" y="85" width="120" height="40" rx="4" stroke="#2e2c25" strokeWidth="2" />
      <text x="200" y="110" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="16" fill="#2e2c25">Validate input</text>

      <path d="M200 125 L200 155" stroke="#ff7d11" strokeWidth="2" strokeLinecap="round" />
      <path d="M195 150 L200 160 L205 150" stroke="#ff7d11" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      <path d="M200 160 L130 195 L200 230 L270 195 Z" stroke="#2e2c25" strokeWidth="2" />
      <text x="200" y="200" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill="#2e2c25">Valid?</text>

      <path d="M130 195 L80 195 L80 260" stroke="#ff7d11" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M75 255 L80 265 L85 255" stroke="#ff7d11" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="45" y="262" width="70" height="30" rx="4" stroke="#dc2626" strokeWidth="2" />
      <text x="80" y="282" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill="#dc2626">Error</text>

      <path d="M270 195 L330 195 L330 260" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M325 255 L330 265 L335 255" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="295" y="262" width="70" height="30" rx="4" stroke="#22c55e" strokeWidth="2" />
      <text x="330" y="282" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill="#16a34a">Done!</text>
    </>
  );
}

function WireframeArt() {
  return (
    <>
      {/* Browser frame */}
      <rect x="20" y="15" width="360" height="270" rx="6" stroke="#2e2c25" strokeWidth="2" />
      <line x1="20" y1="40" x2="380" y2="40" stroke="#2e2c25" strokeWidth="1.5" />
      <circle cx="32" cy="27" r="3" stroke="#2e2c25" strokeWidth="1.5" />
      <circle cx="42" cy="27" r="3" stroke="#2e2c25" strokeWidth="1.5" />
      <circle cx="52" cy="27" r="3" stroke="#2e2c25" strokeWidth="1.5" />

      {/* Nav */}
      <rect x="40" y="55" width="60" height="12" rx="2" stroke="#a29c87" strokeWidth="1.5" />
      <rect x="300" y="55" width="60" height="12" rx="2" stroke="#a29c87" strokeWidth="1.5" />

      {/* Hero */}
      <rect x="40" y="85" width="180" height="14" rx="2" stroke="#2e2c25" strokeWidth="1.5" />
      <rect x="40" y="108" width="140" height="10" rx="2" stroke="#a29c87" strokeWidth="1.5" />
      <rect x="40" y="125" width="140" height="10" rx="2" stroke="#a29c87" strokeWidth="1.5" />
      <rect x="40" y="148" width="80" height="24" rx="4" stroke="#ff7d11" strokeWidth="2" />

      {/* Hero image */}
      <rect x="240" y="85" width="120" height="90" rx="4" stroke="#0ea5e9" strokeWidth="2" />
      <path d="M260 155 L290 120 L310 140 L340 105 L340 165 L260 165 Z" stroke="#0ea5e9" strokeWidth="1.5" fill="none" />
      <circle cx="270" cy="105" r="6" stroke="#0ea5e9" strokeWidth="1.5" />

      {/* Cards */}
      <rect x="40" y="195" width="95" height="70" rx="4" stroke="#2e2c25" strokeWidth="1.5" />
      <rect x="150" y="195" width="95" height="70" rx="4" stroke="#2e2c25" strokeWidth="1.5" />
      <rect x="260" y="195" width="95" height="70" rx="4" stroke="#2e2c25" strokeWidth="1.5" />
      <rect x="50" y="205" width="75" height="8" rx="2" stroke="#a29c87" strokeWidth="1.5" />
      <rect x="160" y="205" width="75" height="8" rx="2" stroke="#a29c87" strokeWidth="1.5" />
      <rect x="270" y="205" width="75" height="8" rx="2" stroke="#a29c87" strokeWidth="1.5" />
      <rect x="50" y="222" width="75" height="6" rx="2" stroke="#c7c2b3" strokeWidth="1" />
      <rect x="160" y="222" width="75" height="6" rx="2" stroke="#c7c2b3" strokeWidth="1" />
      <rect x="270" y="222" width="75" height="6" rx="2" stroke="#c7c2b3" strokeWidth="1" />
    </>
  );
}

function MindMapArt() {
  return (
    <>
      {/* Center node */}
      <ellipse cx="200" cy="150" rx="50" ry="25" stroke="#ff7d11" strokeWidth="2.5" />
      <text x="200" y="156" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="18" fill="#ff7d11">Launch</text>

      {/* Branches */}
      {[
        { x: 80, y: 60, label: 'Design', color: '#0ea5e9' },
        { x: 320, y: 60, label: 'Dev', color: '#22c55e' },
        { x: 60, y: 230, label: 'Marketing', color: '#a855f7' },
        { x: 330, y: 240, label: 'QA', color: '#dc2626' },
      ].map((b) => (
        <g key={b.label}>
          <path
            d={`M ${b.x > 200 ? 245 : 155} ${b.y > 150 ? 165 : 140} Q ${(b.x + 200) / 2} ${(b.y + 150) / 2} ${b.x} ${b.y}`}
            stroke={b.color}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx={b.x} cy={b.y} rx="38" ry="18" stroke={b.color} strokeWidth="2" />
          <text x={b.x} y={b.y + 5} textAnchor="middle" fontFamily="Caveat, cursive" fontSize="14" fill={b.color}>
            {b.label}
          </text>
        </g>
      ))}

      {/* Sub-branches */}
      <path d="M50 60 L20 40" stroke="#0ea5e9" strokeWidth="1.5" fill="none" />
      <path d="M50 60 L20 75" stroke="#0ea5e9" strokeWidth="1.5" fill="none" />
      <path d="M350 60 L380 40" stroke="#22c55e" strokeWidth="1.5" fill="none" />
      <path d="M350 60 L380 80" stroke="#22c55e" strokeWidth="1.5" fill="none" />
      <path d="M30 230 L10 255" stroke="#a855f7" strokeWidth="1.5" fill="none" />
      <path d="M360 240 L380 265" stroke="#dc2626" strokeWidth="1.5" fill="none" />
    </>
  );
}