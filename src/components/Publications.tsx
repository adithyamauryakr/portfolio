import { ExternalLink } from 'lucide-react';
import { publications } from '../data/profile';
import { SectionHeading } from './SectionHeading';

export function Publications() {
  return (
    <section id="publications" className="bg-jet/[0.02] dark:bg-alice/[0.02]">
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionHeading index="02" title="Publications" />
        <div className="space-y-4">
          {publications.map((pub) => (
            <a
              key={pub.url}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-jet/10 p-5 transition-colors hover:border-emerald dark:border-alice/10"
            >
              <p className="leading-relaxed text-jet/80 dark:text-alice/80">{pub.citation}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm text-emerald">
                {pub.venue}
                <ExternalLink
                  size={13}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
