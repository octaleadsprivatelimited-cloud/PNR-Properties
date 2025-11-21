import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { contactDetails } from "../data/siteContent";
import { FaEnvelopeOpenText, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import useInViewAnimation from "../hooks/useInViewAnimation";

const backgroundImage =
  "https://images.unsplash.com/photo-1505843439830-21f06caa06e1?auto=format&fit=crop&w=2000&q=80";

const Contact = () => {
  useInViewAnimation();

  const quickFacts = [
    {
      label: "Response Time",
      value: "< 24 Hrs",
      detail: "Dedicated client success desk",
    },
    {
      label: "Delivery Footprint",
      value: "7 Cities",
      detail: "Pan-India turnkey expertise",
    },
    {
      label: "Experience Modules",
      value: "40+",
      detail: "Curated walkthrough playbooks",
    },
    {
      label: "Vendor Ecosystem",
      value: "60+",
      detail: "Certified trade & OEM partners",
    },
  ];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`;
  const googleMapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(contactDetails.address)}&output=embed`;

  return (
    <div className="relative isolate min-h-screen bg-white">
      <SEO
        title="Contact"
        description="Contact PNR Properties for property inquiries, site visits, and consultations on our premium real estate developments."
        keywords={["contact", "consultation", "proposal", "site visit", "phone", "email"]}
        image="/images/hero-whatsapp.jpg"
      />

      <div className="relative space-y-12 pb-12 md:space-y-24 md:pb-24">
        <PageHero
          title="Connect With Our Team"
          description="We're ready to collaborate on your next residential, commercial, or turnkey project."
          background={backgroundImage}
        />

        <section className="fade-up mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 text-brand">
          <div className="rounded-2xl bg-white px-5 py-8 md:rounded-3xl md:px-6 md:py-12 lg:px-10">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-center md:gap-8">
              <div className="space-y-4 md:space-y-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand/60 md:text-[11px] md:tracking-[0.4em]">
                  Contact Us
                </p>
                <h2 className="text-2xl font-semibold leading-tight text-brand md:text-3xl lg:text-4xl">
                  Schedule a site visit, design consultation, or discovery workshop.
                </h2>
                <p className="max-w-2xl text-xs text-brand/70 md:text-sm lg:text-base">
                  Share a few project details and our consultants will align the right team—architecture, interior experience, procurement, and on-site execution—to move your brief forward.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand/60 md:gap-3 md:text-[11px]">
                  <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5 md:px-4 md:py-2">
                    Site Visits
                  </span>
                  <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5 md:px-4 md:py-2">
                    Design Consults
                  </span>
                  <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5 md:px-4 md:py-2">
                    Project Estimates
                  </span>
                  <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5 md:px-4 md:py-2">
                    Vendor Alignments
                  </span>
                </div>
              </div>
              <div className="grid gap-3 grid-cols-2 md:gap-4">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl bg-[#f8fafc] p-4 text-brand md:rounded-3xl md:p-5"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand/60 md:text-[11px]">
                      {fact.label}
                    </p>
                    <p className="mt-1.5 text-lg font-semibold text-brand md:mt-2 md:text-2xl">{fact.value}</p>
                    <p className="mt-1.5 text-[10px] text-brand/65 md:mt-2 md:text-xs">{fact.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 grid gap-8 md:mt-12 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
              <div className="space-y-5 md:space-y-6">
                {[
                  {
                    icon: <FaPhoneAlt />,
                    title: "Call Us",
                    content: (
                      <div className="mt-2 space-y-1.5 text-xs text-brand/70 md:space-y-2 md:text-sm">
                        <p>
                          Primary:{" "}
                          <a href={`tel:${contactDetails.phonePrimary}`} className="text-brand hover:text-brand-accent">
                            {contactDetails.phonePrimary}
                          </a>
                        </p>
                        <p>
                          Projects:{" "}
                          <a href={`tel:${contactDetails.phoneSecondary}`} className="text-brand hover:text-brand-accent">
                            {contactDetails.phoneSecondary}
                          </a>
                        </p>
                      </div>
                    ),
                  },
                  {
                    icon: <FaEnvelopeOpenText />,
                    title: "Email",
                    content: (
                      <p className="mt-2 text-xs text-brand/70 md:text-sm">
                        Send your project brief to{" "}
                        <a href={`mailto:${contactDetails.email}`} className="text-brand hover:text-brand-accent">
                          {contactDetails.email}
                        </a>
                      </p>
                    ),
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    title: "Studio",
                    content: (
                      <p className="mt-2 text-xs text-brand/70 md:text-sm">
                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand hover:text-brand-accent underline-offset-4 hover:underline"
                        >
                          {contactDetails.address}
                        </a>
                      </p>
                    ),
                  },
                  {
                    icon: <FaClock />,
                    title: "Working Hours",
                    content: (
                      <p className="mt-2 text-xs text-brand/70 md:text-sm">{contactDetails.workHours}</p>
                    ),
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="group relative overflow-hidden rounded-2xl bg-[#f8fafc] p-4 text-brand transition duration-500 hover:-translate-y-2 md:rounded-3xl md:p-6"
                  >
                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand/5 blur-2xl transition duration-500 group-hover:bg-brand/10" />
                    <div className="relative flex items-start gap-3 md:gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/15 bg-white text-base text-brand md:h-12 md:w-12">
                        {card.icon}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-brand md:text-lg">{card.title}</h3>
                        {card.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-5 rounded-2xl bg-[#f8fafc] p-5 text-brand md:rounded-3xl md:space-y-6 md:p-8">
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand/60 md:text-[11px] md:tracking-[0.35em]">
                    Project Inquiry
                  </p>
                  <h3 className="text-lg font-semibold text-brand md:text-xl">Let's co-create your next environment.</h3>
                  <p className="text-xs text-brand/70 md:text-sm">
                    Outline requirements, scope, and budget triggers. Our team will respond with a tailored roadmap and discovery call slots.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="fade-up mx-auto w-full max-w-6xl px-4 pb-12 text-brand md:px-6 md:pb-24 lg:px-8">
          <div className="rounded-2xl bg-white px-5 py-8 md:rounded-3xl md:px-6 md:py-12 lg:px-10">
            <SectionHeading
              eyebrow="Visit Us"
              title="Our office is located in Abdullahpurmet, Hyderabad."
              tone="light"
            />
            <div className="mt-6 overflow-hidden rounded-2xl md:mt-8 md:rounded-3xl">
              <iframe
                title="PNR Properties"
                src={googleMapsEmbedSrc}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="md:h-[450px]"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

