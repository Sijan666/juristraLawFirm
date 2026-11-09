import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-12 font-manrope lg:pt-12 lg:pb-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* LEFT COLUMN: Typography & Action Buttons */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Main Headline */}
            <ScrollReveal direction="up" delay={50} duration={800} distance={24}>
              <h1 className="text-4xl tracking-[-0.02em] sm:text-5xl md:text-6xl lg:text-[88px] lg:leading-[1.18] xl:text-[72px]">
                <span className="block font-dm-serif-display font-normal italic text-[#600E17]">
                  Legal Guidance
                </span>
                <span className="font-manrope font-medium text-[#0F0F0F]">
                  that You Can
                </span>
                <span className="font-dm-serif-display font-normal italic text-[#600E17]">
                  Trust
                </span>
                <br />
                <span className="font-manrope font-medium text-[#0F0F0F]">
                  in Every Step
                </span>
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal direction="up" delay={150} duration={800} distance={24}>
              <p className="mt-5 max-w-xl text-base font-normal text-gray-600 sm:text-lg sm:leading-relaxed">
                Whether you’re facing a business dispute, family matter, or legal
                uncertainty, our experienced attorneys provide clear advice and
                practical solutions tailored to your situation.
              </p>
            </ScrollReveal>

            {/* CTA Action Buttons */}
            <ScrollReveal direction="up" delay={250} duration={800} distance={24}>
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#600E17] px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#600E17] active:scale-[0.98]"
                >
                  <span>Schedule A Consultation</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/lawyers"
                  className="inline-flex items-center justify-center rounded-sm bg-[#F2E8E9] px-6 py-3.5 text-sm font-medium text-[#600E17] transition-all duration-200 hover:bg-[#EADBDE] active:scale-[0.98]"
                >
                  Speak With Attorney
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: Hero Image */}
          <div className="relative flex justify-center lg:col-span-5 xl:col-span-5">
            <ScrollReveal direction="left" delay={200} duration={900} distance={30} className="w-full">
              <div className="relative mx-auto aspect-604/526 w-full max-w-155">
                <Image
                  src="/bannerImage.png"
                  alt="Juristra Professional Attorneys and Legal Experts"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 42vw, 620px"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
