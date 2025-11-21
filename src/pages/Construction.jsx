import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import StatsStrip from "../components/StatsStrip";
import ProjectShowcase from "../components/ProjectShowcase";
import { services, brandPartners, roadmap, contactDetails } from "../data/siteContent";
import useInViewAnimation from "../hooks/useInViewAnimation";

const constructionServiceTitles = ["Architectural Design", "Residential Construction"];

const constructionServices = services.filter((service) =>
  constructionServiceTitles.includes(service.title),
);

const constructionProcess = [
  {
    title: "Planning & Approvals",
    copy: "Concept design, feasibility, cost estimation, and regulatory approvals handled with structural coordination.",
  },
  {
    title: "Engineering & Procurement",
    copy: "Detailed drawings, BOQs, vendor onboarding, and material logistics managed with transparency.",
  },
  {
    title: "Site Execution & QA",
    copy: "Dedicated project managers supervise civil, MEP, and finishing works with milestone-based quality audits.",
  },
  {
    title: "Handover & Aftercare",
    copy: "Snag rectification, documentation, and maintenance support ensure a seamless handover experience.",
  },
];

const backgroundImage = "/images/construction-hero-background.avif";

const Construction = () => {
  useInViewAnimation();

  return (
    <div className="bg-white text-brand">
      <SEO
        title="Construction"
        description="Design-to-build construction for homes, offices, and hospitality—governed by QA, timelines, and transparent dashboards."
        keywords={["construction", "design-build", "governance", "QA", "residential", "commercial", "hospitality"]}
        image="/images/hero-whatsapp.jpg"
      />
      <div className="space-y-24 pb-24">
        <PageHero
          title="Architecture & Construction"
          description="Turnkey villa, bungalow, and commercial builds backed by robust engineering, premium materials, and disciplined project management."
          background={backgroundImage}
        />

      <section className="fade-up mx-auto w-full max-w-6xl px-6 md:px-8 text-brand">
        <div className="rounded-3xl bg-white px-6 py-12 md:px-10">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Construction Expertise"
              title="Structurally sound, design-led, and future-ready builds."
              description="PNR Properties offers premium real estate developments with architectural excellence, quality construction, and world-class amenities across India."
              align="left"
            />

            <div className="grid gap-6 md:grid-cols-2">
              {constructionServices.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl bg-[#f8fafc] p-6 transition duration-500 hover:-translate-y-2"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand/5 blur-2xl transition duration-500 group-hover:bg-brand/10" />
                  <div className="relative space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-brand">{service.title}</h3>
                      <p className="text-sm text-brand/70">{service.description}</p>
                    </div>
                    {service.highlights && (
                      <ul className="space-y-2 text-xs text-brand/65">
                        {service.highlights.slice(0, 3).map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 inline-flex h-1 w-5 rounded-full bg-brand" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fade-up bg-white py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:flex-row md:px-8">
          <div className="flex-1 space-y-6">
            <SectionHeading
              eyebrow="Delivery Framework"
              title="Structured stages that keep every build on track."
              align="left"
            />
            <div className="space-y-6">
              {constructionProcess.map((step, index) => (
                <article
                  key={step.title}
                  className="group relative overflow-hidden rounded-3xl bg-[#f8fafc] p-6 text-brand"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl transition duration-500 group-hover:bg-white/20" />
                  <div className="relative space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand/60">
                      Phase 0{index + 1}
                    </p>
                    <h3 className="text-lg font-semibold text-brand">{step.title}</h3>
                    <p className="text-sm text-brand/70">{step.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <SectionHeading
              eyebrow="Legacy & Growth"
              title="Milestones that shape PNR Properties."
              align="left"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {roadmap.map((milestone) => (
                <article
                  key={milestone.year}
                  className="group relative overflow-hidden rounded-3xl border border-brand/10 bg-white p-6 text-brand shadow-[0_24px_55px_rgba(15,23,42,0.12)]"
                >
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-white/10 blur-2xl transition duration-500 group-hover:bg-white/20" />
                  <div className="relative space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand/60">
                      {milestone.year}
                    </p>
                    <h4 className="text-sm font-semibold text-brand">{milestone.title}</h4>
                    <p className="text-sm text-brand/70">{milestone.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fade-up mx-auto w-full max-w-6xl rounded-3xl bg-white px-6 py-12 text-brand md:px-10">
        <SectionHeading
          eyebrow="Why PNR"
          title="Measured performance across every project."
          description="Metrics that underline our commitment to timeline adherence, quality control, and collaborative project delivery."
          tone="light"
        />
        <StatsStrip />
      </section>

      <section className="fade-up bg-white py-20">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="space-y-4 text-brand">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-brand/60">
              Recent Construction
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-brand md:text-4xl">
              Engineered spaces designed for scale.
            </h2>
            <p className="max-w-3xl text-sm text-brand/70 md:text-base">
              Highlights from our residential and commercial portfolio spanning villas, corporate offices, and retail experiences.
            </p>
          </div>
          <div className="mt-8 rounded-3xl bg-[#f8fafc] p-4">
            <ProjectShowcase />
          </div>
        </div>
      </section>

      <section className="fade-up mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="rounded-3xl bg-white px-6 py-12 text-brand md:px-10">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Trusted Partners"
              title="Premium material and technology alliances."
              tone="light"
            />
            <div className="flex flex-wrap items-center justify-center gap-3">
              {brandPartners.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-brand/15 bg-brand/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand/70"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fade-up bg-white text-brand">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">
            Start Your Project
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Partner with PNR Properties for your next real estate investment or property requirement.
          </h2>
          <p className="max-w-2xl text-base text-brand/70">
            Share your brief and we’ll align a project manager to scope, schedule, and mobilise your
            build.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${contactDetails.email}`}
              className="rounded-full border border-brand px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand transition hover:bg-brand hover:text-white"
            >
              Mail Our Team
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-brand px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand transition hover:bg-brand hover:text-white"
            >
              Book A Consultation
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Construction;

