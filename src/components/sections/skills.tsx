import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedProgress } from '@/components/ui/animated-progress';
import { SKILLS_DATA } from '@/lib/data';
import { FadeIn } from '../ui/fade-in';

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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {SKILLS_DATA.map((category, index) => (
            <FadeIn key={category.name} delay={index * 0.1}>
              <Card className="shadow-md transition-shadow hover:shadow-lg h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <category.icon className="h-8 w-8 text-accent" />
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-6">
                    {category.skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="mb-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <skill.icon className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <AnimatedProgress value={skill.level} />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
