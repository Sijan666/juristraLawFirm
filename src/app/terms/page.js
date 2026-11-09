import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Juristra Law Firm",
  description: "Terms of service and legal disclaimer regarding Juristra's website usage and legal representation.",
};

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <Container className="max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#611422] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2E8E9] text-[#5B1621] text-xs font-semibold uppercase tracking-wider w-fit mb-6">
          <Scale className="w-3.5 h-3.5" />
          Terms of Engagement & Disclaimer
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] mb-6 tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: November 2026</p>

        <div className="space-y-8 text-gray-600 leading-relaxed text-base sm:text-lg">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. No Attorney-Client Relationship Formed by Website Use
            </h2>
            <p>
              Visiting this website or submitting an inquiry via our contact form does not create an attorney-client relationship. A formal attorney-client relationship is only established upon execution of a written Engagement Letter countersigned by a Juristra partner.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Informational Purposes Only
            </h2>
            <p>
              The articles, guides, case studies, and informational materials on this site are intended for general educational purposes and do not constitute specific legal advice. You should consult a licensed attorney regarding individual legal inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. Jurisdiction & Governing Law
            </h2>
            <p>
              Our attorneys are licensed to practice law in their respective jurisdictions as noted on individual profile pages. These terms are governed under state and federal law without regard to conflicts of law provisions.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
