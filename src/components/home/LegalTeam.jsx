import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

const TEAM_MEMBERS = [
  {
    id: 'albert-flores',
    name: 'Albert Flores',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800',
    areas: ['Corporate Law', 'Business Law', 'Real Estate Law'],
  },
  {
    id: 'dianne-russell',
    name: 'Dianne Russell',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800',
    areas: ['Employment Law', 'Business Law', 'Corporate Law'],
  },
  {
    id: 'devon-lane',
    name: 'Devon Lane',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800',
    areas: ['Family Law', 'Business Law'],
  },
  {
    id: 'bessie-cooper',
    name: 'Bessie Cooper',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600&h=800',
    areas: ['Family Law', 'Civil Litigation', 'Contract Reviewer'],
  }
];

export const LegalTeam = () => {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <Container>
        {/* SECTION HEADER */}
        <ScrollReveal direction="up" duration={700} distance={20}>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#111827] leading-tight mb-4">
              Meet Our <span className="font-serif font-bold italic text-[#611422]">Legal Team</span>
            </h2>
            <p className="text-[#222222] text-sm sm:text-base leading-relaxed max-w-125 mx-auto mt-6 mb-10">
              Meet the attorneys and legal experts committed to delivering trusted advice and personalized support.
            </p>
          </div>
        </ScrollReveal>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {TEAM_MEMBERS.map((member, index) => (
            <ScrollReveal
              key={member.id}
              direction="up"
              delay={index * 110}
              duration={700}
              distance={28}
            >
              <div className="group flex flex-col h-full">
                {/* Image Container */}
                <Link href={`/lawyers/${member.id}`} className="block relative w-full aspect-4/5 bg-[#F4F4F5] rounded-sm overflow-hidden mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </Link>
                {/* Name & Arrow Row */}
                <div className="flex items-center justify-between mb-3">
                  <Link href={`/lawyers/${member.id}`}>
                    <h3 className="text-xl font-medium text-gray-900 transition-colors hover:text-[#611422]">
                      {member.name}
                    </h3>
                  </Link>
                  <Link 
                    href={`/lawyers/${member.id}`}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2E8E9] text-[#5B1621] transition-colors duration-300 hover:bg-[#5B1621] hover:text-white"
                    aria-label={`View ${member.name}'s profile`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                {/* Practice Areas Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {member.areas.map((area, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center rounded-sm border border-gray-200 px-2 py-1 text-[11px] font-medium text-gray-600 bg-white"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* BOTTOM CTA BUTTON */}
        <ScrollReveal direction="up" delay={200} duration={600} distance={16}>
          <div className="flex justify-center">
            <Link 
              href="/lawyers"
              className="group inline-flex items-center gap-2.5 rounded-sm bg-[#5B1621] px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#471019] active:scale-[0.98]"
            >
              Find More Lawyer
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
