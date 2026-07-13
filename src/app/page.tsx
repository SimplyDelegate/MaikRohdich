import { AudienceSwitchSection } from "@/components/sections/AudienceSwitchSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { FaqPreviewSection } from "@/components/sections/FaqPreviewSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsPreviewSection } from "@/components/sections/ProjectsPreviewSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { TrustBar } from "@/components/sections/TrustBar";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <SocialProofSection />
      <AudienceSwitchSection />
      <AuthoritySection />
      <ProjectsPreviewSection />
      <FaqPreviewSection />
      <ContactCtaSection />
    </>
  );
}
