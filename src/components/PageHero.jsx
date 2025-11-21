const PageHero = ({ title, description, background }) => {
  return (
    <section
      className="relative flex min-h-[35vh] items-center justify-center overflow-hidden bg-brand pt-20 text-white md:min-h-[45vh] md:pt-24"
      style={
        background
          ? {
              backgroundImage: `linear-gradient(rgba(10,32,51,0.7), rgba(10,32,51,0.8)), url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 text-center md:px-6 md:py-24 lg:px-8">
        <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent md:text-xs md:tracking-[0.4em]">PNR Properties</p>
        <h1 className="mt-3 text-2xl font-semibold md:mt-4 md:text-4xl lg:text-5xl">{title}</h1>
        {description && <p className="mt-4 text-sm text-white/70 md:mt-6 md:text-base lg:text-lg">{description}</p>}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand/40 via-brand/20 to-transparent" aria-hidden />
    </section>
  );
};

export default PageHero;

