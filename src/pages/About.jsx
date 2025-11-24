import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import StatsStrip from "../components/StatsStrip";
import { ethos, contactDetails } from "../data/siteContent";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import useInViewAnimation from "../hooks/useInViewAnimation";

const values = [
  {
    title: "RERA Approved Properties",
    icon: "✓",
    copy: "All our projects are RERA, DTCP, and HMDA approved ensuring transparency, legal compliance, and buyer protection.",
  },
  {
    title: "Prime Locations",
    icon: "📍",
    copy: "Strategically located properties on major highways, near ORR exits, and in developing areas with excellent growth potential.",
  },
  {
    title: "World-Class Amenities",
    icon: "🏗️",
    copy: "Premium amenities including free clubhouse membership, landscaped gardens, modern infrastructure, and lifetime benefits.",
  },
  {
    title: "Quality Construction",
    icon: "🏆",
    copy: "Premium materials and craftsmanship ensuring durability and excellence in every project we develop.",
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
      <div className="pb-12 md:pb-24">
      <PageHero
        title="About PNR Properties"
        description="Delivering premium real estate properties and developments. We create exceptional residential and commercial spaces with world-class amenities."
        background="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Founder Section - Enhanced Design */}
      <section className="fade-up relative mx-auto w-full max-w-6xl px-4 py-12 text-brand md:px-6 md:py-16 lg:px-10">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand/5 rounded-[32px] -z-10" />
        
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-xs md:tracking-[0.38em] mb-4">
              Our Founder
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr] lg:items-center lg:gap-12">
            {/* Image Section with Enhanced Styling */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-accent/20 to-brand/10 rounded-[32px] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-[24px] shadow-[0_30px_70px_rgba(15,23,42,0.25)] md:rounded-[32px] ring-4 ring-white">
                <img
                  src="/images/founder-nagaraju.jpeg"
                  alt="PULUKARAM NAGARAJU - Founder of PNR Properties"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-4 -right-4 hidden lg:block">
                <div className="rounded-2xl bg-brand-accent p-4 text-white shadow-[0_20px_50px_rgba(6,167,215,0.4)] md:rounded-3xl md:p-6">
                  <p className="text-2xl font-bold md:text-3xl">12+</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] md:text-xs">Years Excellence</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 md:space-y-8">
              {/* Founder Name & Title */}
              <div className="space-y-3">
                <h2 className="text-3xl font-bold leading-tight text-brand md:text-4xl lg:text-5xl">
                  PULUKARAM NAGARAJU
                </h2>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-brand-accent to-transparent" />
                  <p className="text-sm font-semibold text-brand-accent md:text-base">
                    Founder & Visionary Leader
                  </p>
                  <div className="h-px flex-1 bg-gradient-to-l from-brand-accent to-transparent" />
                </div>
              </div>

              {/* Achievement Badges - Below Heading */}
              <div className="flex flex-wrap gap-2 pt-2 md:gap-3">
                {["RERA Approved", "DTCP & HMDA", "12+ Years Experience", "2000+ Acres"].map((badge) => (
                  <span key={badge} className="rounded-full border border-brand-accent/30 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent shadow-sm md:px-4 md:py-2 md:text-xs">
                    {badge}
                  </span>
                ))}
              </div>

              {/* Main Description */}
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-brand/80 md:text-base lg:text-lg">
                  <strong className="text-brand font-semibold">PULUKARAM NAGARAJU</strong> is the visionary founder of PNR Properties, established in <strong className="text-brand-accent">2013</strong> with a mission to transform the real estate landscape in Telangana. With over <strong className="text-brand-accent">12 years</strong> of experience in real estate development, he has led PNR Properties to become a trusted name in premium residential and commercial property development.
                </p>
                
                <p className="text-sm leading-relaxed text-brand/80 md:text-base lg:text-lg">
                  Under his leadership, PNR Properties has successfully developed numerous <strong className="text-brand">RERA-approved projects</strong> spanning over <strong className="text-brand-accent">2000+ acres</strong>, including premium integrated townships, luxury apartments, villas, and commercial complexes. His commitment to quality construction, strategic locations, and customer satisfaction has earned PNR Properties a reputation for excellence in the real estate industry.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-4 md:gap-4">
                <div className="rounded-xl border border-brand-accent/20 bg-brand-accent/5 p-4 md:rounded-2xl md:p-5">
                  <p className="text-2xl font-bold text-brand-accent md:text-3xl">2000+</p>
                  <p className="text-[10px] font-semibold text-brand/70 uppercase tracking-[0.15em] mt-1 md:text-xs">Acres Developed</p>
                </div>
                <div className="rounded-xl border border-brand-accent/20 bg-brand-accent/5 p-4 md:rounded-2xl md:p-5">
                  <p className="text-2xl font-bold text-brand-accent md:text-3xl">7+</p>
                  <p className="text-[10px] font-semibold text-brand/70 uppercase tracking-[0.15em] mt-1 md:text-xs">RERA Projects</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Compact */}
      <section className="fade-up mx-auto w-full max-w-6xl px-4 py-12 text-brand md:px-6 md:py-16 lg:px-10">
        <div className="rounded-3xl bg-gradient-to-br from-brand/5 via-white to-brand-accent/5 p-8 border border-brand/10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] md:p-12">
          <div className="mx-auto max-w-4xl space-y-6 md:space-y-8">
            {/* Section Header */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-xs md:tracking-[0.38em]">
                Our Story
              </div>
              <h2 className="text-2xl font-bold leading-tight text-brand md:text-3xl lg:text-4xl">
                A Trusted Real Estate Developer
              </h2>
            </div>

            {/* Compact Content */}
            <div className="space-y-4 text-center text-sm leading-relaxed text-brand/80 md:text-base">
              <p>
                Established in <strong className="text-brand-accent">2013</strong>, PNR Properties delivers premium residential and commercial properties across Telangana. We specialize in <strong className="text-brand">JB's branded properties</strong> including integrated townships, luxury villas, apartments, and commercial complexes with DTCP, HMDA, and RERA approvals.
              </p>
              <p>
                Our portfolio includes <strong className="text-brand">JB's Nature Valley</strong>, <strong className="text-brand">JB's Serene City</strong>, <strong className="text-brand">JB's Pristine City</strong>, <strong className="text-brand">JB Serene County</strong>, <strong className="text-brand">JB's Pride</strong>, <strong className="text-brand">JB's Harmony Woods</strong>, and other world-class projects spanning over <strong className="text-brand-accent">2000+ acres</strong>.
              </p>
            </div>

            {/* Stats Row - Compact */}
            <div className="grid grid-cols-4 gap-3 pt-4 md:gap-4">
              <div className="rounded-xl bg-white border border-brand-accent/20 p-4 text-center shadow-sm md:p-5">
                <p className="text-2xl font-bold text-brand-accent md:text-3xl">12+</p>
                <p className="text-[10px] font-semibold text-brand/70 uppercase tracking-[0.15em] mt-1 md:text-xs">Years</p>
              </div>
              <div className="rounded-xl bg-white border border-brand-accent/20 p-4 text-center shadow-sm md:p-5">
                <p className="text-2xl font-bold text-brand-accent md:text-3xl">2000+</p>
                <p className="text-[10px] font-semibold text-brand/70 uppercase tracking-[0.15em] mt-1 md:text-xs">Acres</p>
              </div>
              <div className="rounded-xl bg-white border border-brand-accent/20 p-4 text-center shadow-sm md:p-5">
                <p className="text-2xl font-bold text-brand-accent md:text-3xl">7+</p>
                <p className="text-[10px] font-semibold text-brand/70 uppercase tracking-[0.15em] mt-1 md:text-xs">Projects</p>
              </div>
              <div className="rounded-xl bg-white border border-brand-accent/20 p-4 text-center shadow-sm md:p-5">
                <p className="text-2xl font-bold text-brand-accent md:text-3xl">1000+</p>
                <p className="text-[10px] font-semibold text-brand/70 uppercase tracking-[0.15em] mt-1 md:text-xs">Customers</p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-2 pt-2 md:gap-3">
              {["RERA Approved", "DTCP & HMDA", "Premium Amenities", "Strategic Locations"].map((token) => (
                <span key={token} className="rounded-full border border-brand-accent/30 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent shadow-sm md:px-4 md:py-2 md:text-xs">
                  {token}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Side by Side */}
      <section className="fade-up mx-auto w-full max-w-6xl px-4 py-12 text-brand md:px-6 md:py-16 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Our Mission */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-accent/10 via-white to-brand-accent/5 p-8 border-2 border-brand-accent/20 shadow-[0_20px_60px_rgba(6,167,215,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(6,167,215,0.25)] md:rounded-3xl md:p-10">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-accent text-white mb-6 shadow-[0_10px_30px_rgba(6,167,215,0.3)]">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-brand mb-4 md:text-3xl">Our Mission</h3>
              <p className="text-sm leading-relaxed text-brand/80 md:text-base lg:text-lg">
                To develop premium <strong className="text-brand">RERA approved real estate properties</strong> that elevate living experiences. We create integrated townships and residential complexes with world-class amenities, strategic locations, and lifetime value for our customers across Telangana.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand/10 via-white to-brand-accent/5 p-8 border-2 border-brand/20 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] md:rounded-3xl md:p-10">
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand text-white mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                <span className="text-xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-brand mb-4 md:text-3xl">Our Vision</h3>
              <p className="text-sm leading-relaxed text-brand/80 md:text-base lg:text-lg">
                Creating exceptional living experiences through world-class amenities, <strong className="text-brand">DTCP, HMDA, and RERA-approved projects</strong> that offer lifetime value to customers. Dedicated to transparency, legal compliance, and innovative development positioning PNR Properties as a leading real estate developer in Telangana.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* Core Values Section */}
      <section className="fade-up mx-auto w-full max-w-6xl px-4 py-12 text-brand md:px-6 md:py-16 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-xs md:tracking-[0.38em] mb-4">
            Our Values
          </div>
          <h2 className="text-3xl font-bold leading-tight text-brand md:text-4xl lg:text-5xl">
            What Sets Us Apart
          </h2>
          <p className="mt-4 text-sm text-brand/70 md:text-base max-w-2xl mx-auto">
            Core principles that guide our commitment to excellence in real estate development
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {values.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-2xl bg-white border border-brand/10 p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand-accent/30 md:rounded-3xl"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent text-2xl transition-colors duration-300 group-hover:bg-brand-accent group-hover:text-white md:h-16 md:w-16">
                  {item.icon}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-brand mb-3 md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand/70 md:text-base">
                    {item.copy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="fade-up mx-auto w-full max-w-6xl px-4 pt-12 pb-6 text-brand md:px-6 md:pt-16 md:pb-8 lg:px-10">
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
    </div>
  );
};

export default About;

