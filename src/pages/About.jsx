import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import StatsStrip from "../components/StatsStrip";
import { ethos } from "../data/siteContent";
import useInViewAnimation from "../hooks/useInViewAnimation";

const values = [
  {
    title: "Integrity & Transparency",
    copy: "Milestone-based billing, shared Gantt charts, and a dedicated client portal keep every stakeholder informed.",
  },
  {
    title: "Innovation in Delivery",
    copy: "We tap into emerging materials, modular systems, and automation tools to compress project timelines.",
  },
  {
    title: "Safety First",
    copy: "Site safety audits, PPE protocols, and vendor onboarding ensure best-in-class EHS standards.",
  },
  {
    title: "Sustainable Choices",
    copy: "Low-VOC paints, FSC-certified timber, and energy-efficient lighting packages aligned with green goals.",
  },
];

const About = () => {
  useInViewAnimation();

  return (
    <div className="min-h-screen bg-white text-brand">
      <SEO
        title="About Us"
        description="Learn about PNR Properties—our values, team, and mission to deliver premium real estate properties and exceptional living spaces."
        keywords={["about", "real estate", "properties", "RERA approved", "values", "team", "mission"]}
        image="/images/hero-whatsapp.jpg"
      />
      <div className="space-y-12 pb-12 md:space-y-24 md:pb-24">
      <PageHero
        title="About PNR Properties"
        description="Delivering premium real estate properties and developments. We create exceptional residential and commercial spaces with world-class amenities."
        background="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Founder Section - Moved to top */}
      <section className="fade-up mx-auto w-full max-w-6xl px-4 py-8 text-brand md:px-6 md:py-12 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="overflow-hidden rounded-[24px] shadow-[0_30px_70px_rgba(15,23,42,0.15)] md:rounded-[32px]">
            <img
              src="/images/founder-nagaraju.jpeg"
              alt="PULUKARAM NAGARAJU - Founder of PNR Properties"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-5 md:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-xs md:tracking-[0.38em]">
              Founder
            </div>
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl">
              PULUKARAM NAGARAJU
            </h2>
            <p className="text-sm font-medium text-brand md:text-base">
              Founder & Visionary Leader
            </p>
            <p className="text-xs text-brand/70 md:text-sm lg:text-base">
              <strong>PULUKARAM NAGARAJU</strong> is the visionary founder of PNR Properties, established in 2013 with a mission to transform the real estate landscape in Telangana. With over 12 years of experience in real estate development, he has led PNR Properties to become a trusted name in premium residential and commercial property development.
            </p>
            <p className="text-xs text-brand/70 md:text-sm lg:text-base">
              Under his leadership, PNR Properties has successfully developed numerous RERA-approved projects spanning over 2000 acres, including premium integrated townships, luxury apartments, villas, and commercial complexes. His commitment to quality construction, strategic locations, and customer satisfaction has earned PNR Properties a reputation for excellence in the real estate industry.
            </p>
            <p className="text-xs text-brand/70 md:text-sm lg:text-base">
              <strong>PULUKARAM NAGARAJU</strong>'s vision focuses on creating exceptional living experiences through world-class amenities, DTCP, HMDA, and RERA-approved projects that offer lifetime value to customers. His dedication to transparency, legal compliance, and innovative development has positioned PNR Properties as a leading real estate developer in Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - Redesigned without image */}
      <section className="fade-up mx-auto w-full max-w-6xl px-4 py-8 text-brand md:px-6 md:py-12 lg:px-10">
        <div className="rounded-3xl bg-gradient-to-br from-brand/5 via-white to-brand/5 p-8 md:p-12 lg:p-16">
          <div className="mx-auto max-w-4xl space-y-6 md:space-y-8">
            <div className="space-y-4 text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-brand/70 md:text-[11px] md:tracking-[0.38em]">
                Our Story
              </p>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                A trusted real estate developer rooted in quality construction, strategic locations, and customer satisfaction.
              </h2>
            </div>

            <div className="space-y-4 text-center text-xs leading-relaxed text-brand/70 md:text-sm lg:text-base">
              <p>
                Established in 2013, PNR Properties has evolved into a trusted real estate developer, delivering premium residential and commercial properties across India. We specialize in developing JB's branded properties including integrated townships, luxury villas, apartments, and commercial complexes with DTCP, HMDA, and RERA approvals.
              </p>
              <p>
                Our portfolio includes premium developments like JB's Nature Valley, JB's Serene City, JB's Pristine City, JB Serene County, JB's Pride, JB's Harmony Woods, and other world-class projects spanning over 700 acres. With a focus on quality construction, prime locations, and world-class amenities including free clubhouse memberships, we have successfully delivered numerous RERA-approved real estate projects across Telangana.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-4 md:gap-4">
              {["RERA Approved", "DTCP & HMDA", "Premium Amenities", "Strategic Locations"].map((token) => (
                <span key={token} className="rounded-full border border-brand/20 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand/70 shadow-sm md:px-5 md:py-2.5 md:text-[11px]">
                  {token}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-brand/10 bg-white/80 p-6 text-center backdrop-blur-sm md:mt-10 md:rounded-3xl md:p-8">
              <strong className="block text-base font-semibold text-brand md:text-lg">Our Mission</strong>
              <p className="mt-2 text-xs leading-relaxed text-brand/75 md:text-sm">
                To develop premium RERA approved real estate properties that elevate living experiences. We create integrated townships and residential complexes with world-class amenities, strategic locations, and lifetime value for our customers across Telangana.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* Gallery */}
      <section className="fade-up mx-auto mt-12 w-full max-w-6xl rounded-2xl bg-white px-4 py-8 text-brand md:mt-16 md:rounded-3xl md:px-6 md:py-12 lg:px-12">
        <SectionHeading
          eyebrow="Our Gallery"
          title="The works we are proud of."
          description="Premium residential and commercial properties, integrated townships, luxury villas, and strategic developments captured from our portfolio."
          align="left"
          tone="light"
        />
        <div className="mt-8 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-3 md:gap-4">
          {[
            {
              title: "JB's Nature Valley",
              image: "/images/nature-valley-1.jpeg",
            },
            {
              title: "JB's Nature Valley",
              image: "/images/nature-valley-2.jpeg",
            },
            {
              title: "JB's Serene City",
              image: "/images/serene-city-1.jpeg",
            },
            {
              title: "JB's Serene City",
              image: "/images/serene-city-2.jpeg",
            },
            {
              title: "JB's Pristine City",
              image: "/images/pristine-city-1.jpeg",
            },
            {
              title: "JB's Pristine City",
              image: "/images/pristine-city-2.jpeg",
            },
            {
              title: "JB Serene County-1",
              image: "/images/serene-county1-1.jpeg",
            },
            {
              title: "JB Serene County-1",
              image: "/images/serene-county1-2.jpeg",
            },
            {
              title: "JB's Pride",
              image: "/images/pride-1.jpeg",
            },
            {
              title: "JB's Pride",
              image: "/images/pride-2.jpeg",
            },
            {
              title: "JB's Serene County",
              image: "/images/serene-county-1.jpeg",
            },
            {
              title: "JB's Harmony Woods",
              image: "/images/harmony-woods-1.jpeg",
            },
          ].map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-2xl md:rounded-3xl">
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 md:h-64" />
            </div>
          ))}
        </div>
      </section>

      <section className="fade-up mx-auto w-full max-w-6xl rounded-2xl bg-white px-4 py-8 text-brand md:rounded-3xl md:px-6 md:py-12 lg:px-10">
        <div className="space-y-6 md:space-y-8">
          <SectionHeading
            eyebrow="Core Values"
            title="Principles that shape every decision, interaction, and deliverable."
            tone="light"
          />
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {values.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-[#f8fafc] p-4 text-brand transition duration-500 hover:-translate-y-2 md:rounded-3xl md:p-6"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/5 blur-2xl transition duration-500 group-hover:bg-brand/10" />
                <div className="relative space-y-3 md:space-y-4">
                  <h4 className="text-base font-semibold text-brand md:text-lg">{item.title}</h4>
                  <p className="text-xs text-brand/70 md:text-sm">{item.copy}</p>
                  <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand/60 md:gap-3 md:text-[11px]">
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-2.5 py-0.5 md:px-3 md:py-1">
                      UX-Aligned
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-2.5 py-0.5 md:px-3 md:py-1">
                      Turnkey
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fade-up mx-auto w-full max-w-6xl rounded-2xl bg-white px-4 py-8 text-brand md:rounded-3xl md:px-6 md:py-12 lg:px-10">
        <div className="space-y-6 md:space-y-8">
          <SectionHeading
            eyebrow="Client Promise"
            title="A partnership anchored in clarity and accountability."
            description="From day-one kickoff to post-handover support, our approach ensures a seamless experience for clients, consultants, and vendors alike."
            tone="light"
          />

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {ethos.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-[#f8fafc] p-4 text-brand transition duration-500 hover:-translate-y-2 md:rounded-3xl md:p-6"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/5 blur-2xl transition duration-500 group-hover:bg-brand/10" />
                <div className="relative">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand/15 bg-white text-xs font-semibold text-brand md:h-11 md:w-11 md:text-sm">
                    0{index + 1}
                  </span>
                  <h4 className="mt-3 text-base font-semibold text-brand md:mt-4 md:text-lg">{item.title}</h4>
                  <p className="mt-2 text-xs text-brand/70 md:mt-3 md:text-sm">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default About;

