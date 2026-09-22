import { ExternalLink, FileText } from 'lucide-react';
import cvPdf from '../assets/CV_AdithyaMauryaKR.pdf';
import { SectionHeading } from './SectionHeading';

export function Cv() {
  return (
    <section id="cv" className="bg-jet/[0.02] dark:bg-alice/[0.02]">
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionHeading index="04" title="Curriculum Vitae" />
        <div className="rounded-xl border border-jet/10 p-8 dark:border-alice/10">
          <p className="leading-relaxed text-jet/65 dark:text-alice/65">
            Dive into detailed summaries of my research appointments, publications, coursework, and
            leadership initiatives. The CV is regularly updated to reflect ongoing projects and
            honors.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={cvPdf}
              download="Adithya_Maurya_KR_CV.pdf"
              className="flex items-center justify-center gap-2 rounded-md bg-emerald px-5 py-2.5 text-sm font-medium text-jet transition-colors hover:bg-emerald/85"
            >
              <FileText size={16} />
              Download PDF
            </a>
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md border border-jet/15 px-5 py-2.5 text-sm text-jet transition-colors hover:border-emerald hover:text-emerald dark:border-alice/15 dark:text-alice"
            >
              <ExternalLink size={16} />
              View in Browser
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
