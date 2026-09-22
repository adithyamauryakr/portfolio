import { skillGroups } from '../data/profile';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <SectionHeading index="03" title="Skills & Expertise" />
      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-medium text-jet/70 dark:text-alice/70">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-powder/60 px-3.5 py-1.5 text-sm text-jet/75 dark:border-alice/15 dark:text-alice/75"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
