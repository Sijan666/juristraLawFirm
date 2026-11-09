import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  FileCheck2,
  Gavel,
  House,
  UsersRound,
  Scale,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { CallToAction } from "@/components/home/CallToAction";

const SERVICES = [
  {
    id: "corporate-business",
    number: "01",
    title: "Corporate & Business Law",
    description:
      "Strategic counsel for businesses, mergers, contracts, and compliance—so you can make important decisions with clarity.",
    icon: BriefcaseBusiness,
  },
  {
    id: "family",
    number: "02",
    title: "Family Law",
    description:
      "Thoughtful legal support for divorce, custody, and guardianship matters, with care for the people behind every case.",
    icon: UsersRound,
  },
  {
    id: "real-estate",
    number: "03",
    title: "Real Estate Law",
    description:
      "Guidance through property transactions, real estate disputes, and zoning matters at every step.",
    icon: House,
  },
  {
    id: "employment",
    number: "04",
    title: "Employment Law",
    description:
      "Practical support with workplace rights, employment agreements, and disputes for employers and employees.",
    icon: UsersRound,
  },
  {
    id: "civil-litigation",
    number: "05",
    title: "Civil Litigation",
    description:
      "Clear advice and representation for civil disputes, litigation, and court proceedings.",
    icon: Gavel,
  },
  {
    id: "contract-review",
    number: "06",
    title: "Contract Review & Drafting",
    description:
      "Careful drafting, review, and negotiation of contracts and agreements to help protect your interests.",
    icon: FileCheck2,
  },
];

export const metadata = {
  title: "Legal Services",
  description:
    "Explore Juristra's legal services, from business and family law to real estate, employment, litigation, and contract support.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#611422]/10 bg-[#FAF7F7] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" duration={750}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F2E8E9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#5B1621]">
                  <Scale className="h-4 w-4" aria-hidden="true" />
                  Legal services
                </div>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#111827] sm:text-5xl lg:text-[60px]">
                  The right guidance
                  <br className="hidden sm:block" /> for what comes{" "}
                  <span className="font-serif font-bold italic text-[#611422]">
                    next.
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                  Every legal matter is personal. Find focused support for your
                  situation, with clear advice and practical next steps from
                  the Juristra team.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-sm bg-[#5B1621] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#471019]"
                  >
                    Talk to our team
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/lawyers"
                    className="inline-flex items-center rounded-sm border border-[#611422]/20 px-6 py-3.5 text-sm font-medium text-[#5B1621] transition-colors hover:bg-white"
                  >
                    Meet our lawyers
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal
              direction="left"
              duration={800}
              className="lg:col-span-5"
            >
              <div className="relative overflow-hidden rounded-sm bg-[#5B1621] p-8 text-white sm:p-10">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-14 h-48 w-48 rounded-full border border-white/10"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-5 -top-7 h-32 w-32 rounded-full border border-white/10"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-100/75">
                  A clear path forward
                </p>
                <h2 className="mt-5 max-w-sm font-serif text-3xl font-bold italic leading-tight sm:text-4xl">
                  Legal support, centered on you.
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-rose-100/80 sm:text-base">
                  Tell us what you’re facing. We’ll help you understand your
                  options and connect with the right legal support.
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-5 text-sm text-rose-100/90">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <Scale className="h-4 w-4" aria-hidden="true" />
                  </span>
                  Thoughtful counsel at every step
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <ScrollReveal direction="up" duration={700}>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A4A54]">
                How we can help
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
                Legal services for
                <span className="font-serif font-bold italic text-[#611422]">
                  {" "}
                  real-life needs.
                </span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                Explore our areas of practice and get in touch to discuss the
                right next step for your matter.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;

              return (
                <ScrollReveal
                  key={service.id}
                  direction="up"
                  delay={index * 70}
                  duration={700}
                  distance={24}
                  className="h-full"
                >
                  <article
                    id={service.id}
                    className="group flex h-full scroll-mt-28 flex-col rounded-sm border border-[#611422]/10 bg-[#FAF7F7] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#611422]/20 hover:shadow-lg hover:shadow-[#611422]/5 sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#F2E8E9] text-[#611422] transition-colors group-hover:bg-[#5B1621] group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-serif text-2xl font-bold italic text-[#611422]/30">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="mt-7 text-xl font-semibold leading-snug text-[#611422] sm:text-[22px]">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-7 inline-flex items-center gap-2 border-t border-[#611422]/10 pt-5 text-xs font-semibold uppercase tracking-wider text-[#611422] transition-colors hover:text-[#471019]"
                    >
                      Discuss this service
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
