import React from "react";
import { Container } from "@/components/ui/Container";
import { Scale, Users, ShieldCheck, Target, HeartHandshake, Zap } from "lucide-react";

const VALUES = [
  {
    icon: Scale,
    title: "Uncompromising Integrity",
    description: "Every action, counsel, and representation is governed by the highest ethical standards and total transparency.",
  },
  {
    icon: Users,
    title: "Client-Centric Philosophy",
    description: "You are not just a case number. We tailor our legal remedies to your individual circumstances, goals, and well-being.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Protection",
    description: "We safeguard your rights and enterprise interests with proactive dispute mitigation and aggressive advocacy.",
  },
  {
    icon: Target,
    title: "Strategic Precision",
    description: "We develop comprehensive, evidence-driven litigation and advisory roadmaps calibrated for the best achievable outcome.",
  },
  {
    icon: HeartHandshake,
    title: "Empathy & Respect",
    description: "We recognize the personal weight legal matters carry, providing compassionate listening alongside sharp legal counsel.",
  },
  {
    icon: Zap,
    title: "Agility & Modern Practice",
    description: "We utilize modern technologies and responsive communication methods to ensure swift and timely resolutions.",
  },
];

export const OurValues = () => {
  return (
    <section id="our-values" className="bg-[#111111] text-white py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight leading-tight mb-4">
            The Principles That <br />
            <span className="font-serif font-bold italic text-[#F2E8E9]">
              Define Our Practice
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Our values are deeply rooted in our daily practice, setting the bar for how we represent, guide, and protect our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {VALUES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#1C1C1C] p-8 rounded-sm hover:bg-[#242424] transition-all duration-300 border border-neutral-800 hover:border-neutral-700 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#5B1621] text-[#F2E8E9] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
