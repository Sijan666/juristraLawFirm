import { ContactHero, ContactFormSection, ContactFAQ } from "@/components/contact";
import { TrustedOrganizations } from "@/components/home/TrustedOrganizations";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export const metadata = {
  title: "Contact Us & Schedule Consultation | Juristra Law Firm",
  description:
    "Get in touch with Juristra's senior attorneys. Confidential consultations for corporate law, litigation, domestic matters, and employment advocacy.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ScrollReveal direction="up" duration={700}>
        <TrustedOrganizations />
      </ScrollReveal>
      <ContactFormSection />
      <ContactFAQ />
    </>
  );
}
