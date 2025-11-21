import Slider from "react-slick";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "../data/siteContent";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "ease-in-out",
    appendDots: (dots) => (
      <div>
        <ul className="mt-6 flex items-center justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button type="button">
        <span className="testimonial-dot block h-2 w-8 rounded-full bg-white/25 transition-all duration-300" />
      </button>
    ),
  };

  return (
    <div className="testimonial-slider -mx-3 text-brand md:-mx-4">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="px-3 md:px-4">
            <article className="relative h-full overflow-hidden rounded-3xl bg-[#f8fafc] px-6 py-8 text-brand shadow-none">
              <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-brand-accent/15 blur-3xl" />

              <div className="relative flex flex-col gap-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand/10 bg-white text-brand shadow-[0_12px_35px_rgba(15,23,42,0.1)]">
                  <FaQuoteLeft className="text-lg text-brand" />
                </span>

                <div className="flex items-center gap-1 text-brand-accent">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} className="text-sm" />
                  ))}
                  <span className="ml-2 text-xs uppercase tracking-[0.32em] text-brand/50">
                    Client Score
                  </span>
                </div>

                <p className="text-base leading-relaxed text-brand/80">{testimonial.quote}</p>

                <div className="flex items-center gap-4 border-t border-brand/10 pt-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full border border-brand/15 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand/70">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.28em] text-brand/50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;

