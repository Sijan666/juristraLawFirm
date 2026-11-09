import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const SERVICES = [
  {
    id: "01",
    title: "Corporate & Business Law",
    description:
      "Strategic counsel for businesses, mergers, contracts, and compliance.",
    href: "/services#corporate-business",
  },
  {
    id: "02",
    title: "Family Law",
    description:
      "Compassionate handling of divorce, custody, and guardianship matters.",
    href: "/services#family",
  },
  {
    id: "03",
    title: "Real Estate Law",
    description:
      "Guidance on property transactions, disputes, and zoning laws.",
    href: "/services#real-estate",
  },
  {
    id: "04",
    title: "Employment Law",
    description:
      "Legal support on contracts, disputes, and workplace rights.",
    href: "/services#employment",
  },
  {
    id: "05",
    title: "Civil Litigation",
    description:
      "Legal assistance in civil disputes, litigation, and court proceedings.",
    href: "/services#civil-litigation",
  },
  {
    id: "06",
    title: "Contract Review & Drafting",
    description:
      "Expert drafting, review, and negotiation of legal contracts and agreements.",
    href: "/services#contract-review",
  },
];

export const LegalServices = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        {/* SECTION HEADER */}
        <ScrollReveal direction="up" duration={700} distance={20}>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#111827] leading-tight mb-4">
              <span className="font-serif font-bold italic text-[#600E17]">
                Legal Services
              </span>{" "}
              <span className="font-semibold text-[#0F0F0F]">
                Designed Around Your
              </span>{" "}
              <span className="font-serif font-bold italic text-[#600E17]">
                Needs
              </span>
            </h2>

            <p className="mt-5 text-[#222222] text-sm sm:text-base leading-relaxed max-w-195 mx-auto">
              Every legal challenge is different. Our team offers focused legal
              support across a wide range of practice areas, helping individuals
              and businesses make informed decisions with confidence
            </p>
          </div>
        </ScrollReveal>

        {/* SERVICES GRID */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map((service, index) => (
            <ScrollReveal
              key={service.id}
              direction="up"
              delay={index * 90}
              duration={700}
              distance={28}
            >
              <div className="group flex flex-col justify-between h-full rounded-sm bg-[#FAF7F7] p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-transparent hover:border-rose-100">
                <div>
                  <span className="text-sm font-semibold tracking-wider text-[#8A4A54]">
                    {service.id}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold leading-snug text-[#600E17] transition-colors group-hover:text-[#600E17] sm:text-[22px]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-gray-500 sm:text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-gray-200/60 pt-4">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#600E17] transition-colors group-hover:text-[#600E17]"
                  >
                    <span>Read More</span>
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
