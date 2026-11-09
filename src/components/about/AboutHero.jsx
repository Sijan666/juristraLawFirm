import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ShieldCheck, Scale, Award } from "lucide-react";

export const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-gray-100">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT: Heading & Story Intro */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2E8E9] text-[#5B1621] text-xs font-semibold uppercase tracking-wider mb-6">
              <Scale className="w-3.5 h-3.5" />
              About Juristra Law Firm
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] lg:leading-[1.12] tracking-[-0.01em] text-[#111827]">
              Committed to <br />
              <span className="font-serif font-bold italic text-[#611422]">
                Justice, Integrity
              </span>{" "}
              <br />
              <span className="font-semibold">& Client Success</span>
            </h1>

            <p className="mt-6 max-w-xl text-base font-normal text-gray-600 sm:text-lg sm:leading-relaxed">
              Founded on the belief that exceptional legal counsel should be transparent, compassionate, and unwavering, Juristra provides strategic advocacy for individuals, families, and businesses across diverse legal territories.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#5B1621] px-7 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#471019] active:scale-[0.98]"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#our-values"
                className="inline-flex items-center justify-center rounded-sm bg-[#F2E8E9] px-7 py-3.5 text-sm font-medium text-[#5B1621] transition-all duration-200 hover:bg-[#EADBDE] active:scale-[0.98]"
              >
                Explore Our Values
              </Link>
            </div>
          </div>

          {/* RIGHT: Visual Collage & Experience Card */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                  alt="Juristra Law Firm Office and Attorneys"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-5 sm:p-6 rounded-md shadow-2xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#F2E8E9] rounded-sm text-[#5B1621]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-serif font-bold italic text-2xl text-[#611422]">
                      15+ Years
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      Protecting Client Rights
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Award / Accreditation */}
              <div className="absolute -top-4 -right-4 bg-[#111111] text-white p-4 rounded-md shadow-xl flex items-center gap-3 border border-gray-800">
                <Award className="w-5 h-5 text-[#F2E8E9]" />
                <div className="text-xs">
                  <p className="font-bold text-[#F2E8E9]">Top Ranked</p>
                  <p className="text-gray-400">Legal Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
