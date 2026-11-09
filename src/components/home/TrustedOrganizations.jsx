import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const ORGANIZATIONS = [
  {
    id: "globe",
    name: "Logoipsum Globe",
    image: "/trustedOrganizartions/logo%20(2).png",
  },
  {
    id: "flower",
    name: "Logoipsum Flower",
    image: "/trustedOrganizartions/logo%20(3).png",
  },
  {
    id: "bear",
    name: "Logoipsum Bear",
    image: "/trustedOrganizartions/logo%20(4).png",
  },
  {
    id: "sparkle",
    name: "Logoipsum Sparkle",
    image: "/trustedOrganizartions/logo%20(5).png",
  },
  {
    id: "smile",
    name: "Logoipsum Smile",
    image: "/trustedOrganizartions/logo%20(6).png",
  },
];

export const TrustedOrganizations = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        {/* Section Heading */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#111827] leading-tight mb-4">
          <span className="font-semibold text-[#111827]">Trusted by </span>
          <span className="font-serif font-bold italic text-[#611422]">
            Organizations
          </span>{" "}
          <span className="font-semibold text-[#111827]">Worldwide</span>
        </h2>

        <div className="mt-10 overflow-hidden sm:mt-12 lg:mt-14 relative w-full">
          <style>{`
            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-infinite {
              display: flex;
              width: max-content;
              animation: marqueeScroll 20s linear infinite;
            }
            .animate-marquee-infinite:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="animate-marquee-infinite">
            {[false, true].map((isDuplicate) => (
              <div
                key={isDuplicate ? "duplicate" : "original"}
                className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
                aria-hidden={isDuplicate || undefined}
              >
                {ORGANIZATIONS.map((org) => (
                  <div
                    key={`${org.id}-${isDuplicate}`}
                    className="flex h-10 shrink-0 items-center justify-center opacity-85 transition-opacity hover:opacity-100"
                  >
                    <Image
                      src={org.image}
                      alt={isDuplicate ? "" : org.name}
                      width={160}
                      height={36}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};