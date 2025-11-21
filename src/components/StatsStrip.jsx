import { stats } from "../data/siteContent";

const StatsStrip = () => (
  <section className="mx-auto w-full max-w-6xl rounded-3xl bg-white px-5 py-12 text-brand md:px-10">
    <div className="grid gap-6 md:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="group rounded-3xl bg-white p-6 text-center ring-1 ring-brand/10 transition duration-300 hover:-translate-y-1 hover:ring-brand/30 md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
            <span className="mx-3 rounded-full bg-brand/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand/70">
              {item.label.split(" ")[0]}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-brand/30 to-transparent" />
          </div>
          <p className="mt-6 text-4xl font-semibold text-brand md:text-5xl">{item.value}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-brand/60">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsStrip;

