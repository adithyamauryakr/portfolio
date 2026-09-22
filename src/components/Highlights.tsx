import { Award, Briefcase, GraduationCap, type LucideIcon } from 'lucide-react';
import { highlights } from '../data/profile';

const icons: Record<string, LucideIcon> = { GraduationCap, Briefcase, Award };

export function Highlights() {
  return (
    <section className="border-y border-jet/10 dark:border-alice/10">
      <div className="mx-auto grid max-w-content gap-8 px-6 py-14 sm:grid-cols-3">
        {highlights.map((item) => {
          const Icon = icons[item.icon];
          return (
            <div key={item.title} className="space-y-2">
              <Icon className="text-emerald" size={22} strokeWidth={1.75} />
              <h3 className="font-medium text-jet dark:text-alice">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-jet/60 dark:text-alice/60">
                  {line}
                </p>
              ))}
              {item.note && <p className="text-sm font-medium text-emerald">{item.note}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
