import React from "react";
import { Container } from "@/components/ui/Container";
import { Scale, Clock, ShieldCheck, PhoneCall } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-14 lg:pt-16 lg:pb-20 border-b border-gray-100">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Top Badge */}
          <ScrollReveal direction="down" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2E8E9] text-[#5B1621] text-xs font-semibold uppercase tracking-wider mb-6">
              <Scale className="w-3.5 h-3.5" />
              Confidential & Direct Counsel
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal direction="up" delay={100} duration={800}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] lg:leading-[1.12] tracking-[-0.01em] text-[#111827]">
              Let’s Discuss Your Case. <br />
              <span className="font-serif font-bold italic text-[#611422]">
                Schedule a Consultation
              </span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal direction="up" delay={200} duration={800}>
            <p className="mt-6 text-base font-normal text-gray-600 sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you are facing urgent litigation, business incorporation, or a confidential domestic matter, our legal team provides clear direction and unwavering representation.
            </p>
          </ScrollReveal>

          {/* Reassurance pills */}
          <ScrollReveal direction="up" delay={300} duration={800}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#611422]" /> 100% Confidential
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#611422]" /> 24-Hour Response Time
              </span>
              <span className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#611422]" /> Direct Attorney Access
              </span>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};
