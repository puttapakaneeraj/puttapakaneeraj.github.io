import Link from 'next/link';
import { Code } from 'lucide-react';
import { SOCIAL_LINKS, PROFILE_DATA } from '@/lib/data';

export function Footer() {
  return (
    <footer className="w-full border-t bg-card text-card-foreground">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5 text-accent" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
