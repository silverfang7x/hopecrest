import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import ImpactSection from "@/components/home/ImpactSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ProgramsPreview />
      <ImpactSection />
      <CTASection />
    </main>
  );
}
