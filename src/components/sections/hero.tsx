import Image from 'next/image';
import Link from 'next/link';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PROFILE_DATA, SOCIAL_LINKS } from '@/lib/data';
import { FadeIn } from '@/components/ui/fade-in';

export function HeroSection() {
  const profilePhoto = PlaceHolderImages.find((img) => img.id === 'profile-photo');

  return (
    <section id="home" className="py-16 sm:py-24 bg-card border-b">
      <div className="container mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
            <div className="flex justify-center lg:order-last lg:col-span-1">
              {profilePhoto && (
                <div className="relative h-64 w-64 lg:h-80 lg:w-80">
                  <Image
                    src={profilePhoto.imageUrl}
                    alt={PROFILE_DATA.name}
                    width={320}
                    height={320}
                    priority
                    data-ai-hint={profilePhoto.imageHint}
                    className="rounded-full object-cover shadow-lg border-4 border-background"
                  />
                </div>
              )}
            </div>
            <div className="text-center lg:col-span-2 lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {PROFILE_DATA.name}
              </h1>
              <p className="mt-4 text-xl font-medium text-accent">{PROFILE_DATA.title}</p>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground lg:mx-0 mx-auto">
                {PROFILE_DATA.summary}
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button asChild size="lg">
                  <a href={PROFILE_DATA.resumeUrl} download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Link>
                </Button>
              </div>
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
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
