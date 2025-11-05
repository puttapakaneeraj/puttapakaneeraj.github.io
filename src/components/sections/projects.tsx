
import Image from 'next/image';
import Link from 'next/link';
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
        <div className="space-y-16">
          {PROJECTS_DATA.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div
                className={`group grid grid-cols-1 md:grid-cols-5 items-center gap-8 rounded-lg border bg-transparent p-4 transition-all duration-300`}
              >
                <div
                  className={`relative h-64 w-full overflow-hidden rounded-md md:h-80 ${
                    index % 2 === 0 ? 'md:col-span-3' : 'md:col-span-3 md:col-start-3'
                  }`}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <div
                  className={`flex flex-col justify-center ${
                    index % 2 === 0 ? 'md:col-span-2' : 'md:col-span-2 md:col-start-1 md:row-start-1'
                  }`}
                >
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-start gap-3">
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
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
