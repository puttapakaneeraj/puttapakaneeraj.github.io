import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS_DATA } from '@/lib/data';
import { FadeIn } from '../ui/fade-in';
import { Badge } from '../ui/badge';

export function SkillsSection() {
  return (
    <section id="skills" className="bg-card border-y">
      <div className="container mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Technical Toolkit</h2>
            <p className="mt-3 text-lg text-muted-foreground">A selection of my technical and soft skills.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SKILLS_DATA.map((category, index) => (
            <FadeIn key={category.name} delay={index * 0.1}>
              <Card className="shadow-md transition-shadow hover:shadow-lg h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <category.icon className="h-8 w-8 text-accent" />
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="flex items-center gap-2">
                         <skill.icon className="h-4 w-4" />
                        {skill.name}
                      </Badge>
                    ))}
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
