import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services, contactDetails } from "../data/siteContent";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

// Services from home page - matching serviceCatalog
const homePageServices = [
  {
    title: "Open Villa Plots",
    description: "Premium open villa plots in strategic locations with RERA and DTCP approvals. Perfect for building your dream villa with world-class amenities and excellent connectivity.",
    image: "/images/building-constructions.webp",
  },
  {
    title: "Independent Houses",
    description: "Spacious independent houses with modern architecture and premium finishes. Built with quality materials and designed for comfortable family living.",
    image: "/images/building-constructions.webp",
  },
  {
    title: "Duplex Villas",
    description: "Luxury duplex villas with contemporary designs, premium interiors, and world-class amenities. Perfect for families seeking spacious and elegant living spaces.",
    image: "/images/building-constructions.webp",
  },
  {
    title: "Agricultural Land",
    description: "Agricultural land plots in prime locations with proper documentation and clear titles. Ideal for farming, investment, or future development purposes.",
    image: "/images/building-constructions.webp",
  },
  {
    title: "Construction & Interior",
    description: "Complete construction and interior design services for residential and commercial properties. From design to execution, we handle everything under one roof.",
    image: "/images/interiors.webp",
  },
  {
    title: "High-rise Apartment",
    description: "Modern high-rise apartments with premium amenities, excellent connectivity, and RERA approvals. Luxury living spaces with panoramic views and world-class facilities.",
    image: "/images/building-constructions.webp",
  },
];

const processSteps = [
  {
    title: "Discovery & Brief",
    copy: "On-site walkthroughs, requirement mapping, feasibility studies, and timeline alignment.",
  },
  {
    title: "Design Development",
    copy: "Mood boards, 3D renders, material mock-ups, and cost-value engineering workshops.",
  },
  {
    title: "Project Mobilisation",
    copy: "Final BOQs, vendor onboarding, execution scheduling, and site safety setup.",
  },
  {
    title: "Execution & QA",
    copy: "Daily site supervision, stage-wise approvals, quality audits, and client reviews.",
  },
  {
    title: "Handover & Support",
    copy: "Snag rectification, documentation, maintenance manuals, and AMC options.",
  },
];

const addOnServices = [
  "MEP design & coordination",
  "Smart home automation",
  "Landscape & facade design",
  "Acoustic & AV integration",
  "LEED and IGBC compliance consulting",
];

const Services = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      <SEO
        title="Services"
        description="Residential turnkey, commercial projects, renovation, design management, and governance—tailored to your goals."
        keywords={["services", "turnkey", "renovation", "commercial", "residential", "design management"]}
      />
      <PageHero
        title="Services & Capabilities"
        description="Complete design-build solutions covering architecture, interiors, civil contracting, and smart amenities."
        background="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="End-to-end project ownership for residential, commercial, and industrial environments."
          description="Complete design-build solutions covering architecture, interiors, civil contracting, and project management."
        />
        <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {homePageServices.map((service) => (
            <article
              key={service.title}
              className="group flex h-full flex-col rounded-2xl border border-brand/10 bg-white/80 p-5 shadow-[0_18px_40px_rgba(10,32,51,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(10,32,51,0.14)] md:rounded-3xl md:p-8"
            >
              {service.image && (
                <div className="overflow-hidden rounded-xl border border-brand/10 md:rounded-2xl">
                  <img src={service.image} alt={service.title} className="h-44 w-full object-cover transition duration-700 group-hover:scale-110 md:h-52" loading="lazy" />
                </div>
              )}
              <h3 className="mt-4 text-lg font-semibold text-brand md:mt-6 md:text-xl">{service.title}</h3>
              <p className="mt-2 flex-1 text-xs text-brand/70 md:mt-3 md:text-sm">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand/5 py-12 md:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 md:flex-row md:gap-12 md:px-6 lg:px-8">
          <div className="flex-1">
            <SectionHeading
              eyebrow="Our Process"
              title="Structured workflows ensure precision, predictability, and peace of mind."
              align="left"
            />
            <div className="mt-6 space-y-4 md:space-y-6">
              {processSteps.map((step, index) => (
                <div key={step.title} className="flex gap-3 rounded-2xl border border-brand/10 bg-white p-4 shadow-[0_20px_45px_rgba(10,32,51,0.08)] md:rounded-3xl md:gap-4 md:p-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-xs font-semibold text-brand md:h-10 md:w-10 md:text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-brand md:text-lg">{step.title}</h4>
                    <p className="mt-1.5 text-xs text-brand/70 md:mt-2 md:text-sm">{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-5 md:space-y-6">
            <SectionHeading
              eyebrow="Add-On Services"
              title="Complementary expertise under one roof."
              align="left"
            />
            <div className="rounded-2xl border border-brand/10 bg-white p-5 shadow-[0_20px_45px_rgba(10,32,51,0.08)] md:rounded-3xl md:p-6">
              <ul className="space-y-2.5 text-xs text-brand/70 md:space-y-3 md:text-sm">
                {addOnServices.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 md:gap-3">
                    <span className="h-1.5 w-5 shrink-0 rounded-full bg-brand-accent md:w-6" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand/10 bg-white p-5 shadow-[0_20px_45px_rgba(10,32,51,0.08)] md:rounded-3xl md:p-6">
              <h4 className="text-base font-semibold text-brand md:text-lg">Delivery Footprint</h4>
              <p className="mt-2 text-xs text-brand/70 md:mt-3 md:text-sm">
                Hyderabad · Bengaluru · Chennai · Vijayawada · Mumbai · Pune · Visakhapatnam · Kochi ·
                Delhi NCR
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-12 md:px-6 md:pb-24 lg:px-8">
        <SectionHeading
          eyebrow="Quality Benchmarks"
          title="Certified processes that align with international construction standards."
          description="ISO-led project documentation, structured site audits, and stringent material checks ensure every deliverable stands the test of time."
        />
        <div className="mt-8 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          <div className="rounded-2xl border border-brand/10 p-5 shadow-[0_18px_35px_rgba(10,32,51,0.08)] md:rounded-3xl md:p-6">
            <h4 className="text-base font-semibold text-brand md:text-lg">Documentation</h4>
            <p className="mt-2 text-xs text-brand/70 md:mt-3 md:text-sm">
              Detailed project charters, GFC drawings, and shared trackers for absolute transparency.
            </p>
          </div>
          <div className="rounded-2xl border border-brand/10 p-5 shadow-[0_18px_35px_rgba(10,32,51,0.08)] md:rounded-3xl md:p-6">
            <h4 className="text-base font-semibold text-brand md:text-lg">Vendor Network</h4>
            <p className="mt-2 text-xs text-brand/70 md:mt-3 md:text-sm">
              Vetted specialists for civil, MEP, carpentry, and finishing works aligned with our QA norms.
            </p>
          </div>
          <div className="rounded-2xl border border-brand/10 p-5 shadow-[0_18px_35px_rgba(10,32,51,0.08)] md:rounded-3xl md:p-6">
            <h4 className="text-base font-semibold text-brand md:text-lg">Post-Handover</h4>
            <p className="mt-2 text-xs text-brand/70 md:mt-3 md:text-sm">
              Comprehensive snagging, documentation, and AMC packages for seamless maintenance.
            </p>
          </div>
        </div>
      </section>

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

export default Services;

