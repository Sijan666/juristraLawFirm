import { AboutHero, MissionVision, OurValues, Timeline } from "@/components/about";
import { TrustedOrganizations } from "@/components/home/TrustedOrganizations";
import { LegalTeam } from "@/components/home/LegalTeam";
import { Testimonials } from "@/components/home/Testimonials";
import { CallToAction } from "@/components/home/CallToAction";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export const metadata = {
  title: "About Us | Juristra Law Firm",
  description:
    "Learn about Juristra's history, experienced attorneys, core values, and mission to deliver exceptional legal counsel.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ScrollReveal direction="up" duration={700}>
        <TrustedOrganizations />
      </ScrollReveal>
      <ScrollReveal direction="up" duration={800}>
        <MissionVision />
      </ScrollReveal>
      <ScrollReveal direction="up" duration={800}>
        <OurValues />
      </ScrollReveal>
      <ScrollReveal direction="up" duration={800}>
        <Timeline />
      </ScrollReveal>
      <ScrollReveal direction="up" duration={800}>
        <LegalTeam />
      </ScrollReveal>
      <ScrollReveal direction="up" duration={800}>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal direction="up" duration={700}>
        <CallToAction />
      </ScrollReveal>
    </>
  );
}
