"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
} from "lucide-react";

const PRACTICE_AREAS = [
  "Corporate Law & M&A",
  "Commercial Litigation",
  "Family & Domestic Law",
  "Employment & Labor",
  "Real Estate & Land Use",
  "Tax & Financial Advisory",
  "General Legal Guidance",
];

export const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practiceArea: PRACTICE_AREAS[0],
    preferredTime: "Morning",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ScrollReveal direction="right" duration={800}>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111827] mb-4">
                Our Head Office & <br />
                <span className="font-serif font-bold italic text-[#611422]">
                  Direct Channels
                </span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                Visit our chambers or reach out directly to schedule a confidential discussion with one of our specialized partners.
              </p>

              {/* Info Cards */}
              <div className="space-y-4 mb-8">
                <ScrollReveal direction="up" delay={100} duration={600}>
                  <div className="flex items-start gap-4 p-4 rounded-sm bg-[#FAF7F7] border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className="p-3 bg-[#F2E8E9] text-[#5B1621] rounded-sm shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">
                        Main Chambers Address
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                        124 Legal Avenue, Financial District, Suite 800 <br />
                        New York, NY 10005
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={200} duration={600}>
                  <div className="flex items-start gap-4 p-4 rounded-sm bg-[#FAF7F7] border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className="p-3 bg-[#F2E8E9] text-[#5B1621] rounded-sm shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">
                        Phone & Inquiries
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                        Direct: +1 (555) 234-5678 <br />
                        Toll Free: 1-800-JURISTRA
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={300} duration={600}>
                  <div className="flex items-start gap-4 p-4 rounded-sm bg-[#FAF7F7] border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className="p-3 bg-[#F2E8E9] text-[#5B1621] rounded-sm shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">
                        Email Consultations
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                        consult@juristra.com <br />
                        case-review@juristra.com
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={400} duration={600}>
                  <div className="flex items-start gap-4 p-4 rounded-sm bg-[#FAF7F7] border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className="p-3 bg-[#F2E8E9] text-[#5B1621] rounded-sm shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">
                        Chambers Hours
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                        Monday – Friday: 8:00 AM – 7:00 PM EST <br />
                        Saturday: By Confidential Appointment
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Reassurance note */}
              <ScrollReveal direction="up" delay={500} duration={600}>
                <div className="p-4 rounded-sm bg-[#F2E8E9]/50 border border-[#F2E8E9] text-xs text-[#5B1621] flex items-center gap-3">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span>
                    Under attorney-client privilege regulations, all messages submitted through this portal are held strictly confidential.
                  </span>
                </div>
              </ScrollReveal>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: Interactive Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" duration={850}>
              <div className="bg-[#FAF7F7] border border-gray-100 rounded-sm p-6 sm:p-10 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  Request a Case Evaluation
                </h3>
                <p className="text-sm text-gray-500 mb-8">
                  Please complete the form below. An intake attorney will review your details and contact you within 24 hours.
                </p>

                {submitted ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="py-12 px-6 text-center bg-white rounded-sm border border-gray-200 animate-fadeIn"
                  >
                    <div className="w-14 h-14 bg-[#F2E8E9] text-[#5B1621] rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">
                      Consultation Request Received
                    </h4>
                    <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                      Thank you, <span className="font-semibold">{formData.name}</span>. Your case briefing has been dispatched securely to our lead counsel. We will contact you at <span className="font-semibold">{formData.email}</span> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          practiceArea: PRACTICE_AREAS[0],
                          preferredTime: "Morning",
                          message: "",
                        });
                      }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#5B1621] text-white text-sm font-medium rounded-sm hover:bg-[#471019] transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="e.g. Eleanor Vance"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-[#5B1621] focus:ring-1 focus:ring-[#5B1621] transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="e.g. eleanor@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-[#5B1621] focus:ring-1 focus:ring-[#5B1621] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          placeholder="e.g. +1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-[#5B1621] focus:ring-1 focus:ring-[#5B1621] transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="preferred-time" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                          Preferred Call Window
                        </label>
                        <select
                          id="preferred-time"
                          value={formData.preferredTime}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              preferredTime: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-[#5B1621] focus:ring-1 focus:ring-[#5B1621] transition-all"
                        >
                          <option value="Morning">Morning (9:00 AM - 12:00 PM)</option>
                          <option value="Afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                          <option value="Evening">Evening (4:00 PM - 7:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="practice-area" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                        Legal Subject / Practice Focus *
                      </label>
                      <select
                        id="practice-area"
                        value={formData.practiceArea}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            practiceArea: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-[#5B1621] focus:ring-1 focus:ring-[#5B1621] transition-all"
                      >
                        {PRACTICE_AREAS.map((area, i) => (
                          <option key={i} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="case-summary" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                        Brief Case Summary *
                      </label>
                      <textarea
                        id="case-summary"
                        required
                        rows={4}
                        placeholder="Please summarize your legal inquiry, key dates, or parties involved..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-[#5B1621] focus:ring-1 focus:ring-[#5B1621] transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#5B1621] px-8 py-4 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#471019] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                    >
                      {loading ? (
                        <span>Submitting Case Information...</span>
                      ) : (
                        <>
                          <span>Submit Confidential Case Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
