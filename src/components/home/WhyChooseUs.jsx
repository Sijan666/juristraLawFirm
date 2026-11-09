'use client';

import React from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

const REASONS = [
  {
    number: '01',
    title: 'Experienced Legal Team',
    description: 'Our attorneys bring years of practical legal experience across multiple areas of law.'
  },
  {
    number: '02',
    title: 'Transparent Communication',
    description: 'We explain legal matters in plain language so you always understand your options.'
  },
  {
    number: '03',
    title: 'Client-First Approach',
    description: 'Every case receives personal attention and a strategy tailored to your goals.'
  },
  {
    number: '04',
    title: 'Reliable Representation',
    description: 'We stand beside you from consultation to resolution.'
  }
];

const STATS = [
  { end: 15, suffix: '+', label: 'Years of Experience' },
  { end: 2500, suffix: '+', label: 'Cases Handled' },
  { end: 95, suffix: '%', label: 'Client Satisfaction Rate' }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#111111] text-white py-20 lg:py-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Text & Stats */}
          <div className="">
            <ScrollReveal direction="right" duration={750} distance={28}>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium tracking-tight mb-6 leading-tight">
                Why <span className="font-serif font-bold italic text-[#D1B5B8]">Clients Choose</span> Our Firm?
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
                We combine legal expertise with a client-first approach, helping you move forward with confidence and peace of mind.
              </p>

              {/* Stats Layout */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-start gap-x-8 sm:gap-x-12 gap-y-6 mb-20">
                {STATS.map((stat, index) => (
                  <div key={index} className="flex flex-col">
                    <h4 className="font-serif font-bold italic text-2xl sm:text-4xl text-[#D1B5B8] mb-1">
                      <span className="relative inline-block">
                        <span className="invisible block" aria-hidden="true">
                          {stat.end.toLocaleString('en-US')}
                          {stat.suffix}
                        </span>
                        <span className="absolute left-0 top-0 whitespace-nowrap">
                          <CountUp
                            end={stat.end}
                            suffix={stat.suffix}
                            duration={2.5}
                            separator=","
                            enableScrollSpy
                            scrollSpyOnce
                          />
                        </span>
                      </span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#DEDEDE] leading-snug mt-3">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#F2E8E9] text-[#5B1621] px-6 sm:px-8 py-3.5 rounded-sm font-medium hover:bg-white transition-all duration-300 group text-sm sm:text-base"
              >
                Learn More
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((reason, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 110}
                duration={700}
                distance={24}
              >
                <div className="bg-[#1C1C1C] p-8 rounded-sm hover:bg-[#242424] transition-all duration-300 h-full border border-neutral-800/80 hover:border-neutral-700">
                  <div className="flex gap-4 items-start mb-4">
                    <span className="text-2xl font-light text-[#F2E8E9]/70 shrink-0">
                      {reason.number}
                    </span>
                    <h3 className="text-xl font-medium text-white leading-tight">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2 pl-11">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}