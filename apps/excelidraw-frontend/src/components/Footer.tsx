import { PenTool } from 'lucide-react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Showcase', 'Pricing', 'Changelog', 'Roadmap'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Templates', 'Tutorials', 'Blog', 'Help center'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Privacy', 'Terms', 'Security'],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-ink-100/50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-900 text-ink-50">
                <PenTool className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <span className="text-xl font-bold tracking-tight text-ink-900">Sketchly</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-600">
              The virtual whiteboard with a hand-drawn feel. Sketch, share, and
              collaborate on ideas in real time.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialLink icon={<FaGithub className="h-4 w-4" />} />
              <SocialLink icon={<FaTwitter className="h-4 w-4" />} />
              <SocialLink icon={<FaLinkedin className="h-4 w-4" />} />
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-ink-900">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-ink-600 transition-colors hover:text-ink-900"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-200 pt-6 sm:flex-row">
          <p className="text-sm text-ink-500">
            © 2026 Sketchly. All rights reserved.
          </p>
          <p className="font-hand text-lg text-ink-400">
            Made with pen &amp; pixels
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-ink-50 text-ink-600 transition-all hover:border-ink-300 hover:bg-ink-100 hover:text-ink-900"
    >
      {icon}
    </a>
  );
}