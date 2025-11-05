
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '@/lib/data';
import { FadeIn } from '../ui/fade-in';

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Recent Works</h2>
            <p className="mt-3 text-lg text-muted-foreground">A glimpse into my development work.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS_DATA.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <Card className="group flex h-full flex-col overflow-hidden rounded-lg border shadow-sm transition-shadow duration-300 hover:shadow-xl">
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <CardContent className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-end gap-3">
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
