import { FaWhatsapp } from "react-icons/fa";
import { contactDetails } from "../data/siteContent";

const WhatsAppFloat = () => {
  // Prefilled message
  const message = encodeURIComponent(
    "Hello! I'm interested in learning more about your premium RERA-approved properties. Could you please provide more information?"
  );
  
  const phoneNumber = contactDetails.phonePrimary.replace(/\s+/g, "");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] md:bottom-8 md:right-8 md:h-16 md:w-16"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
      
      {/* Tooltip on hover */}
      <div className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-brand px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
        Chat with us on WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-brand" />
      </div>
    </a>
  );
};

export default WhatsAppFloat;

