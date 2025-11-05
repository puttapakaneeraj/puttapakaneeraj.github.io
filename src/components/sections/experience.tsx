import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE_DATA } from '@/lib/data';
import { FadeIn } from '../ui/fade-in';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
            <p className="mt-3 text-lg text-muted-foreground">My professional journey so far.</p>
          </div>
        </FadeIn>
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />

          {EXPERIENCE_DATA.map((job, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="relative mb-10 pl-8">
                <div className="absolute -left-1.5 top-1 z-10">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground ring-8 ring-background">
                    <Briefcase className="h-4 w-4" />
                  </div>
                </div>
                <Card className="shadow-md transition-shadow hover:shadow-lg bg-card">
                  <CardHeader>
                    <p className="text-sm text-muted-foreground">{job.period}</p>
                    <CardTitle>{job.role}</CardTitle>
                    <CardDescription>{job.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
