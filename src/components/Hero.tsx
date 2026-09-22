import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import cvPdf from '../assets/CV_AdithyaMauryaKR.pdf';
import portraitImg from '../assets/portrait.jpeg';
import { profile } from '../data/profile';

export function Hero() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 pb-16 pt-32">
      <div className="grid items-center gap-12 md:grid-cols-[1fr,auto]">
        <div className="space-y-6">
          <p className="font-mono text-sm text-emerald">{profile.tagline}</p>
          <h1 className="text-4xl font-bold tracking-tight text-jet dark:text-alice sm:text-5xl">
            Hi, I&apos;m Adithya
          </h1>
          <p className="text-lg text-jet/70 dark:text-alice/70">{profile.role}</p>
          <p className="max-w-xl leading-relaxed text-jet/60 dark:text-alice/60">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-md bg-emerald px-5 py-2.5 text-sm font-medium text-jet transition-colors hover:bg-emerald/85"
            >
              <Mail size={16} />
              Contact Me
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
            <a
              href={cvPdf}
              download
              className="flex items-center gap-2 rounded-md border border-jet/15 px-5 py-2.5 text-sm text-jet transition-colors hover:border-emerald hover:text-emerald dark:border-alice/15 dark:text-alice"
            >
              <FileText size={16} />
              Download CV
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
          <div
            className="absolute inset-0 rounded-full bg-emerald/20 blur-2xl"
            aria-hidden="true"
          />
          <img
            src={portraitImg}
            alt="Portrait of Adithya Maurya"
            className="relative h-full w-full rounded-full border border-powder/60 object-cover dark:border-alice/10"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
