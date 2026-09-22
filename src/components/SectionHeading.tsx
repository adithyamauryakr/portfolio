interface SectionHeadingProps {
  index: string;
  title: string;
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-sm text-emerald">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-jet dark:text-alice">{title}</h2>
      <span className="h-px flex-1 bg-jet/10 dark:bg-alice/10" aria-hidden="true" />
    </div>
  );
}
