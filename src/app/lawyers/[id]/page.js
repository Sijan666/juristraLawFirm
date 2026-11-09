import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { LAWYERS } from "@/components/lawyers/lawyersData";
import { CallToAction } from "@/components/home/CallToAction";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  GraduationCap, 
  ShieldCheck, 
  Award, 
  Briefcase,
  CheckCircle2,
  Calendar
} from "lucide-react";

export async function generateStaticParams() {
  return LAWYERS.map((lawyer) => ({
    id: lawyer.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const lawyer = LAWYERS.find((l) => l.id === id);

  if (!lawyer) {
    return {
      title: "Lawyer Not Found | Juristra",
    };
  }

  return {
    title: `${lawyer.name} - ${lawyer.role} | Juristra Law Firm`,
    description: lawyer.bio,
  };
}

export default async function LawyerDetailPage({ params }) {
  const { id } = await params;
  const lawyer = LAWYERS.find((l) => l.id === id);

  if (!lawyer) {
    notFound();
  }

  return (
    <>
      <section className="bg-white py-12 lg:py-20 border-b border-gray-100">
        <Container>
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/lawyers"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#611422] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Attorneys
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Image & Quick Contact Card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-4/5 w-full bg-[#F4F4F5] rounded-sm overflow-hidden shadow-lg mb-6">
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Direct Info Card */}
              <div className="bg-[#FAF7F7] border border-gray-100 p-6 rounded-sm space-y-4">
                <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-900 border-b border-gray-200 pb-3">
                  Contact Information
                </h4>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="p-2 bg-[#F2E8E9] text-[#5B1621] rounded-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href={`mailto:${lawyer.email}`} className="hover:text-[#611422] transition-colors break-all">
                    {lawyer.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="p-2 bg-[#F2E8E9] text-[#5B1621] rounded-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href={`tel:${lawyer.phone}`} className="hover:text-[#611422] transition-colors">
                    {lawyer.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="p-2 bg-[#F2E8E9] text-[#5B1621] rounded-xs">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span>{lawyer.education}</span>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-[#5B1621] px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#471019]"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Consultation With {lawyer.name.split(" ")[0]}
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Bio & Credentials */}
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 bg-[#F2E8E9] text-[#5B1621] text-xs font-semibold uppercase tracking-wider rounded-full mb-3">
                {lawyer.experience}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111827] mb-2">
                {lawyer.name}
              </h1>
              <p className="text-lg font-medium text-[#611422] mb-6">
                {lawyer.role}
              </p>

              {/* Bio */}
              <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed mb-8">
                <p className="text-base sm:text-lg mb-4">
                  {lawyer.bio}
                </p>
                <p className="text-sm sm:text-base text-gray-500">
                  Throughout their legal tenure, {lawyer.name} has represented corporate entities, families, and individuals through critical transitions, contentious disputes, and high-value transactional negotiations with unwavering legal rigor.
                </p>
              </div>

              {/* Practice Focus Areas */}
              <div className="mb-10">
                <h3 className="text-xl font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#611422]" />
                  Core Practice Focus
                </h3>
                <div className="flex flex-wrap gap-2">
                  {lawyer.areas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-sm bg-[#FAF7F7] border border-gray-200 text-sm font-medium text-gray-800"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Distinctions & Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                <div className="p-4 bg-gray-50 rounded-sm">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-1">
                    <Award className="w-4 h-4 text-[#611422]" />
                    Trial & Negotiation Mastery
                  </div>
                  <p className="text-xs text-gray-600">
                    Proven track record in high-stakes resolution and advisory.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-sm">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#611422]" />
                    Client-First Fiduciary Duty
                  </div>
                  <p className="text-xs text-gray-600">
                    Transparent rates, constant accessibility, and clear counsel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
