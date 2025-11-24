import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ProjectShowcase from "../components/ProjectShowcase";
import TestimonialSlider from "../components/TestimonialSlider";
import { services, materialExpertise, brandPartners, contactDetails } from "../data/siteContent";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import useInViewAnimation from "../hooks/useInViewAnimation";

const interiorServiceTitles = [
  "Residential Interiors",
  "Commercial Interiors",
  "Renovation & Remodeling",
  "Home Automation",
];

const interiorServices = services.filter((service) =>
  interiorServiceTitles.includes(service.title),
);

const interiorProcess = [
  {
    title: "Consultation & Mood Boarding",
    copy: "We understand your lifestyle, brand, and vastu preferences before translating them into concepts, layouts, and curated mood boards.",
  },
  {
    title: "Design Detailing & 3D Visualization",
    copy: "High-fidelity renders, material palettes, and lighting plans are crafted so you can visualize every space before execution.",
  },
  {
    title: "Production & Site Execution",
    copy: "Modular manufacturing, on-site fabrication, and expert finishing teams deliver premium craftsmanship with milestone-based updates.",
  },
  {
    title: "Styling & Handover",
    copy: "Furniture, soft furnishings, decor, and smart automation are layered in, followed by detailed snag checks prior to handover.",
  },
];

const interiorHighlights = [
  "Modular kitchens with premium hardware and quartz countertops",
  "Bespoke wardrobes, soft furnishings, and lighting design",
  "Turnkey execution for bedrooms, living spaces, and puja rooms",
  "Smart home automation covering lighting, climate, and security",
];

const backgroundImage = "/images/interior-hero-background.avif";

