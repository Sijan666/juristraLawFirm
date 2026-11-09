"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full bg-[#420D15] text-white">
      <Container className="pt-16 pb-12 lg:pt-20 lg:pb-14">
        {/* Main Footer Content */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-14 xl:gap-20">
          {/* =========================================================
              LEFT: Newsletter Signup
             ========================================================= */}
          <div className="w-full lg:max-w-xs xl:max-w-sm">
            <h3 className="text-2xl font-semibold tracking-tight text-white lg:text-[26px]">
              Stay Legally{" "}
              <span className="font-serif font-bold italic text-white">
                Informed
              </span>
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-rose-100/75">
              Join our newsletter for monthly legal insights, precedents, and firm updates.
            </p>

            {/* Newsletter Input Form */}
            <form onSubmit={handleSubscribe} className="mt-6">
              <div className="relative flex w-full items-center rounded-sm bg-white p-1 shadow-sm">
                <input
                  type="email"
                  aria-label="Email address for newsletter subscription"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type your email"
                  required
                  className="w-full flex-1 bg-transparent px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-sm bg-[#5B1621] px-5 py-2.5 text-xs font-semibold text-white shadow transition-all duration-200 hover:bg-[#48111A] active:scale-95 cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 text-xs text-emerald-300">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>

          {/* =========================================================
              RIGHT: Navigation Columns
             ========================================================= */}
          <div className="flex flex-1 flex-wrap justify-between gap-8 sm:gap-10 lg:gap-8 xl:gap-12">
            {/* Contact Info */}
            <div className="min-w-42.5 max-w-55">
              <h4 className="text-base font-semibold text-white">Chambers</h4>
              <ul className="mt-4 space-y-3.5 text-sm text-rose-100/75">
                <li className="leading-relaxed">
                  124 Legal Avenue, Financial District, Suite 800, New York, NY 10005
                </li>
                <li>
                  <a
                    href="tel:15552345678"
                    className="transition-colors hover:text-white"
                  >
                    +1 (555) 234-5678
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:consult@juristra.com"
                    className="transition-colors hover:text-white"
                  >
                    consult@juristra.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Firm Links */}
            <div>
              <h4 className="text-base font-semibold text-white">Firm</h4>
              <ul className="mt-4 space-y-3 text-sm text-rose-100/75">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lawyers"
                    className="transition-colors hover:text-white"
                  >
                    Attorneys
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#our-values"
                    className="transition-colors hover:text-white"
                  >
                    Our Values
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-white"
                  >
                    Schedule Consultation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Practice & Resources */}
            <div>
              <h4 className="text-base font-semibold text-white">Direct Access</h4>
              <ul className="mt-4 space-y-3 text-sm text-rose-100/75">
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-white"
                  >
                    Case Evaluation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact#faq"
                    className="transition-colors hover:text-white"
                  >
                    Consultation FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lawyers"
                    className="transition-colors hover:text-white"
                  >
                    Practice Directory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-white"
                  >
                    Firm Milestones
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-base font-semibold text-white">Legal</h4>
              <ul className="mt-4 space-y-3 text-sm text-rose-100/75">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="whitespace-nowrap transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="whitespace-nowrap transition-colors hover:text-white"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="whitespace-nowrap transition-colors hover:text-white"
                  >
                    Disclaimers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR: Copyright & Social Links
           ========================================================= */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-rose-100/60 sm:text-sm">
            &copy;2026 Juristra Law Firm. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-7 w-7 items-center justify-center rounded-sm bg-white text-[#420D15] shadow transition-all duration-200 hover:bg-rose-100 hover:scale-105"
            >
              <span className="text-xs font-bold font-sans">in</span>
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="flex h-7 w-7 items-center justify-center rounded-sm bg-white text-[#420D15] shadow transition-all duration-200 hover:bg-rose-100 hover:scale-105"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-7 w-7 items-center justify-center rounded-sm bg-white text-[#420D15] shadow transition-all duration-200 hover:bg-rose-100 hover:scale-105"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-7 w-7 items-center justify-center rounded-sm bg-white text-[#420D15] shadow transition-all duration-200 hover:bg-rose-100 hover:scale-105"
            >
              <span className="text-xs font-bold font-serif leading-none">f</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
