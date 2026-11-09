"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/constants/site";

export const Header = ({ className = "" }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`${className} sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-all`}
    >
      <Container className="flex h-20 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* Juristra Starburst Asterisk Icon */}
          <span className="relative flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7 text-[#611422] transition-transform duration-300 group-hover:rotate-45"
              aria-hidden="true"
            >
              <rect x="10.8" y="1.5" width="2.4" height="21" rx="1.2" />
              <rect x="1.5" y="10.8" width="21" height="2.4" rx="1.2" />
              <rect
                x="10.8"
                y="1.5"
                width="2.4"
                height="21"
                rx="1.2"
                transform="rotate(45 12 12)"
              />
              <rect
                x="10.8"
                y="1.5"
                width="2.4"
                height="21"
                rx="1.2"
                transform="rotate(-45 12 12)"
              />
            </svg>
          </span>

          <span className="font-serif text-2xl font-bold tracking-tight text-[#1f1a1b]">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {siteConfig.navLinks.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[16px] transition-colors duration-200 ${
                  isActive
                    ? "font-semibold text-[#611422]"
                    : "font-medium text-gray-700 hover:text-[#611422]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-sm bg-[#5B1621] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#471019] active:scale-[0.98]"
          >
            Explore Our Services
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#611422] hover:bg-gray-100 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-100 bg-white px-4 pt-2 pb-6 shadow-lg">
          <div className="flex flex-col space-y-3">
            {siteConfig.navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-md text-base transition-colors ${
                    isActive
                      ? "font-semibold text-[#611422] bg-red-50/50"
                      : "font-medium text-gray-700 hover:text-[#611422] hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center rounded-sm bg-[#5B1621] px-5 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#471019]"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
