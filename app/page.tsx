import { ExperienceSection } from "./components/experience/ExperienceSection";
import ExternalSocialLinks from "./components/landing/ExternalSocialLinks";
import { HeroSection } from "./components/landing/HeroSection";
import { AboutSection } from "./components/about/AboutSection";
import { ProjectsSection } from "./components/projects/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-start mb-20 mx-10 sm:mx-24 lg:mx-32 2xl:mx-64 gap-20 xl:gap-0">
      <ExternalSocialLinks />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
