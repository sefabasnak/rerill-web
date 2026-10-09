import { AppearanceSection, FeaturesSection, ScreensMarquee } from "@/components/site/FeaturesSection";
import { HeroSection, SiteNav } from "@/components/site/HeroSection";
import { AboutSection, PrivacySection, SiteFooter } from "@/components/site/InfoSections";
import { NewsletterSection } from "@/components/site/NewsletterSection";

export default function Home() {
  return (
    <main className="rr-site min-h-screen">
      <SiteNav />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <AppearanceSection />
      <ScreensMarquee />
      <PrivacySection />
      <NewsletterSection />
      <SiteFooter />
    </main>
  );
}
