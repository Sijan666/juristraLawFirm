import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const STEPS = [
  {
    id: "01",
    title: "Book a Consultation",
    description: "Schedule a conversation with our legal experts to discuss your situation and goals.",
    placement: "order-1 lg:col-start-1 lg:row-start-1"
  },
  {
    id: "02",
    title: "Discuss Your Legal Needs",
    description: "We listen carefully to understand your challenges and provide clear legal guidance.",
    placement: "order-2 lg:col-start-3 lg:row-start-1"
  },
  {
    id: "03",
    title: "Build a Strategic Plan",
    description: "Together, we create a tailored legal strategy designed for the best possible outcome.",
    placement: "order-3 lg:col-start-1 lg:row-start-2"
  },
  {
    id: "04",
    title: "Move Forward Confidently",
    description: "Receive ongoing support and trusted counsel as we help you navigate the path ahead.",
    placement: "order-4 lg:col-start-3 lg:row-start-2"
  }
];

export const Journey = () => {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <Container>
        {/* SECTION HEADER */}
        <ScrollReveal direction="up" duration={700} distance={20}>
          <div className="mx-auto max-w-5xl text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#111827] leading-tight mb-4">
              Your <span className="font-dm-serif-display font-bold italic text-[#600E17]">Journey</span> to a Successful Resolution
            </h2>
            <p className="mt-6 text-[#222222] text-sm sm:text-base  leading-relaxed">
              Our values are more than words, they shape every case we handle.
            </p>
          </div>
        </ScrollReveal>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 xl:gap-x-16 gap-y-12 items-center">
          
          {STEPS.map((step, idx) => (
            <div 
              key={step.id} 
              className={`flex flex-col border-b border-gray-100 pb-8 h-full justify-center ${step.placement}`}
            >
              <ScrollReveal
                direction={idx % 2 === 0 ? "right" : "left"}
                delay={idx * 100}
                duration={750}
                distance={24}
              >
                <span className="text-2xl sm:text-3xl font-medium text-[#611422] mb-4 block">
                  {step.id}
                </span>
                <h3 className="text-xl sm:text-[22px] font-medium text-[#420D15] mb-3 transition-colors hover:text-[#611422]">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pr-4">
                  {step.description}
                </p>
              </ScrollReveal>
            </div>
          ))}

          {/* CENTER IMAGE */}
          <div className="order-5 md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2 relative w-full aspect-square lg:aspect-4/5 rounded-sm overflow-hidden shadow-lg group">
            <ScrollReveal direction="zoom" duration={850} className="w-full h-full relative">
              <Image
                src="/journey.png"
                alt="Juristra Legal Journey"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};