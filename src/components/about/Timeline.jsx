import React from "react";
import { Container } from "@/components/ui/Container";

const MILESTONES = [
  {
    year: "2010",
    title: "Firm Founded",
    description: "Juristra was established with a singular focus on corporate ethics, dispute resolution, and community protection."
  },
  {
    year: "2014",
    title: "Practice Expansion",
    description: "Expanded our legal departments into Family Law, Commercial Litigation, and Employment Law to serve broader client needs."
  },
  {
    year: "2018",
    title: "National Recognition",
    description: "Ranked among top tier regional law firms with over 1,500 successfully settled claims and trial resolutions."
  },
  {
    year: "2024",
    title: "Modern Legal Agility",
    description: "Incorporated advanced legal tech workflows and digital case tracking, enhancing transparency for 2,500+ satisfied clients."
  }
];

export const Timeline = () => {
  return (
    <section className="bg-white py-20 lg:py-28 border-t border-gray-100">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#111827] leading-tight mb-4">
            Our Journey of <br />
            <span className="font-serif font-bold italic text-[#611422]">
              Growth & Dedication
            </span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Over a decade of milestones, trials, victories, and steadfast commitment to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {MILESTONES.map((item, idx) => (
            <div key={idx} className="relative flex flex-col p-6 rounded-sm bg-[#FAF7F7] border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <span className="font-serif font-bold italic text-3xl text-[#611422] mb-3">
                {item.year}
              </span>
              <h3 className="text-xl font-medium text-[#111827] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
