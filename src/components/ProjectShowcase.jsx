import Slider from "react-slick";
import { projectShowcase } from "../data/siteContent";

const ProjectShowcase = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5500,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="-mx-4 md:-mx-6">
      <Slider {...settings}>
        {projectShowcase.map((project) => (
          <div key={project.title} className="px-2 md:px-6">
            <article className={`group relative overflow-hidden rounded-3xl border bg-white shadow-[0_24px_50px_rgba(10,32,51,0.12)] transition duration-500 ${
              project.launchingSoon
                ? "border-2 border-brand-accent shadow-[0_24px_50px_rgba(6,167,215,0.3)] ring-2 ring-brand-accent/20"
                : "border-brand/10"
            }`}>
              {project.launchingSoon && (
                <div className="absolute top-0 right-0 z-20 bg-brand-accent text-white px-4 py-1.5 rounded-bl-3xl">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Launching Soon</span>
                </div>
              )}
              <div className="relative h-64 overflow-hidden md:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand md:left-6 md:top-6 md:px-4">
                  {project.category}
                </span>
                {project.launchingSoon && project.launchDate && (
                  <span className="absolute bottom-4 left-4 right-4 rounded-lg bg-brand-accent/95 text-white px-3 py-2 text-xs font-semibold text-center">
                    Launch: {project.launchDate}
                  </span>
                )}
              </div>
              <div className="space-y-3 p-6 md:space-y-4 md:p-8">
                <h3 className={`text-xl font-semibold md:text-2xl ${project.launchingSoon ? "text-brand-accent" : "text-brand"}`}>
                  {project.title}
                </h3>
                {project.location && (
                  <p className="text-xs text-brand/60 font-medium md:text-sm">
                    📍 {project.location}
                  </p>
                )}
                <p className="text-sm leading-relaxed text-brand/70">{project.description}</p>
              </div>
            </article>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectShowcase;

