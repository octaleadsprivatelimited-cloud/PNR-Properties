import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/siteContent";

// Services from home page - matching serviceCatalog
const homePageServices = [
  {
    title: "Building Constructions",
    description: "From residential to commercial projects, we construct spaces with precision, ensuring durability and style.",
    image: "/images/building-constructions.webp",
  },
  {
    title: "Architectural Design",
    description: "Our architects blend creativity with functionality to design spaces that inspire and impress.",
    image: "/images/architectural-design.webp",
  },
  {
    title: "Interiors",
    description: "Transform your interiors into stunning, functional spaces that reflect your personality and lifestyle.",
    image: "/images/interiors.webp",
  },
  {
    title: "PMC (Project Management Consultancy)",
    description: "Experience seamless project execution with our expert management services—every detail handled with care.",
    image: "/images/pmc-project-management-consultancy.jpeg",
  },
  {
    title: "Engineering & Contracting",
    description: "Our experienced engineers and contractors work collaboratively to deliver top-notch quality for every build.",
    image: "/images/engineering-contracting.jpeg",
  },
  {
    title: "Renovation & Remodeling",
    description: "Reimagine existing spaces with innovative renovation solutions, adding value and comfort to your property.",
    image: "/images/renovation-remodeling.webp",
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
    </div>
  );
};

export default Services;

