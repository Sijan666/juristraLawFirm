import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Scale, Award, Users } from "lucide-react";

export const LawyersHero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-16 lg:pb-20 border-b border-gray-100">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2E8E9] text-[#5B1621] text-xs font-semibold uppercase tracking-wider mb-6">
            <Scale className="w-3.5 h-3.5" />
            Distinguished Advocates & Counsel
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] lg:leading-[1.12] tracking-[-0.01em] text-[#111827]">
            Meet the Legal Minds{" "}
            <br />
            <span className="font-serif font-bold italic text-[#611422]">
              Fighting for Your Rights
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base font-normal text-gray-600 sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Our multidisciplinary team brings decades of combined courtroom prowess, transactional mastery, and empathetic client commitment across every major practice area.
          </p>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto pt-8 border-t border-gray-100">
            <div>
              <p className="font-serif font-bold italic text-3xl sm:text-4xl text-[#611422]">
                25+
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Attorneys & Advisors</p>
            </div>
            <div>
              <p className="font-serif font-bold italic text-3xl sm:text-4xl text-[#611422]">
                98%
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Trial & Settlement Rate</p>
            </div>
            <div>
              <p className="font-serif font-bold italic text-3xl sm:text-4xl text-[#611422]">
                15+
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Practice Disciplines</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
