import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { contactDetails } from "../data/siteContent";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const galleryImages = [
  // JB's Nature Valley
  {
    title: "JB's Nature Valley",
    description: "DTCP & RERA Approved 700 Acres Integrated Satellite Township on NH-65 HYD-VIJAYAWADA Highway near Gundrampally, Choutuppal with world-class amenities and free Clubhouse membership.",
    image: "/images/nature-valley-1.jpeg",
  },
  {
    title: "JB's Nature Valley",
    description: "Premium integrated township offering luxury residential and commercial spaces with world-class infrastructure and amenities.",
    image: "/images/nature-valley-2.jpeg",
  },
  // JB's Serene City
  {
    title: "JB's Serene City",
    description: "HMDA & RERA Approved 700 Acres township on Sagar Highway near Gurunaank College, Ibrahimpatnam with world-class amenities, free Clubhouse membership for lifetime.",
    image: "/images/serene-city-1.jpeg",
  },
  {
    title: "JB's Serene City",
    description: "Strategic location offering premium residential and commercial spaces with exceptional connectivity and amenities.",
    image: "/images/serene-city-2.jpeg",
  },
  // JB's Pristine City
  {
    title: "JB's Pristine City",
    description: "DTCP & TG-RERA Approved project in Vikarabad Town with premium amenities and free Clubhouse membership.",
    image: "/images/pristine-city-1.jpeg",
  },
  {
    title: "JB's Pristine City",
    description: "Modern township development offering quality homes and commercial spaces in a prime location.",
    image: "/images/pristine-city-2.jpeg",
  },
  // JB Serene County-1
  {
    title: "JB Serene County-1",
    description: "HMDA & TS-RERA Approved project near ORR Exit-13 Kongarakalan with world-class amenities and strategic connectivity.",
    image: "/images/serene-county1-1.jpeg",
  },
  {
    title: "JB Serene County-1",
    description: "Premium residential and commercial development offering exceptional living experiences with modern infrastructure.",
    image: "/images/serene-county1-2.jpeg",
  },
  // JB's Pride
  {
    title: "JB's Pride",
    description: "DTCP & RERA Approved project on Shankarpally Highway near Mominpet - Launching soon on 09/12/2025 with premium amenities.",
    image: "/images/pride-1.jpeg",
  },
  {
    title: "JB's Pride",
    description: "Upcoming premium township offering luxury residential and commercial spaces with world-class facilities.",
    image: "/images/pride-2.jpeg",
  },
  // JB's Serene County
  {
    title: "JB's Serene County",
    description: "HMDA & RERA Approved project near ORR Exit-12, Mangalpally with world-class amenities and strategic location.",
    image: "/images/serene-county-1.jpeg",
  },
  {
    title: "JB's Serene County",
    description: "Premium residential and commercial development offering exceptional connectivity and modern infrastructure.",
    image: "/images/serene-county-2.jpeg",
  },
  // JB's Harmony Woods
  {
    title: "JB's Harmony Woods",
    description: "Future City project on Srisilam Highway near Thummaloor with premium amenities and strategic development.",
    image: "/images/harmony-woods-1.jpeg",
  },
  {
    title: "JB's Harmony Woods",
    description: "Modern township development offering quality homes and commercial spaces with world-class facilities.",
    image: "/images/harmony-woods-2.jpeg",
  },
];

