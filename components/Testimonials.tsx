import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="bg-panel pt-10 pb-14 text-panel-ink">
      <div className="mx-auto max-w-[1180px] px-[clamp(24px,6vw,80px)]">
        <h2 className="text-[clamp(24px,3.4vw,36px)] leading-[1.1]">From recent sessions</h2>
        <div className="mt-[26px] grid grid-cols-1 gap-[18px] md:grid-cols-2 md:gap-7">
          {testimonials.map((t, i) => (
            <div key={t.name} className="overflow-hidden rounded-[18px] border-[1.5px] border-ink bg-bg">
              <div
                className={`flex items-baseline justify-between px-[18px] py-3 text-[11.5px] font-bold uppercase tracking-[0.18em] ${
                  i % 2 === 0 ? "bg-accent text-bg" : "bg-dark text-dark-ink"
                }`}
              >
                <span>{t.name}</span>
                <span className="font-medium opacity-85">{t.meta}</span>
              </div>
              <blockquote
                className={`text-pretty m-0 px-5 pt-5 pb-[22px] font-heading text-[18px] font-medium leading-[1.42] text-ink ${
                  t.italic ? "italic" : ""
                }`}
              >
                {t.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
