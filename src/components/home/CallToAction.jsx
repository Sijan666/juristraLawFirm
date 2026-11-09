import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

export const CallToAction = () => {
  return (
    <section className="bg-[#111111] py-24 sm:py-32 overflow-hidden">
      <Container className="flex flex-col items-center text-center">
        {/* Heading */}
        <ScrollReveal direction="up" duration={750} distance={24}>
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-tight sm:leading-tight lg:leading-[1.15] mb-6">
            Need Legal Advice? Let’s <br className="hidden sm:block" />
            <span className="font-serif font-bold italic text-[#F2E8E9]">
              Start the Conversation
            </span>
          </h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal direction="up" delay={120} duration={750} distance={20}>
          <p className="max-w-2xl text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
            Schedule a confidential consultation with one of our attorneys and receive guidance tailored to your situation.
          </p>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal direction="up" delay={220} duration={750} distance={18}>
          <Link 
            href="/contact"
            className="group inline-flex items-center gap-2.5 bg-[#F2E8E9] text-[#5B1621] px-8 py-3.5 rounded-sm font-medium hover:bg-white transition-all duration-300 active:scale-95"
          >
            Book a Consultation
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
};
