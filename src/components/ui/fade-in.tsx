
'use client';

import { useRef, useEffect, useState, type ReactNode, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function FadeIn({ children, className, ...props }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={cn(
        'transition-opacity-transform duration-1000 ease-out motion-reduce:transition-none',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
