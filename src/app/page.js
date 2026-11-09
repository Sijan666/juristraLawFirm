import { Banner } from "@/components/home/Banner";
import { TrustedOrganizations } from "@/components/home/TrustedOrganizations";
import { LegalServices } from "@/components/home/LegalServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Journey } from "@/components/home/Journey";
import { CallToAction } from "@/components/home/CallToAction";
import { LegalTeam } from "@/components/home/LegalTeam";
import { Testimonials } from "@/components/home/Testimonials";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <Banner />
      <ScrollReveal direction="fade" duration={800}>
        <TrustedOrganizations />
      </ScrollReveal>
      <LegalServices />
      <WhyChooseUs />
      <Journey />
      <LegalTeam />
      <Testimonials />
      <CallToAction />
    </>
  );
}
