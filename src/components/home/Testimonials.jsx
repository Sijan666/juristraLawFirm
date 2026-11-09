"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const REVIEWS = [
  {
    id: 1,
    name: "Kathryn Murphy",
    category: "Family Law",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600&h=800",
    text: "Working with this legal team was one of the best decisions I made during a difficult family matter. I was referred through an agency, and from the.......",
  },
  {
    id: 2,
    name: "Marvin McKinney",
    category: "Real Estate Law",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=600&h=800",
    text: "The team made my real estate transaction simple and stress-free. Their legal expertise, clear communication, and attention to.......",
  },
  {
    id: 3,
    name: "Eleanor Pena",
    category: "Corporate Law",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600&h=800",
    text: "Outstanding corporate legal support. They helped us navigate complex mergers with absolute precision and secured our business interests perfectly.......",
  },
  {
    id: 4,
    name: "Guy Hawkins",
    category: "Civil Litigation",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=800",
    text: "They handled our civil litigation case with utmost professionalism. We felt supported every step of the way, and the courtroom outcome exceeded our expectations.......",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <Container>
        {/* HEADER: Title on Left, Custom Arrows on Right */}
        <ScrollReveal direction="up" duration={700} distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
            <div className="">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#111827] leading-tight mb-3">
                What Our{" "}
                <span className="font-serif font-bold italic text-[#611422]">
                  Clients Say
                </span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Building lasting relationships through trusted counsel, personalized
                support, and proven legal expertise.
              </p>
            </div>

            {/* Custom Navigation Arrows */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                className="prev-btn flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[#611422] transition-colors hover:bg-[#F2E8E9] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                className="next-btn flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#5B1621] text-white transition-colors hover:bg-[#471019] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Next slide"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* SWIPER SLIDER: Strictly clipped inside Container */}
        <ScrollReveal direction="up" delay={120} duration={800} distance={24}>
          <div className="w-full overflow-hidden">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }}
              spaceBetween={32}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              className="w-full"
            >
              {REVIEWS.map((review) => (
                <SwiperSlide key={review.id} className="h-auto">
                  {/* Two-column Card layout: Image Left, Content Right */}
                  <div className="flex flex-col sm:flex-row gap-6 lg:gap-7 bg-white h-full items-start">
                    {/* Left: Client Photo */}
                    <div className="relative w-full sm:w-50 lg:w-55 aspect-4/5 sm:aspect-auto sm:h-60 lg:h-65 shrink-0 rounded-sm overflow-hidden bg-[#F4F4F5]">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, 220px"
                      />
                    </div>

                    {/* Right: Content details */}
                    <div className="flex flex-col justify-between py-1 h-full flex-1">
                      <div>
                        {/* Name */}
                        <h3 className="text-xl sm:text-[22px] font-medium text-[#611422] mb-2 leading-snug">
                          {review.name}
                        </h3>

                        {/* Category tag */}
                        <span className="inline-block rounded-xs border border-gray-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-gray-500 mb-4">
                          {review.category}
                        </span>

                        {/* Feedback text */}
                        <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600 line-clamp-4">
                          {review.text}
                        </p>
                      </div>

                      {/* Read More Link with Arrow */}
                      <div className="pt-4 mt-2">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#611422] hover:text-[#471019] transition-colors group"
                        >
                          <span>Read More</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
