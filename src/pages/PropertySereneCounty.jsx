import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { contactDetails } from "../data/siteContent";
import { FaMapMarkerAlt, FaCheckCircle, FaBuilding, FaCertificate, FaHome, FaSwimmingPool, FaParking, FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const heroBackground = "/images/serene-county-video.mp4";

const propertyDetails = {
  title: "JB's Serene County",
  location: "Near ORR Exit-12, Mangalpally",
  approval: "HMDA & RERA Approved",
  area: "Premium Residential Layout",
  type: "Residential Development",
  description: "Premium HMDA & RERA Approved residential development near ORR Exit-12, Mangalpally. Strategically located with excellent connectivity and modern amenities.",
};

const features = [
  { icon: FaCertificate, title: "HMDA & RERA Approved", description: "Fully approved layout ensuring legal compliance and buyer protection" },
  { icon: FaBuilding, title: "Premium Residential Layout", description: "Well-planned residential development with modern infrastructure" },
  { icon: FaHome, title: "Residential Plots", description: "Premium residential plots in a strategically located development" },
  { icon: FaSwimmingPool, title: "Modern Amenities", description: "World-class amenities and recreational facilities for residents" },
  { icon: FaParking, title: "Excellent Infrastructure", description: "Well-developed roads, drainage, electricity, and water supply systems" },
  { icon: FaMapMarkerAlt, title: "Strategic Location", description: "Prime location near ORR Exit-12 with excellent connectivity" },
];

const amenities = [
  "Modern Infrastructure",
  "Landscaped Gardens & Parks",
  "Security Systems",
  "Water Supply & Electricity",
  "Wide Internal Roads",
  "Drainage Systems",
  "Community Facilities",
  "Sports Facilities",
  "Shopping Complex Nearby",
  "Educational Institutions Nearby",
  "Healthcare Facilities Nearby",
  "Excellent Connectivity",
];

const images = [
  "/images/serene-county-1.jpeg",
  "/images/serene-county-2.jpeg",
];

const videos = [
  "/images/serene-county-video.mp4",
];

const PropertySereneCounty = () => {
  useInViewAnimation();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-white text-brand">
      <SEO
        title="JB's Serene County - ORR Exit-12, Mangalpally"
        description="JB's Serene County - HMDA & RERA Approved premium residential development near ORR Exit-12, Mangalpally. Strategically located with excellent connectivity and modern amenities."
        keywords={[
          "JB's Serene County",
          "Mangalpally properties",
          "ORR Exit-12",
          "HMDA approved",
          "RERA approved",
          "residential development",
          "premium plots",
        ]}
        image="/images/serene-county-1.jpeg"
      />

      {/* Hero with Video Background */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-brand pt-20 text-white md:min-h-[60vh] md:pt-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.backgroundImage = 'url(/images/construction2.webp)';
            e.target.parentElement.style.backgroundSize = 'cover';
          }}
        >
          <source src={heroBackground} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-24 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/90 backdrop-blur-sm md:text-xs md:tracking-[0.38em]">
            {propertyDetails.approval}
          </div>
          <h1 className="mt-4 text-3xl font-semibold md:mt-6 md:text-5xl lg:text-6xl">
            {propertyDetails.title}
          </h1>
          <p className="mt-4 text-sm text-white/90 md:mt-6 md:text-base lg:text-lg">
            HMDA & RERA Approved Premium Residential Development with Excellent Connectivity
          </p>
        </div>
      </section>

      {/* Property Overview */}
      <section className="fade-up mx-auto mt-12 w-full max-w-6xl px-4 py-8 md:px-6 md:py-12 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-accent md:text-xs md:tracking-[0.38em]">
              {propertyDetails.approval}
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-brand md:text-4xl lg:text-5xl">
              {propertyDetails.title}
            </h1>
            <div className="flex items-start gap-3 text-sm text-brand/70 md:text-base">
              <FaMapMarkerAlt className="mt-1 h-5 w-5 shrink-0 text-brand-accent" />
              <span>{propertyDetails.location}</span>
            </div>
            <p className="text-sm leading-relaxed text-brand/70 md:text-base lg:text-lg">
              {propertyDetails.description} Located strategically near ORR Exit-12, Mangalpally, this premium residential development offers an exceptional living experience with modern amenities and excellent connectivity to major business districts.
            </p>
            <div className="grid grid-cols-2 gap-4 rounded-2xl bg-brand/5 p-6 md:rounded-3xl md:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/60 md:text-sm">Approval</p>
                <p className="mt-1 text-lg font-semibold text-brand md:text-xl">HMDA & RERA</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/60 md:text-sm">Property Type</p>
                <p className="mt-1 text-lg font-semibold text-brand md:text-xl">{propertyDetails.type}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-[0_30px_70px_rgba(15,23,42,0.15)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-brand/5">
              <img
                src={images[0]}
                alt={propertyDetails.title}
                className="h-full w-full object-cover"
                loading="eager"
                onError={(e) => {
                  console.error('Image load error:', images[0]);
                  e.target.src = "/images/construction2.webp";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="fade-up mx-auto mt-12 w-full max-w-6xl px-4 py-8 md:px-6 md:py-12 lg:px-10">
        <SectionHeading
          eyebrow="Gallery"
          title="Property Images & Video"
          description="Explore the premium residential development through our gallery"
          align="center"
          tone="light"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {/* Display Images */}
          {images.map((image, index) => (
            <div key={`img-${index}`} className="group relative overflow-hidden rounded-2xl md:rounded-3xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image}
                  alt={`${propertyDetails.title} - Image ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image load error:', image);
                  }}
                />
              </div>
            </div>
          ))}
          {/* Display Video */}
          {videos.map((video, index) => (
            <div key={`video-${index}`} className="group relative overflow-hidden rounded-2xl md:rounded-3xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <video
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  controls
                  preload="metadata"
                  playsInline
                  onError={(e) => {
                    console.error('Video load error:', video);
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="flex h-full w-full items-center justify-center bg-black text-white/70 text-sm">Video not available</div>';
                  }}
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="fade-up mt-12 bg-[#f8fafc] py-12 md:mt-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Key Features"
            title="What Makes This Property Special"
            align="center"
            tone="light"
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-12 md:gap-8">
            {features.map((feature, index) => (
              <article
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-xl md:rounded-3xl md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent md:h-14 md:w-14">
                  <feature.icon className="h-6 w-6 md:h-7 md:w-7" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand md:text-xl">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand/70 md:text-base">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="fade-up mx-auto mt-12 w-full max-w-6xl px-4 py-8 md:px-6 md:py-12 lg:px-10">
        <SectionHeading
          eyebrow="Amenities"
          title="World-Class Amenities & Facilities"
          description="Experience premium living with our comprehensive range of amenities"
          align="center"
          tone="light"
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:mt-12 md:gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-3 rounded-xl bg-brand/5 p-4 transition hover:bg-brand/10 md:rounded-2xl md:p-5">
              <FaCheckCircle className="h-5 w-5 shrink-0 text-brand-accent" />
              <span className="text-sm font-medium text-brand md:text-base">{amenity}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Location Highlights */}
      <section className="fade-up mt-12 bg-brand/5 py-12 md:mt-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Location"
                title="Prime Location near ORR Exit-12"
                description="Strategically located for excellent connectivity and future growth potential"
                align="left"
                tone="light"
              />
              <ul className="space-y-3 text-sm text-brand/70 md:text-base">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-5 w-5 shrink-0 text-brand-accent" />
                  <span>Located near ORR Exit-12, Mangalpally with excellent connectivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-5 w-5 shrink-0 text-brand-accent" />
                  <span>Easy access to major business districts and IT corridors</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-5 w-5 shrink-0 text-brand-accent" />
                  <span>Close to educational institutions and healthcare facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-5 w-5 shrink-0 text-brand-accent" />
                  <span>Shopping centers and recreational facilities nearby</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-5 w-5 shrink-0 text-brand-accent" />
                  <span>Growing infrastructure and development in the region</span>
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-[0_30px_70px_rgba(15,23,42,0.15)]">
              <div className="relative aspect-[4/3] overflow-hidden bg-brand/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.456789!2d78.5!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fade-up relative mt-12 mb-0 w-full overflow-hidden md:mt-16 md:mb-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/90 to-brand/80" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-10">
          <div className="text-center text-white">
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              Interested in JB's Serene County?
            </h2>
            <p className="mt-4 text-sm text-white/90 md:text-base lg:text-lg">
              Contact us today to schedule a site visit and learn more about this premium residential development
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Link
                to="/contact"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand transition hover:bg-white/90 md:px-10 md:py-4 md:text-base"
              >
                Contact Us
              </Link>
              <Link
                to="/"
                className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10 md:px-10 md:py-4 md:text-base"
              >
                View All Properties
              </Link>
            </div>
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

export default PropertySereneCounty;