const Interior = () => {
  useInViewAnimation();

  return (
    <div className="bg-white text-brand">
      <SEO
        title="Interior Design"
        description="End-to-end interior design and execution—material curation, bespoke joinery, lighting, and styling."
        keywords={["interior design", "joinery", "lighting", "styling", "residential interiors", "commercial interiors"]}
        image="/images/hero-whatsapp.jpg"
      />
      <div className="space-y-24 pb-24">
        <PageHero
          title="Interior Design & Styling"
          description="Turnkey interior solutions for residential and commercial environments with world-class design, modular production, and on-site craftsmanship."
          background={backgroundImage}
        />

      <section className="fade-up mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-white px-6 py-12 md:px-10">
          <div className="relative space-y-8">
            <SectionHeading
              eyebrow="Interior Expertise"
              title="Spaces that balance aesthetics, functionality, and longevity."
              description="From high-impact living rooms and bedrooms to experience-driven offices and retail fit-outs, our interior team manages design, production, and execution under one roof."
              align="left"
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {interiorServices.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="group relative flex h-full flex-col justify-between rounded-3xl bg-[#f8fafc] p-6 transition duration-500 hover:-translate-y-2"
                  >
                    <div className="space-y-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand/15 bg-brand/5 text-brand shadow-[0_12px_25px_rgba(10,32,51,0.18)]">
                        {Icon && <Icon className="text-xl" />}
                      </span>
                      <div className="space-y-2 text-[#0d1b2a]">
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                        <p className="text-sm text-[#546173]">{service.description}</p>
                      </div>
                      {service.highlights && (
                        <ul className="space-y-2 text-xs text-[#5b6b7d]">
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
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="fade-up bg-brand/5 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:flex-row md:px-8">
          <div className="flex-1 space-y-6">
            <SectionHeading
              eyebrow="Our Process"
              title="A streamlined workflow from concept to styling."
              align="left"
            />
            <div className="space-y-6">
              {interiorProcess.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-brand/10 bg-white p-6 shadow-[0_20px_45px_rgba(16,26,43,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-accent">
                    Step 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-brand">{step.title}</h3>
                  <p className="mt-3 text-sm text-brand/70">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <SectionHeading
              eyebrow="What Sets Us Apart"
              title="Comprehensive, detail-led interior execution."
              align="left"
            />
            <div className="rounded-3xl border border-brand/10 bg-white p-6 text-brand shadow-[0_24px_55px_rgba(15,23,42,0.12)]">
              <ul className="space-y-3 text-sm text-brand/75">
                {interiorHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-6 rounded-full bg-brand" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/12 bg-white/10 p-6 text-white shadow-[0_24px_55px_rgba(10,32,51,0.35)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0d2a4a]/70">
                Material & Craft
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#0d2a4a]">Specialized workmanship</h3>
              <div className="space-y-4">
                {materialExpertise.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white text-[#0d2a4a] shadow-[0_12px_25px_rgba(10,32,51,0.35)]">
                        <Icon className="text-xl" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0d2a4a]">{item.title}</p>
                        <p className="text-sm text-[#5c6f82]">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fade-up mx-auto w-full max-w-6xl rounded-3xl bg-white px-6 py-12 text-brand md:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-brand/60">
              Signature Interiors
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-brand md:text-4xl">
              Immersive spaces designed for delight.
            </h2>
            <p className="max-w-3xl text-sm text-brand/70 md:text-base">
              Tour a selection of residential and commercial interiors executed by our in-house teams across Delhi NCR and beyond.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand/60">
            <span className="rounded-full border border-brand/15 bg-brand/5 px-4 py-2">
              Residential
            </span>
            <span className="rounded-full border border-brand/15 bg-brand/5 px-4 py-2">
              Commercial
            </span>
            <span className="rounded-full border border-brand/15 bg-brand/5 px-4 py-2">
              Retail
            </span>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-[#f8fafc] p-4">
          <ProjectShowcase />
        </div>
      </section>

      <section className="fade-up bg-white py-20 text-brand">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Partner Ecosystem"
            title="Branded material partners for quality assurance."
            tone="light"
          />
          <div className="flex flex-wrap items-center justify-center gap-3">
            {brandPartners.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-brand/10 bg-brand/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand/70"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="fade-up mx-auto w-full max-w-6xl rounded-3xl bg-white px-6 py-12 text-brand md:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices from our clients and partners."
          description="Long-term relationships built on design sensitivity, execution discipline, and transparent communication."
          tone="light"
        />
        <TestimonialSlider />
      </section>

      <section className="fade-up bg-white text-brand">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">
            Ready To Transform Your Space?
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Book a consultation with the PNR Properties team.
          </h2>
          <p className="max-w-2xl text-base text-brand/70">
            Share your project brief and we’ll schedule a walkthrough, concept presentation, and
            detailed estimate tailored to your goals.
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

      {/* Connect With Us Section */}
      <section className="fade-up mx-auto w-full max-w-6xl px-4 py-12 text-brand md:px-6 md:py-16 lg:px-10">
        <div className="rounded-3xl bg-gradient-to-br from-brand-accent/10 via-white to-brand/10 p-8 border-2 border-brand-accent/20 shadow-[0_20px_60px_rgba(6,167,215,0.15)] md:p-12">
          <div className="mx-auto max-w-3xl text-center space-y-6 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-brand md:text-3xl lg:text-4xl">
                Connect With Us For Best Properties
              </h2>
              <p className="text-sm text-brand/70 md:text-base max-w-2xl mx-auto">
                Get in touch with our expert team to explore premium RERA-approved properties, schedule site visits, and find your dream home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href={`tel:${contactDetails.phonePrimary.replace(/\s+/g, "")}`}
                className="group flex items-center gap-3 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-accent/90 hover:shadow-[0_10px_30px_rgba(6,167,215,0.3)] md:px-8 md:py-3.5 md:text-base"
              >
                <FaPhoneAlt className="text-base" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${contactDetails.phonePrimary.replace(/\s+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#25D366]/90 hover:shadow-[0_10px_30px_rgba(37,211,102,0.3)] md:px-8 md:py-3.5 md:text-base"
              >
                <FaWhatsapp className="text-base" />
                WhatsApp
              </a>
              <Link
                to="/contact"
                className="group flex items-center gap-3 rounded-full bg-white border-2 border-brand-accent px-6 py-3 text-sm font-semibold text-brand-accent transition-all duration-300 hover:bg-brand-accent hover:text-white hover:shadow-[0_10px_30px_rgba(6,167,215,0.2)] md:px-8 md:py-3.5 md:text-base"
              >
                <FaEnvelope className="text-base" />
                Contact Form
              </Link>
            </div>

            <div className="pt-4 border-t border-brand-accent/20">
              <p className="text-xs text-brand/60 md:text-sm">
                <strong className="text-brand">Phone:</strong>{" "}
                <a href={`tel:${contactDetails.phonePrimary}`} className="text-brand-accent hover:underline">
                  {contactDetails.phonePrimary}
                </a>
                {" | "}
                <strong className="text-brand">Email:</strong>{" "}
                <a href={`mailto:${contactDetails.email}`} className="text-brand-accent hover:underline">
                  {contactDetails.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interior;

