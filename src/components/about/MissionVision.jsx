import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

export const MissionVision = () => {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Section */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-4/5 rounded-sm overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=700"
                  alt="Attorneys collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-4/5 rounded-sm overflow-hidden shadow-md translate-y-6">
                <Image
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=700"
                  alt="Legal consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Decorative Quote Box */}
            <div className="mt-10 bg-[#FAF7F7] border-l-4 border-[#5B1621] p-6 rounded-r-sm">
              <p className="font-serif italic text-gray-800 text-base sm:text-lg">
                &ldquo;Our focus is not simply winning legal disputes, but building enduring trust and securing clarity for every client.&rdquo;
              </p>
              <span className="block mt-2 text-xs font-semibold tracking-wider uppercase text-[#611422]">
                — Managing Partner
              </span>
            </div>
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#111827] leading-tight mb-6">
              Our Purpose: <br />
              <span className="font-serif font-bold italic text-[#611422]">
                Mission & Strategic Vision
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              At Juristra, we approach the law with rigor, empathy, and persistent dedication. We dismantle legal complexities so our clients can make informed choices with supreme confidence.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#F2E8E9] text-[#5B1621] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#111827] mb-1">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    To deliver premier legal services grounded in ethics, precision, and personalized advocacy, ensuring that justice is accessible and outcomes are maximized.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#F2E8E9] text-[#5B1621] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#111827] mb-1">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    To be the standard of legal excellence and integrity, recognized nationally for transformative client results, modern legal agility, and enduring client partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
