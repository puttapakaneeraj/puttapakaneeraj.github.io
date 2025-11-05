
'use client';

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface AnimatedProgressProps {
  value: number;
  className?: string;
}

export function AnimatedProgress({ value, className }: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate the progress bar to its target value
    const timer = setTimeout(() => setProgress(value), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Progress
      value={progress}
      className={cn('h-2 w-full', className)}
    />
  );
}
