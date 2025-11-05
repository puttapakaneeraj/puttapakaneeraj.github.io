import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { ExperienceSection } from '@/components/sections/experience';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { ResumeToolSection } from '@/components/sections/resume-tool';
import { ContactSection } from '@/components/sections/contact';
import { FadeIn } from '@/components/ui/fade-in';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FadeIn>
          <ExperienceSection />
        </FadeIn>
        <FadeIn>
          <SkillsSection />
        </FadeIn>
        <FadeIn>
          <ProjectsSection />
        </FadeIn>
        <FadeIn>
          <TestimonialsSection />
        </FadeIn>
        <FadeIn>
          <ResumeToolSection />
        </FadeIn>
        <FadeIn>
          <ContactSection />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
