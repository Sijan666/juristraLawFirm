import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Juristra Law Firm",
  description: "Learn how Juristra protects your confidentiality and personal legal information.",
};

export default function PrivacyPolicyPage() {
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
          <Shield className="w-3.5 h-3.5" />
          Legal Privacy & Privilege Notice
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] mb-6 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: November 2026</p>

        <div className="space-y-8 text-gray-600 leading-relaxed text-base sm:text-lg">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Attorney-Client Privilege & Information Collection
            </h2>
            <p>
              At Juristra, confidentiality is the cornerstone of our practice. Any information provided through our website intake forms, consultation requests, emails, or phone consultations is treated with the highest degree of fiduciary care and attorney-client discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              Information gathered is solely utilized to assess legal representation, coordinate consultations, comply with regulatory bar standards, and communicate case developments directly with you. We do not sell, rent, or lease client data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. Data Security & Storage
            </h2>
            <p>
              We implement industry-grade encryption, secure socket layers (SSL), and restricted access protocols for digital client files to ensure your private matters remain protected from unauthorized disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Contacting Our Data Counsel
            </h2>
            <p>
              If you have any questions regarding our confidentiality practices or wish to review information stored in relation to your case file, please contact us at{" "}
              <a href="mailto:privacy@juristra.com" className="text-[#611422] underline font-medium">
                privacy@juristra.com
              </a>.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
