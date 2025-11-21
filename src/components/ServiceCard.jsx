const ServiceCard = ({
  icon: Icon,
  image,
  title,
  description,
  highlights,
  variant = "default",
  showHighlights = true,
}) => {
  const isFrosted = variant === "frosted";

  const containerClasses = isFrosted
    ? "group flex h-full flex-col rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-[0_24px_60px_rgba(10,32,51,0.45)] backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-white/[0.18]"
    : "group flex h-full flex-col rounded-3xl border border-brand/10 bg-white/80 p-8 shadow-[0_18px_40px_rgba(10,32,51,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(10,32,51,0.14)]";

  const iconWrapperClasses = isFrosted
    ? "flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-brand-accent"
    : "flex h-14 w-14 items-center justify-center rounded-full bg-brand/5 text-brand";

  const titleClasses = isFrosted
    ? "mt-6 text-xl font-semibold text-white"
    : "mt-6 text-xl font-semibold text-brand";

  const descriptionClasses = isFrosted
    ? "mt-3 flex-1 text-sm text-white/75"
    : "mt-3 flex-1 text-sm text-brand/70";

  const highlightListClasses = isFrosted
    ? "mt-6 space-y-2 text-sm text-white/80"
    : "mt-6 space-y-2 text-sm text-brand/80";

  return (
    <article className={containerClasses}>
      {image ? (
        <div className="overflow-hidden rounded-2xl border border-brand/10">
          <img src={image} alt={title} className="h-52 w-full object-cover" loading="lazy" />
        </div>
      ) : (
        Icon && (
          <div className={iconWrapperClasses}>
            <Icon className="text-2xl" />
          </div>
        )
      )}
      <h3 className={titleClasses}>{title}</h3>
      <p className={descriptionClasses}>{description}</p>
      {highlights && showHighlights && (
        <ul className={highlightListClasses}>
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span
                className={`h-1.5 w-6 rounded-full transition-all duration-500 group-hover:w-8 ${
                  isFrosted ? "bg-white/60" : "bg-brand-accent"
                }`}
              />
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ServiceCard;

