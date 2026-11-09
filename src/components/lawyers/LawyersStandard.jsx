import React from "react";
import { Container } from "@/components/ui/Container";
import { Award, BookOpen, Clock, HeartHandshake } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Award,
    title: "Elite Board Certification",
    description: "Every senior partner holds recognized board certifications and specialized honors in their field."
  },
  {
    icon: Clock,
    title: "Rapid Case Engagement",
    description: "In urgent corporate or domestic scenarios, our legal team responds and mobilizes within 24 hours."
  },
  {
    icon: BookOpen,
    title: "Deep Precedent Mastery",
    description: "We continually study evolving state and federal precedents to deliver superior legal leverage."
  },
  {
    icon: HeartHandshake,
    title: "Direct Attorney Access",
    description: "You work directly with your dedicated lead counsel rather than being passed around caseworkers."
  }
];

export const LawyersStandard = () => {
  return (
    <section className="bg-[#111111] text-white py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight leading-tight mb-4">
            The Standard of <br />
            <span className="font-serif font-bold italic text-[#F2E8E9]">
              Legal Excellence
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            What sets our legal roster apart when representing your vital legal matters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#1C1C1C] p-6 rounded-sm border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-sm bg-[#5B1621] text-[#F2E8E9] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
