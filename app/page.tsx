import ExternalSocialLinks from './components/landing/ExternalSocialLinks';
import { HeroSection } from './components/landing/HeroSection';

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-start">
      <ExternalSocialLinks />
      <HeroSection />
    </main>
  );
}
