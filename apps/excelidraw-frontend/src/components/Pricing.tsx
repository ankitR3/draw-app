import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'For individuals and quick sketches',
    features: [
      'Unlimited boards',
      'Real-time collaboration (up to 3)',
      'Export as PNG & SVG',
      'Link sharing',
      '100 MB storage',
    ],
    cta: 'Start drawing',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$9',
    period: 'per month',
    desc: 'For power users and small teams',
    features: [
      'Everything in Free',
      'Unlimited collaborators',
      'Export as PDF & high-res PNG',
      'Version history',
      'Custom fonts & themes',
      '10 GB storage',
      'Priority support',
    ],
    cta: 'Start 14-day trial',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$5',
    period: 'per seat / mo',
    desc: 'For organizations that draw together',
    features: [
      'Everything in Pro',
      'Shared team workspace',
      'SSO & SCIM provisioning',
      'Audit logs',
      'Unlimited storage',
      'Dedicated support',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-hand text-2xl text-accent-600">pricing</span>
          <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Simple pricing that scales with you
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Start free, upgrade when you need more. No hidden fees.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-7 transition-all duration-300 hover:shadow-lg ${
                p.highlighted
                  ? 'border-ink-900 bg-ink-900 text-ink-50 shadow-xl lg:-translate-y-3'
                  : 'border-ink-200 bg-ink-50 text-ink-900 hover:-translate-y-1'
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-3.5 py-1 text-xs font-bold text-white shadow-md">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.highlighted ? 'text-ink-300' : 'text-ink-500'}`}>
                {p.desc}
              </p>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className={`text-sm ${p.highlighted ? 'text-ink-400' : 'text-ink-500'}`}>
                  / {p.period}
                </span>
              </div>

              <a
                href="#cta"
                className={`mt-6 block rounded-xl px-5 py-3 text-center text-sm font-semibold transition-all active:scale-95 ${
                  p.highlighted
                    ? 'bg-ink-50 text-ink-900 hover:bg-ink-100'
                    : 'bg-ink-900 text-ink-50 hover:bg-ink-800'
                }`}
              >
                {p.cta}
              </a>

              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        p.highlighted ? 'text-mint-400' : 'text-mint-600'
                      }`}
                      strokeWidth={2.5}
                    />
                    <span className={p.highlighted ? 'text-ink-200' : 'text-ink-700'}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}