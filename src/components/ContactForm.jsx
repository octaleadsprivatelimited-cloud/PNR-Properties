import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/movrpned";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Our team will connect with you within 24 hours.",
        });
        setFormState({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or call us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-brand/10 bg-white/95 p-8 shadow-[0_20px_45px_rgba(10,32,51,0.12)]"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/60">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="mt-2 w-full rounded-xl border border-brand/10 bg-white/70 px-4 py-3 text-sm text-brand shadow-inner focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/60">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="mt-2 w-full rounded-xl border border-brand/10 bg-white/70 px-4 py-3 text-sm text-brand shadow-inner focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/60">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            required
            placeholder="+91 83673 34555"
            className="mt-2 w-full rounded-xl border border-brand/10 bg-white/70 px-4 py-3 text-sm text-brand shadow-inner focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          />
        </div>
        <div>
          <label htmlFor="service" className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/60">
            Type of Project
          </label>
          <select
            id="service"
            name="service"
            value={formState.service}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-brand/10 bg-white/70 px-4 py-3 text-sm text-brand shadow-inner focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          >
            <option value="">Select service</option>
            <option value="residential">Residential Interiors</option>
            <option value="commercial">Commercial Interiors</option>
            <option value="turnkey">Turnkey Project</option>
            <option value="renovation">Renovation</option>
            <option value="consultation">Design Consultation</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/60">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Tell us about your space, budget, and timeline."
          className="mt-2 w-full rounded-xl border border-brand/10 bg-white/70 px-4 py-3 text-sm text-brand shadow-inner focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
        />
      </div>

      {status.type && (
        <p
          className={`text-sm ${
            status.type === "success" ? "text-green-600" : "text-red-500"
          }`}
        >
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="flex w-full items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition duration-300 hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending..." : "Submit Enquiry"}
      </button>

      <p className="text-xs text-brand/60">
        By submitting this form you agree to be contacted by our team. We typically respond
        within one business day.
      </p>
    </form>
  );
};

export default ContactForm;

