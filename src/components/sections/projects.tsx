
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '@/lib/data';
import { FadeIn } from '../ui/fade-in';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Recent Works</h2>
            <p className="mt-3 text-lg text-muted-foreground">A glimpse into my development work.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS_DATA.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div className="group relative h-80 w-full overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  data-ai-hint={project.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-start gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Button asChild variant="outline" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
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
