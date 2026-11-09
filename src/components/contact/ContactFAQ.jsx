"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const FAQS = [
  {
    q: "How does the initial consultation process work?",
    a: "During the initial consultation, one of our lead partners reviews the details of your legal situation, assesses potential liabilities or opportunities, and outlines transparent procedural options along with fee structures."
  },
  {
    q: "Is information shared in the consultation strictly confidential?",
    a: "Yes. All discussions, briefings, and communications are safeguarded by attorney-client privilege guidelines, regardless of whether you ultimately retain our firm."
  },
  {
    q: "What fee structures does Juristra offer?",
    a: "Depending on your case category, we offer flexible arrangements including flat project fees, hourly billing rates with detailed itemization, and contingency fee options for select litigation matters."
  },
  {
    q: "How fast can an attorney engage if my situation is urgent?",
    a: "For emergency matters such as emergency injunctions, regulatory notices, or arrests, our rapid-response legal team is available 24/7 and initiates intervention within hours."
  },
  {
    q: "Can consultations be held remotely via video conference?",
    a: "Absolutely. We routinely hold encrypted video conferences for clients nationwide and internationally who prefer not to visit our physical chambers."
  }
];

export const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      id="faq"
      className="bg-[#111111] text-white py-20 lg:py-28 overflow-hidden"
    >
      <Container>
        <ScrollReveal direction="up" duration={700}>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight leading-tight mb-4">
              Frequently Asked <br />
              <span className="font-serif font-bold italic text-[#F2E8E9]">
                Consultation Questions
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Find immediate answers regarding consultation policies, privacy, fees, and onboarding.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 80}
                duration={600}
              >
                <div className="border border-neutral-800 rounded-sm bg-[#1C1C1C] overflow-hidden transition-colors">
                  <button
                    id={`faq-question-${index}`}
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:text-[#F2E8E9] transition-colors"
                  >
                    <span className="text-base sm:text-lg font-medium pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#F2E8E9] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className="px-6 pb-6 pt-1 text-gray-400 text-sm sm:text-base leading-relaxed border-t border-neutral-800/60"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
