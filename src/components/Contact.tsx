import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-20">
      <SectionHeading index="05" title="Get In Touch" />
      <p className="max-w-xl leading-relaxed text-jet/65 dark:text-alice/65">
        I&apos;m always open to discussing research collaborations, opportunities, or interesting
        projects in computational chemistry and machine learning.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 rounded-md bg-emerald px-5 py-2.5 text-sm font-medium text-jet transition-colors hover:bg-emerald/85"
        >
          <Mail size={16} />
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md border border-jet/15 px-5 py-2.5 text-sm text-jet transition-colors hover:border-emerald hover:text-emerald dark:border-alice/15 dark:text-alice"
        >
          <Github size={16} />
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md border border-jet/15 px-5 py-2.5 text-sm text-jet transition-colors hover:border-emerald hover:text-emerald dark:border-alice/15 dark:text-alice"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      </div>
      <p className="mt-8 text-sm text-jet/50 dark:text-alice/50">{profile.location}</p>
    </section>
  );
}
