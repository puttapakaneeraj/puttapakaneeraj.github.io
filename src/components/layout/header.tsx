
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { SOCIAL_LINKS, PROFILE_DATA } from '@/lib/data';
import { ThemeToggle } from '@/components/theme-toggle';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const NAV_LINKS = [
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const isMobile = useIsMobile();
  const [hasMounted, setHasMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const profilePhoto = PlaceHolderImages.find((img) => img.id === 'profile-photo');

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const Logo = () => (
    <div className="flex items-center gap-2 font-bold text-lg">
        {profilePhoto && (
            <Image
                src={profilePhoto.imageUrl}
                alt="Profile photo"
                width={32}
                height={32}
                className="rounded-full object-cover"
                data-ai-hint={profilePhoto.imageHint}
            />
        )}
      <span>{PROFILE_DATA.name}</span>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Logo />
        </Link>
        {hasMounted && isMobile ? (
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b pb-4">
                    <SheetClose asChild>
                      <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                        <Logo />
                      </Link>
                    </SheetClose>
                  </div>
                  <nav className="mt-8 flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto flex items-center justify-center gap-4 pb-4">
                      {SOCIAL_LINKS.map((link) => (
                          <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-accent">
                              <link.icon className="h-6 w-6" />
                              <span className="sr-only">{link.name}</span>
                          </Link>
                      ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/60 transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        )}
      </div>
    </header>
  );
}
