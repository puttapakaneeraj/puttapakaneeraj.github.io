
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PROFILE_DATA, SOCIAL_LINKS } from '@/lib/data';
import { FadeIn } from '@/components/ui/fade-in';

export function HeroSection() {
  const profilePhoto = PlaceHolderImages.find((img) => img.id === 'profile-photo');

  return (
    <section id="home" className="relative overflow-hidden bg-card border-b py-20 sm:py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <FadeIn delay={0.2} duration={0.8} xOffset={-40} yOffset={0}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {PROFILE_DATA.name}
              </h1>
            </FadeIn>
            <FadeIn delay={0.4} duration={0.8} xOffset={-40} yOffset={0}>
              <p className="mt-4 text-xl font-medium text-accent">{PROFILE_DATA.title}</p>
            </FadeIn>
            <FadeIn delay={0.6} duration={0.8} xOffset={-40} yOffset={0}>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground lg:mx-0 mx-auto">
                {PROFILE_DATA.summary}
              </p>
            </FadeIn>
            <FadeIn delay={0.8} duration={0.8} xOffset={-40} yOffset={0}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button asChild size="lg">
                  <Link href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={1.0} duration={0.8} xOffset={-40} yOffset={0}>
              <div className="mt-8 flex justify-center gap-6 lg:justify-start">
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

          {/* Right Content (Image) */}
          <div className="flex justify-center lg:justify-end">
            <FadeIn
              className="relative h-80 w-80 lg:h-96 lg:w-96"
              delay={0.2}
              duration={0.8}
              xOffset={40}
              yOffset={0}
            >
              {profilePhoto && (
                <Image
                  src={profilePhoto.imageUrl}
                  alt={PROFILE_DATA.name}
                  width={400}
                  height={400}
                  priority
                  data-ai-hint={profilePhoto.imageHint}
                  className="rounded-full object-cover shadow-2xl border-8 border-background"
                />
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
