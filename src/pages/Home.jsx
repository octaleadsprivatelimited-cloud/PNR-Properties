import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { testimonials, projectShowcase, contactDetails } from "../data/siteContent";
import { FaStar, FaWhatsapp, FaHandshake, FaChartLine, FaGraduationCap, FaNetworkWired, FaGlobe, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const heroBackgroundImage =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80";

const aboutPillars = [
  {
    title: "RERA Approved Properties",
    description: "All our projects are RERA, DTCP, and HMDA approved ensuring transparency, legal compliance, and buyer protection.",
  },
  {
    title: "Prime Locations",
    description: "Strategically located properties on major highways, near ORR exits, and in developing areas with excellent growth potential.",
  },
  {
    title: "World-Class Amenities",
    description: "Premium amenities including free clubhouse membership, landscaped gardens, modern infrastructure, and lifetime benefits.",
  },
];

const serviceCatalog = [
  {
    title: "Residential Properties",
    description: "Premium apartments, villas, and integrated townships with world-class amenities, RERA approved, and strategic locations.",
    image: "/images/building-constructions.webp",
  },
  {
    title: "Commercial Properties",
    description: "Modern commercial complexes, IT parks, and retail spaces perfect for businesses and investments with excellent connectivity.",
    image: "/images/architectural-design.webp",
  },
  {
    title: "Integrated Townships",
    description: "Large-scale integrated satellite townships spanning 700+ acres with complete infrastructure, amenities, and community living.",
    image: "/images/interiors.webp",
  },
  {
    title: "RERA Approved Layouts",
    description: "All our projects are RERA, DTCP, and HMDA approved ensuring legal compliance, transparency, and buyer protection.",
    image: "/images/pmc-project-management-consultancy.jpeg",
  },
  {
    title: "Premium Amenities",
    description: "Free clubhouse membership, landscaped gardens, modern infrastructure, security, and lifetime benefits for residents.",
    image: "/images/engineering-contracting.jpeg",
  },
  {
    title: "Strategic Locations",
    description: "Properties on major highways, near ORR exits, close to educational institutions, hospitals, and developing areas with high growth potential.",
    image: "/images/renovation-remodeling.webp",
  },
];

const propertyTypes = [
  {
    tier: "Luxury Villas",
    price: "4 & 5 BHK",
    inclusions: [
      "Independent villas with private gardens",
      "Premium finishes and exclusive clubhouse",
      "DTCP & RERA Approved",
      "Strategic locations on major highways",
      "Lifetime free clubhouse membership",
    ],
  },
  {
    tier: "Premium Apartments",
    price: "3 & 4 BHK",
    inclusions: [
      "Spacious apartments with modern architecture",
      "World-class amenities and smart home features",
      "HMDA & RERA Approved",
      "Integrated satellite townships",
      "Free clubhouse membership",
    ],
  },
  {
    tier: "Affordable Housing",
    price: "2 & 3 BHK",
    inclusions: [
      "Affordable apartments in prime locations",
      "Excellent connectivity and infrastructure",
      "DTCP & RERA Approved",
      "Near schools and hospitals",
      "Modern amenities included",
    ],
  },
  {
    tier: "Commercial Properties",
    price: "Office & Retail",
    inclusions: [
      "Premium office spaces and retail shops",
      "IT parks with modern infrastructure",
      "HMDA & TS-RERA Approved",
      "Prime locations with high footfall",
      "Perfect for business investments",
    ],
  },
];

const achievements = [
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "300+" },
  { label: "Years of Experience", value: "12+" },
  { label: "Expert Professionals", value: "80+" },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/movrpned";

const Home = () => {
  useInViewAnimation();
  const [formState, setFormState] = useState({
    firstName: "",
    phone: "",
    location: "",
  });
  const [formStatus, setFormStatus] = useState({ type: null, message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Group properties by location
  const propertiesByLocation = projectShowcase.reduce((acc, property) => {
    const location = property.location || "Other Locations";
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(property);
    return acc;
  }, {});

  const locations = Object.keys(propertiesByLocation).map((location) => {
    const hasLaunchingSoon = propertiesByLocation[location].some(prop => prop.launchingSoon);
    return {
      name: location,
      count: propertiesByLocation[location].length,
      image: propertiesByLocation[location][0]?.image || "/images/construction-site-1.avif",
      hasLaunchingSoon: hasLaunchingSoon,
    };
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: "Thank you! Our team will connect with you soon.",
        });
        setFormState({ firstName: "", phone: "", location: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again or call us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-white text-brand">
      <SEO
        title="Home"
        description="PNR Properties — Premium real estate properties and developments across India. Luxury apartments, villas, commercial spaces, and IT parks."
        keywords={[
          "real estate",
          "residential properties",
          "commercial properties",
          "luxury apartments",
          "villas",
          "property development",
          "Hyderabad",
          "Bengaluru",
          "India",
        ]}
        image="/images/hero-whatsapp.jpg"
      />
      {/* Hero */}
      <section className="fade-up relative isolate min-h-[500px] overflow-hidden border-b border-white/5 bg-slate-900 text-white md:min-h-[600px] lg:min-h-[700px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectFit: "cover" }}
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),transparent_60%)]" />

        {/* Hero Feature Cards - Desktop: inside hero, Mobile: after hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto hidden w-full max-w-6xl px-6 pb-8 md:block md:px-10">
          <div className="grid auto-rows-fr gap-6 rounded-2xl bg-[#1a1a1a]/95 px-8 py-8 backdrop-blur-sm md:grid-cols-3">
            <div className="flex h-full items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-brand-accent/30 bg-brand-accent/10">
                <svg className="h-6 w-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">RERA Approved</p>
                <h3 className="mt-2 text-base font-semibold text-white">Transparent Property Development</h3>
        </div>
            </div>
            <div className="flex h-full items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-brand-accent/30 bg-brand-accent/10">
                <svg className="h-6 w-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">Prime Locations</p>
                <h3 className="mt-2 text-base font-semibold text-white">Strategic Highway & ORR Locations</h3>
            </div>
          </div>
            <div className="flex h-full items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-brand-accent/30 bg-brand-accent/10">
                <svg className="h-6 w-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">Premium Amenities</p>
                <h3 className="mt-2 text-base font-semibold text-white">World-Class Facilities & Clubhouse</h3>
              </div>
              </div>
          </div>
        </div>
      </section>

      {/* Hero Feature Cards - Mobile: after hero section */}
      <div className="relative z-10 mx-auto -mt-6 w-full max-w-6xl px-6 md:hidden md:px-10">
        <div className="grid auto-rows-fr gap-6 rounded-2xl bg-[#1a1a1a]/95 px-8 py-8 backdrop-blur-sm">
          <div className="flex h-full items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#06a7d7]/30 bg-[#06a7d7]/10">
              <svg className="h-6 w-6 text-[#06a7d7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#06a7d7]">RERA Approved</p>
              <h3 className="mt-2 text-base font-semibold text-white">Transparent Property Development</h3>
            </div>
          </div>
          <div className="flex h-full items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#06a7d7]/30 bg-[#06a7d7]/10">
              <svg className="h-6 w-6 text-[#06a7d7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#06a7d7]">Prime Locations</p>
              <h3 className="mt-2 text-base font-semibold text-white">Strategic Highway & ORR Locations</h3>
            </div>
          </div>
          <div className="flex h-full items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#06a7d7]/30 bg-[#06a7d7]/10">
              <svg className="h-6 w-6 text-[#06a7d7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#06a7d7]">Premium Amenities</p>
              <h3 className="mt-2 text-base font-semibold text-white">World-Class Facilities & Clubhouse</h3>
            </div>
          </div>
        </div>
        </div>

      {/* Our Properties */}
      <section className="fade-up mx-auto mt-12 w-full max-w-6xl px-4 py-12 text-brand md:mt-16 md:px-6 md:py-16 lg:px-12">
        <SectionHeading
          eyebrow="Our Properties"
          title={selectedLocation ? `Properties in ${selectedLocation}` : "Premium Real Estate Developments"}
          description={selectedLocation 
            ? `Explore our premium residential and commercial properties in ${selectedLocation}.`
            : "Select a location to explore our portfolio of premium residential and commercial properties designed to meet the highest standards of quality and luxury."}
          align="center"
          tone="light"
        />
        
        {selectedLocation ? (
          <>
            {/* Back Button */}
            <div className="mt-8 mb-6 md:mt-10 md:mb-8">
              <button
                onClick={() => setSelectedLocation(null)}
                className="flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent/80 transition-colors md:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Locations
              </button>
            </div>
            
            {/* Properties for Selected Location */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
              {propertiesByLocation[selectedLocation]?.map((property) => {
                const cardContent = (
                  <article
                    className={`group relative overflow-hidden rounded-2xl bg-white border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] ${property.slug ? "cursor-pointer" : ""} md:rounded-3xl ${
                      property.launchingSoon
                        ? "border-2 border-brand-accent shadow-[0_10px_30px_rgba(6,167,215,0.3)] ring-2 ring-brand-accent/20"
                        : "border-brand/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                    }`}
                  >
                    {property.launchingSoon && (
                      <div className="absolute top-0 right-0 z-20 bg-brand-accent text-white px-4 py-1.5 rounded-bl-2xl md:rounded-bl-3xl">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] md:text-xs">Launching Soon</span>
                      </div>
                    )}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {property.image2 ? (
                        <div className="relative h-full w-full bg-brand/5">
                          <img
                            src={property.image}
                            alt={property.title}
                            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                              e.target.src = "/images/construction-site-1.avif";
                            }}
                            onLoad={(e) => {
                              e.target.style.opacity = "1";
                            }}
                          />
                          <img
                            src={property.image2}
                            alt={`${property.title} - Image 2`}
                            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                              e.target.src = "/images/construction-site-1.avif";
                            }}
                          />
                        </div>
                      ) : (
                        <img
                          src={property.image}
                          alt={property.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.target.src = "/images/construction-site-1.avif";
                          }}
                          onLoad={(e) => {
                            e.target.style.opacity = "1";
                          }}
                        />
                      )}
                      {property.launchingSoon && property.launchDate && (
                        <span className="absolute bottom-4 left-4 right-4 z-10 rounded-lg bg-brand-accent/95 text-white px-3 py-2 text-[10px] font-semibold text-center md:text-xs">
                          Launch Date: {property.launchDate}
                        </span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <div className="space-y-2 p-4 md:space-y-3 md:p-6">
                      <h3 className={`text-base font-semibold md:text-lg ${property.launchingSoon ? "text-brand-accent" : "text-brand"}`}>
                        {property.title}
                      </h3>
                      {property.location && (
                        <p className="text-xs text-brand/60 font-medium md:text-sm">
                          📍 {property.location}
                        </p>
                      )}
                      <p className="text-sm leading-relaxed text-brand/70 md:text-base">{property.description}</p>
                    </div>
                  </article>
                );

                return property.slug ? (
                  <Link key={property.title} to={property.slug} className="block">
                    {cardContent}
                  </Link>
                ) : (
                  <div key={property.title}>
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          /* Locations View */
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
            {locations.map((location) => (
              <article
                key={location.name}
                onClick={() => setSelectedLocation(location.name)}
                className="group relative overflow-hidden rounded-2xl bg-white border border-brand/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] cursor-pointer md:rounded-3xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.src = "/images/construction-site-1.avif";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <div className="inline-block rounded-lg bg-brand-accent/95 px-3 py-1.5 backdrop-blur-sm">
                        <p className="text-xs font-bold text-white uppercase tracking-[0.15em] md:text-sm">
                          {location.count} {location.count === 1 ? "Property" : "Properties"}
                        </p>
                      </div>
                      {location.hasLaunchingSoon && (
                        <div className="inline-block rounded-lg bg-yellow-500/95 px-3 py-1.5 backdrop-blur-sm animate-pulse">
                          <p className="text-xs font-bold text-white uppercase tracking-[0.15em] md:text-sm">
                            🚀 Launching Soon
                          </p>
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white drop-shadow-lg md:text-xl lg:text-xl">
                      {location.name}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* About PNR Properties - Compact */}
      <section className="fade-up mx-auto mt-12 w-full max-w-6xl px-4 py-8 md:mt-16 md:px-6 md:py-10 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className="relative group w-full">
            <div className="overflow-hidden rounded-2xl shadow-lg md:rounded-3xl w-full">
              <img
                src="/images/founder-nagaraju.jpeg"
                alt="PULUKARAM NAGARAJU - Founder of PNR Properties"
                className="w-full h-full object-cover aspect-[4/5] md:aspect-[3/4] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-3 text-brand">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-xs">
              About PNR Properties
            </div>
            <h2 className="text-2xl font-bold leading-tight text-brand md:text-3xl">
              Turning Visions Into Reality With A Legacy Of Quality And Trust
            </h2>
            <p className="text-xs font-semibold text-brand-accent md:text-sm">PULUKARAM NAGARAJU - Founder</p>
            <p className="text-sm leading-relaxed text-brand/80 md:text-base">
              Founded by <strong className="text-brand font-bold">PULUKARAM NAGARAJU</strong>, PNR Properties delivers premium RERA-approved properties across Telangana, including integrated townships, luxury apartments, villas, and commercial complexes with world-class amenities.
            </p>
            
            {/* Compact Stats */}
            <div className="grid grid-cols-4 gap-2 pt-2">
              <div className="rounded-lg bg-brand-accent/5 p-2 text-center border border-brand-accent/10">
                <p className="text-lg font-bold text-brand-accent md:text-xl">12+</p>
                <p className="text-[9px] font-semibold text-brand/70 uppercase mt-0.5">Years</p>
              </div>
              <div className="rounded-lg bg-brand-accent/5 p-2 text-center border border-brand-accent/10">
                <p className="text-lg font-bold text-brand-accent md:text-xl">2000+</p>
                <p className="text-[9px] font-semibold text-brand/70 uppercase mt-0.5">Acres</p>
              </div>
              <div className="rounded-lg bg-brand-accent/5 p-2 text-center border border-brand-accent/10">
                <p className="text-lg font-bold text-brand-accent md:text-xl">7+</p>
                <p className="text-[9px] font-semibold text-brand/70 uppercase mt-0.5">Projects</p>
              </div>
              <div className="rounded-lg bg-brand-accent/5 p-2 text-center border border-brand-accent/10">
                <p className="text-lg font-bold text-brand-accent md:text-xl">1000+</p>
                <p className="text-[9px] font-semibold text-brand/70 uppercase mt-0.5">Customers</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2 sm:flex-row">
              <Link
                to="/about"
                className="rounded-full bg-brand-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-brand-accent/90 text-center sm:px-8 sm:py-3 sm:text-sm"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="rounded-full border-2 border-brand-accent bg-transparent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent transition hover:bg-brand-accent hover:text-white text-center sm:px-8 sm:py-3 sm:text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="fade-up mt-12 bg-[#11111a] py-12 text-white md:mt-16 md:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-6 text-center md:gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-[11px] md:tracking-[0.4em]">Our Services</p>
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Provided Features</h2>
          <p className="max-w-3xl text-xs text-white/70 md:text-sm lg:text-base">
            Premium real estate properties with RERA approval, world-class amenities, and strategic locations. Experience seamless property buying with transparent processes and dedicated customer support.
          </p>
        </div>
        <div className="mx-auto mt-8 grid w-full max-w-6xl gap-6 px-4 md:mt-12 md:gap-8 md:px-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCatalog.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-[24px] bg-[#1c1c27] p-3 text-center shadow-[0_25px_70px_rgba(0,0,0,0.35)] md:rounded-[28px] md:p-4"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <img src={service.image} alt={service.title} className="h-48 w-full object-cover md:h-52" loading="lazy" />
                </div>
              <div className="mt-4 space-y-2 px-2 pb-2 md:mt-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.05em] md:text-base">{service.title}</h3>
                <p className="text-xs text-white/70 md:text-sm">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="fade-up mt-12 bg-[#e8e1df] py-12 md:mt-16 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="text-center text-brand">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand/60 md:text-[11px] md:tracking-[0.4em]">Property Types</p>
            <h2 className="mt-2 text-xl font-semibold text-[#1e1e1e] md:text-2xl">Our Property Portfolio</h2>
      </div>
          <div className="mt-8 grid gap-6 md:mt-10 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {propertyTypes.map((pkg) => (
              <article key={pkg.tier} className="rounded-[24px] bg-white p-4 shadow-[0_25px_45px_rgba(0,0,0,0.12)] md:rounded-[26px] md:p-6">
                <div className="rounded-full bg-[#f2f2f2] py-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#1e1e1e] shadow-inner md:py-3 md:text-sm">
                  {pkg.price}
        </div>
                <h3 className="mt-4 text-center text-base font-semibold text-[#1e1e1e] md:mt-6 md:text-lg">{pkg.tier}</h3>
                <ul className="mt-4 space-y-2 text-xs text-[#4b4b4b] md:mt-5 md:space-y-3 md:text-sm">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="border-b border-[#ececec] pb-1.5 last:border-b-0 md:pb-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-4 block rounded-full bg-[#f6a700] py-2 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#e29100] md:mt-6 md:text-xs md:tracking-[0.35em]"
                >
                  Book Now
                </Link>
              </article>
              ))}
            </div>
          </div>
      </section>

      {/* Why Choose Us */}
      <section className="fade-up mx-auto mt-12 w-full max-w-6xl px-4 md:mt-16 md:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-center lg:gap-10">
          <div className="overflow-hidden rounded-[24px] shadow-[0_30px_70px_rgba(15,23,42,0.15)] md:rounded-[32px]">
            <img
              src="/images/adobe-stock-406163205.jpeg"
              alt="Premium real estate development showcasing excellence"
              className="h-full w-full object-cover"
              loading="lazy"
            />
                  </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-sm md:tracking-[0.4em]">Why Choose Us?</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-slate-900 md:mt-3 md:text-3xl lg:text-4xl">
              Building Excellence With Expertise, Innovation, And Dedication.
            </h2>
            <div className="mt-6 divide-y divide-[#e4e7ec] border-y border-[#e4e7ec] md:mt-8">
              {[
                "Uncompromising Quality",
                "Experienced Professionals",
                "Tailored Solutions",
                "Timely Completion",
                "Transparent Communication",
              ].map((item) => (
                <div key={item} className="flex items-center justify-between py-3 md:py-4">
                  <span className="text-xs font-semibold text-[#2b2f3a] md:text-sm">{item}</span>
                  <span className="text-base text-[#2b2f3a] md:text-lg">▸</span>
            </div>
          ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="fade-up relative mt-12 w-full bg-[#0f0f16] py-12 text-white md:mt-16 md:py-20">
        <img
          src="/images/construction-site-2.avif"
          alt="Premium real estate development site"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative mx-auto w-full max-w-6xl px-4 text-center md:px-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-[11px] md:tracking-[0.4em]">
            Our Achievements at a Glance
          </p>
          <h2 className="mt-2 text-xl font-semibold leading-tight md:mt-3 md:text-3xl lg:text-4xl">
            Proud Milestones That Reflect Our Dedication And Expertise
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:mt-12 md:grid-cols-4 md:gap-6">
            {achievements.map((item) => (
              <div
                key={item.label}
                className="rounded-[20px] bg-white/10 px-4 py-6 text-center backdrop-blur-md md:rounded-[24px] md:px-6 md:py-10"
              >
                <p className="text-2xl font-semibold md:text-4xl">
                  {item.value}
                  <span className="text-lg align-super md:text-2xl">+</span>
                </p>
                <p className="mt-2 text-xs text-white/80 md:mt-4 md:text-sm">{item.label}</p>
                <div className="mt-4 h-1 w-8 mx-auto rounded-full bg-brand-accent md:mt-6 md:w-12" />
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="fade-up mx-auto mt-12 w-full max-w-6xl px-4 py-10 text-center md:mt-16 md:px-6 md:py-12 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-sm md:tracking-[0.4em]">Testimonial</p>
        <h2 className="mt-2 text-xl font-semibold text-[#0a2540] md:mt-3 md:text-3xl lg:text-4xl">
          We Care About Our Customers Experience Too
              </h2>
        <div className="mt-8 grid gap-5 md:mt-12 md:gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
                  <article
              key={testimonial.name}
              className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] p-4 text-white transition-all duration-300 hover:bg-brand-accent md:rounded-2xl md:p-6"
            >
              <p className="mb-4 text-xs leading-relaxed text-white/90 md:mb-6 md:text-sm">{testimonial.quote}</p>
              <div className="mb-3 h-px w-full bg-white/20 md:mb-4" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] md:text-sm">Client</span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="text-[10px] md:text-xs" />
              ))}
            </div>
          </div>
            </article>
              ))}
        </div>
      </section>

       {/* Join Our Team */}
       <section className="fade-up relative mt-12 mb-0 w-full overflow-hidden bg-gradient-to-br from-brand-accent/10 via-white to-brand/10 py-12 md:mt-16 md:py-20">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(6,167,215,0.05),transparent_60%)]" />
         <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-10">
           <div className="text-center mb-10 md:mb-12">
             <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-[11px] md:tracking-[0.4em]">Career Opportunities</p>
             <h2 className="mt-2 text-2xl font-semibold text-brand md:mt-3 md:text-3xl lg:text-4xl">
               JOIN OUR TEAM
             </h2>
             <p className="mt-3 text-sm font-semibold text-brand-accent md:text-base lg:text-lg">
               Connect · Collaborate · Grow
             </p>
           </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
            {/* Left Content */}
            <div className="space-y-6 text-brand">
              <div className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:rounded-3xl md:p-8">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-brand md:text-xl">Dear Real Estate Expert,</h3>
                  <p className="mt-2 text-sm text-brand/70 md:text-base">
                    Welcome to the <strong className="text-brand-accent">JB INFRA GROUP</strong>.
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-brand/70 md:text-sm">
                  Whether you're a real estate associate, channel partner, Realtor or just passionate about real estate, you're in the right place!
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:rounded-3xl md:p-8">
                <h4 className="text-base font-semibold text-brand mb-3 md:text-lg">What We Specialize In</h4>
                <ul className="space-y-2 text-xs text-brand/70 md:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent mt-1">✓</span>
                    <span>HMDA, DTCP, & RERA Approved Residential Open Plots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent mt-1">✓</span>
                    <span>Independent Duplex Villas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent mt-1">✓</span>
                    <span>Global Properties</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-brand-accent to-brand-accent/80 p-6 text-white shadow-[0_10px_30px_rgba(6,167,215,0.3)] md:rounded-3xl md:p-8">
                <h4 className="text-base font-semibold mb-3 md:text-lg">What We Offer</h4>
                <ul className="space-y-2 text-xs text-white/90 md:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">💼</span>
                    <span>Good Commissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">🎁</span>
                    <span>Bonanza & Incentives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✈️</span>
                    <span>National & International Trips</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:rounded-3xl md:p-8">
                <h4 className="text-base font-semibold text-brand mb-4 md:text-lg">Benefits</h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                      <FaGraduationCap className="text-lg" />
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-brand md:text-sm">Training & Support</h5>
                      <p className="mt-1 text-[10px] text-brand/60 md:text-xs">Comprehensive training programs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                      <FaNetworkWired className="text-lg" />
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-brand md:text-sm">Network with Experts</h5>
                      <p className="mt-1 text-[10px] text-brand/60 md:text-xs">Connect with industry leaders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                      <FaChartLine className="text-lg" />
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-brand md:text-sm">Latest Deals</h5>
                      <p className="mt-1 text-[10px] text-brand/60 md:text-xs">Stay updated on new projects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                      <FaHandshake className="text-lg" />
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-brand md:text-sm">Grow Together</h5>
                      <p className="mt-1 text-[10px] text-brand/60 md:text-xs">Mutual growth opportunities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-brand/5 to-brand-accent/10 p-6 border-2 border-brand-accent/20 md:rounded-3xl md:p-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-accent/10 text-brand-accent mb-2">
                    <FaWhatsapp className="text-3xl" />
                  </div>
                  <h4 className="text-base font-semibold text-brand md:text-lg">Join Our WhatsApp Community</h4>
                  <p className="text-xs text-brand/70 md:text-sm">
                    For Latest Updates and Upcoming Projects
                  </p>
                   <a
                     href="https://chat.whatsapp.com/C8q5X0DhW6y90OY1h8yN93?mode=wwt"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-brand-accent/90 shadow-[0_10px_30px_rgba(6,167,215,0.3)] md:px-8 md:py-3.5 md:text-sm"
                   >
                     <FaWhatsapp className="text-base" />
                     Join WhatsApp Community
                   </a>
                  <p className="text-[10px] text-brand/60 italic md:text-xs">
                    Thanks for joining us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fade-up relative mt-12 mb-0 w-full overflow-hidden md:mt-16 md:mb-0">
        <img
          src="/images/construction-site-1.avif"
          alt="Premium real estate property background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-10">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:gap-10">
            <div className="text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80 md:text-xs md:tracking-[0.3em]">Where Style Meets Functionality</p>
              <h2 className="mt-2 text-xl font-semibold text-white md:mt-3 md:text-3xl lg:text-4xl">Transforming spaces, elevating lives.</h2>
              <p className="mt-3 text-xs text-white/85 md:mt-4 md:text-sm">
                Share your plot details and our team will schedule a consultation to walk you through designs, timelines, and budgets.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-white/80 md:mt-6 md:space-y-2 md:text-sm">
                <li>• Personalised concepts for villas, apartments, and commercial sites</li>
                <li>• Transparent packages with branded materials</li>
                <li>• Dedicated support even after handover</li>
              </ul>
            </div>
            <form onSubmit={handleFormSubmit} className="space-y-3 rounded-2xl bg-[#1a1a1a]/95 p-4 backdrop-blur-sm md:rounded-3xl md:space-y-4 md:p-6">
              <div>
                <label htmlFor="firstName" className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 md:text-xs md:tracking-[0.3em]">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formState.firstName}
                  onChange={handleFormChange}
                  required
                  placeholder="Enter your name"
                  className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-white/50 outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 md:mt-2 md:rounded-2xl md:px-4 md:py-3 md:text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 md:text-xs md:tracking-[0.3em]">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleFormChange}
                  required
                  placeholder="+91 00000 00000"
                  className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-white/50 outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 md:mt-2 md:rounded-2xl md:px-4 md:py-3 md:text-sm"
                />
              </div>
              <div>
                <label htmlFor="location" className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 md:text-xs md:tracking-[0.3em]">Location of Your Plot</label>
                <textarea
                  id="location"
                  name="location"
                  value={formState.location}
                  onChange={handleFormChange}
                  required
                  placeholder="City or neighbourhood"
                  rows={3}
                  className="mt-1.5 w-full resize-none rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-white/50 outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 md:mt-2 md:rounded-2xl md:px-4 md:py-3 md:text-sm"
                />
              </div>
              {formStatus.type && (
                <p
                  className={`text-xs md:text-sm ${
                    formStatus.type === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {formStatus.message}
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-brand-accent px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-[0_20px_45px_rgba(6,167,215,0.35)] transition hover:bg-brand-accent/90 disabled:cursor-not-allowed disabled:opacity-70 md:rounded-2xl md:py-3 md:text-sm md:tracking-[0.3em]"
              >
                {submitting ? "Sending..." : "Submit"}
              </button>
            </form>
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
    </main>
  );
};

export default Home;

