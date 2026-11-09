"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Mail, Phone, Search, GraduationCap } from "lucide-react";
import { LAWYERS } from "./lawyersData";

const CATEGORIES = [
  "All",
  "Corporate",
  "Litigation",
  "Family",
  "Employment",
  "Finance",
  "Real Estate",
];

export const LawyersDirectory = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLawyers = LAWYERS.filter((lawyer) => {
    const matchesCategory =
      activeCategory === "All" || lawyer.category === activeCategory;
    const matchesSearch =
      lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lawyer.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lawyer.areas.some((area) =>
        area.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        {/* Controls Bar: Category Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-sm transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#5B1621] text-white shadow-sm"
                    : "bg-[#FAF7F7] text-gray-700 hover:bg-[#F2E8E9] hover:text-[#5B1621]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, area..."
              aria-label="Search lawyers by name, role, or practice area"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-[#FAF7F7] border border-gray-200 rounded-sm focus:outline-none focus:border-[#5B1621] focus:ring-1 focus:ring-[#5B1621] transition-all"
            />
          </div>
        </div>

        {/* Lawyers Grid */}
        {filteredLawyers.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-sm">
            <p className="text-gray-500 text-lg">
              No attorneys match your selected filter criteria.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-sm font-semibold text-[#611422] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredLawyers.map((lawyer) => (
              <div
                key={lawyer.id}
                className="group flex flex-col justify-between bg-white border border-gray-100 rounded-sm p-4 hover:shadow-xl transition-all duration-300 hover:border-gray-200"
              >
                <div>
                  {/* Photo with Overlay Badge */}
                  <Link
                    href={`/lawyers/${lawyer.id}`}
                    className="block relative w-full aspect-4/5 bg-[#F4F4F5] rounded-sm overflow-hidden mb-4"
                  >
                    <Image
                      src={lawyer.image}
                      alt={lawyer.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-xs font-medium">
                      {lawyer.experience}
                    </div>
                  </Link>

                  {/* Header & Link */}
                  <div className="flex items-center justify-between mb-1">
                    <Link href={`/lawyers/${lawyer.id}`}>
                      <h3 className="text-xl font-medium text-gray-900 group-hover:text-[#611422] transition-colors">
                        {lawyer.name}
                      </h3>
                    </Link>
                    <Link
                      href={`/lawyers/${lawyer.id}`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2E8E9] text-[#5B1621] transition-colors duration-300 hover:bg-[#5B1621] hover:text-white"
                      aria-label={`View ${lawyer.name}'s profile`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Role */}
                  <p className="text-xs font-semibold text-[#611422] mb-3">
                    {lawyer.role}
                  </p>

                  {/* Education */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                    <GraduationCap className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{lawyer.education}</span>
                  </div>

                  {/* Practice Areas Pill Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {lawyer.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-[#F4F4F5] text-gray-600 text-[11px] px-2.5 py-0.5 rounded-xs"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <a
                    href={`mailto:${lawyer.email}`}
                    className="text-gray-500 hover:text-[#611422] flex items-center gap-1.5 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                  <a
                    href={`tel:${lawyer.phone}`}
                    className="text-gray-500 hover:text-[#611422] flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
