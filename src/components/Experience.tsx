import { experience } from '../data/profile';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="research" className="mx-auto max-w-content px-6 py-20">
      <SectionHeading index="01" title="Research Experience" />
      <div className="space-y-10">
        {experience.map((item) => (
          <div key={item.org} className="border-l border-powder pl-6 dark:border-alice/15">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="font-medium text-jet dark:text-alice">{item.org}</h3>
              <span className="font-mono text-xs text-jet/50 dark:text-alice/50">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-emerald">
              {item.place} · {item.supervisor}
            </p>
            <ul className="mt-3 space-y-1.5">
              {item.points.map((point) => (
                <li key={point} className="text-sm leading-relaxed text-jet/65 dark:text-alice/65">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
