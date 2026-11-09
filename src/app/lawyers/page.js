import { LawyersHero, LawyersDirectory, LawyersStandard } from "@/components/lawyers";
import { TrustedOrganizations } from "@/components/home/TrustedOrganizations";
import { Testimonials } from "@/components/home/Testimonials";
import { CallToAction } from "@/components/home/CallToAction";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export const metadata = {
  title: "Our Attorneys & Legal Team | Juristra Law Firm",
  description:
    "Meet our team of experienced attorneys specializing in corporate law, litigation, family law, employment, and real estate.",
};

export default function LawyersPage() {
  return (
    <>
      <LawyersHero />
      <ScrollReveal direction="up" duration={700}>
        <TrustedOrganizations />
      </ScrollReveal>
      <ScrollReveal direction="up" duration={800}>
        <LawyersDirectory />
      </ScrollReveal>
      <ScrollReveal direction="up" duration={800}>
        <LawyersStandard />
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