const Gallery = () => {
  useInViewAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Removed mobile detection - use responsive CSS instead for better performance

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, currentImageIndex]);

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <div className="relative isolate min-h-screen bg-white">
          <SEO
        title="Gallery"
        description="Explore our gallery—premium residential and commercial properties, integrated townships, luxury apartments, villas, and RERA-approved developments."
        keywords={["gallery", "properties", "portfolio", "residential", "commercial", "RERA approved", "DTCP", "HMDA", "townships", "apartments", "villas"]}
        image="/images/hero-whatsapp.jpg"
      />

      <div className="relative space-y-12 pb-12 md:space-y-24 md:pb-24">
        <section className="fade-up bg-white py-8 md:py-12 lg:py-24">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
            <div className="rounded-xl bg-white px-4 py-6 text-brand md:rounded-2xl md:px-5 md:py-8 lg:rounded-3xl lg:px-8 lg:py-12">
              <div className="space-y-6 md:space-y-8 lg:space-y-10">
                <div className="space-y-4 md:grid md:grid-cols-2 md:items-center md:gap-6 md:space-y-0 lg:flex lg:justify-between">
                  <div className="max-w-2xl space-y-2 md:space-y-3 lg:space-y-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand/60 md:text-[11px] md:tracking-[0.4em]">
                      Project Gallery
                    </p>
                    <h2 className="text-xl font-semibold leading-tight text-brand md:text-2xl lg:text-3xl xl:text-4xl">
                      A glimpse into our portfolio of premium properties.
                    </h2>
                    <p className="text-xs text-brand/70 md:text-sm lg:text-base">
                      Discover a breadth of RERA-approved residential properties, integrated townships, luxury apartments, villas, and commercial complexes—all engineered for lifetime value and strategic locations.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand/60 md:gap-3 md:text-[11px]">
                    <span className="rounded-full border border-brand/20 bg-brand/5 px-2.5 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2">
                      Show All
                    </span>
                    <span className="rounded-full border border-brand/20 bg-brand/5 px-2.5 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2">
                      Residential
                    </span>
                    <span className="rounded-full border border-brand/20 bg-brand/5 px-2.5 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2">
                      Commercial
                    </span>
                    <span className="rounded-full border border-brand/20 bg-brand/5 px-2.5 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2">
                      Townships
                    </span>
                  </div>
                </div>

                <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-4 md:gap-6 lg:grid-cols-3">
                  {galleryImages.map((item, index) => (
                    <figure
                      key={item.title}
                      className="relative overflow-hidden rounded-xl bg-white ring-1 ring-brand/10 cursor-pointer transition-transform duration-300 hover:scale-105 md:rounded-2xl lg:rounded-3xl"
                      onClick={() => openModal(index)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-brand/5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover"
                          loading={index < 3 ? "eager" : "lazy"}
                          decoding="async"
                          fetchPriority={index < 3 ? "high" : "low"}
                          onError={(e) => {
                            e.target.src = "/images/construction-premium.avif";
                          }}
                          onLoad={(e) => {
                            e.target.style.opacity = "1";
                            e.target.style.display = "block";
                          }}
                          style={{ display: "block", opacity: 1 }}
                        />
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fade-up mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 pb-12 text-center text-brand md:gap-6 md:px-6 md:pb-24 lg:px-8">
          <SectionHeading
            eyebrow="Need a Custom Walkthrough?"
            title="Request a personalized presentation of relevant case studies."
            description="Share your project goals and we'll curate a detailed deck with floor plans, finishes, and investment breakdowns tailored to your requirements."
            tone="light"
          />
          <Link
            to="/contact"
            className="rounded-full border border-brand px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-brand transition hover:bg-brand hover:text-white md:px-8 md:py-3 md:text-sm"
          >
            Schedule A Presentation
          </Link>
        </section>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:top-6 md:right-6 md:h-12 md:w-12"
            aria-label="Close modal"
          >
            <HiX className="h-6 w-6 md:h-7 md:w-7" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-6 md:h-12 md:w-12"
            aria-label="Previous image"
          >
            <HiChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6 md:h-12 md:w-12"
            aria-label="Next image"
          >
            <HiChevronRight className="h-6 w-6 md:h-7 md:w-7" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-h-[90vh] max-w-[90vw] px-12 md:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[currentImageIndex].image}
              alt={galleryImages[currentImageIndex].title}
              className="max-h-[90vh] max-w-full object-contain"
              loading="eager"
              decoding="async"
              onError={(e) => {
                e.target.src = "/images/construction-premium.avif";
              }}
            />
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded-lg bg-black/50 px-4 py-2 text-center text-white backdrop-blur-sm md:bottom-6">
              <p className="text-xs font-semibold md:text-sm">
                {galleryImages[currentImageIndex].title}
              </p>
              <p className="text-[10px] text-white/80 md:text-xs">
                {currentImageIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

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

export default Gallery;


