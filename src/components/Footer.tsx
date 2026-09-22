import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-jet/10 py-8 dark:border-alice/10">
      <div className="mx-auto max-w-content px-6 text-center font-mono text-xs text-jet/40 dark:text-alice/40">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}
