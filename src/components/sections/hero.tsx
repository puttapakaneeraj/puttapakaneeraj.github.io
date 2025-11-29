
'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PROFILE_DATA, SOCIAL_LINKS } from '@/lib/data';
import { FadeIn } from '@/components/ui/fade-in';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-20 sm:py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12">
          <div className="text-center">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {PROFILE_DATA.name}
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="mt-4 text-xl font-medium text-accent">{PROFILE_DATA.title}</p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                {PROFILE_DATA.summary}
              </p>
            </FadeIn>
            <FadeIn delay={0.8}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild >
                  <Link href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={1.0}>
              <div className="mt-8 flex justify-center gap-6">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    <link.icon className="h-6 w-6" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
