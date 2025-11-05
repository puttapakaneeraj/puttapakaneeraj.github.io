import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE_DATA } from '@/lib/data';

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-background">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
          <p className="mt-3 text-lg text-muted-foreground">My professional journey so far.</p>
        </div>
        <div className="relative">
          {/* The vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-border" aria-hidden="true" />

          {EXPERIENCE_DATA.map((job, index) => (
            <div key={index} className="relative mb-8 flex justify-between items-center w-full">
              {/* Timeline Item Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <Card className="shadow-md transition-shadow hover:shadow-lg">
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

              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Briefcase className="h-4 w-4" />
                </div>
              </div>

              {/* Empty placeholder for alignment */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
