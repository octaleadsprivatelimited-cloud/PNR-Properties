import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { contactDetails } from "../data/siteContent";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4 md:px-8">
        <div className="space-y-4">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="text-xl font-semibold uppercase tracking-[0.1em] text-white md:text-2xl">PNR Properties</span>
          </NavLink>
          <p className="text-sm leading-relaxed text-white/70">
            PNR Properties - Trusted real estate developers specializing in DTCP, HMDA, and RERA approved properties. We develop premium JB's branded integrated townships, luxury apartments, villas, and commercial complexes with world-class amenities across Telangana.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
            Quick Links
          </h3>
          <nav className="flex flex-col gap-3 text-sm text-white/70">
            <NavLink to="/" className="transition hover:text-white">
              Home
            </NavLink>
            <NavLink to="/about" className="transition hover:text-white">
              About
            </NavLink>
            <NavLink to="/services" className="transition hover:text-white">
              Services
            </NavLink>
            <NavLink to="/gallery" className="transition hover:text-white">
              Gallery
            </NavLink>
            <NavLink to="/contact" className="transition hover:text-white">
              Contact
            </NavLink>
          </nav>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <span className="font-semibold text-white">Phone:</span>{" "}
              <a href={`tel:${contactDetails.phonePrimary}`} className="hover:text-white">
                {contactDetails.phonePrimary}
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a href={`mailto:${contactDetails.email}`} className="hover:text-white">
                {contactDetails.email}
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Office:</span> {contactDetails.address}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
            Follow Us
          </h3>
          <p className="mb-4 text-sm text-white/70">
            Stay connected for design inspiration, project updates, and behind-the-scenes
            stories.
          </p>
          <div className="flex items-center gap-3 text-brand">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-accent"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-accent"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-accent"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={`https://wa.me/${contactDetails.phonePrimary.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-accent"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/60 md:flex-row md:px-8">
          <p>© {currentYear} PNR Properties. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://www.octaleads.com"
              target="_blank"
              rel="noreferrer"
              className="text-brand-accent transition hover:text-white hover:underline"
            >
              Octaleads Private Limited
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

