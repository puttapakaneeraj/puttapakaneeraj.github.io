import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS_DATA } from '@/lib/data';
import { FadeIn } from '../ui/fade-in';

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Technical Toolkit</h2>
            <p className="mt-3 text-lg text-muted-foreground">A selection of technologies and skills I specialize in.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SKILLS_DATA.map((category, index) => (
            <FadeIn key={category.name} delay={index * 0.1}>
              <Card className="h-full shadow-sm transition-shadow hover:shadow-lg bg-card">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className="p-3 rounded-md bg-accent/10">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center gap-2">
                         <skill.icon className="h-4 w-4" />
                        <span>{skill.name}</span>
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
