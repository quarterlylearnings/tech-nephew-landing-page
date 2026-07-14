import { service } from "@/lib/content";

export function Service() {
  return (
    <section className="relative overflow-hidden bg-panel py-12 pb-[52px] text-panel-ink">
      <div className="absolute -top-[130px] -right-[130px] h-[340px] w-[340px] rounded-full border-[36px] border-accent opacity-[0.28]" />
      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-[clamp(24px,6vw,80px)] md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div>
          <h2 className="my-5 text-balance text-[clamp(28px,4vw,50px)] leading-[1.06]">
            {service.heading}
          </h2>
          <p className="text-[clamp(16px,1.5vw,19px)] leading-[1.7]">{service.body}</p>
          <div className="mt-[26px] flex flex-wrap gap-[10px]">
            {service.pills.map((pill) => (
              <span
                key={pill}
                className="min-w-[100px] flex-1 rounded-full border-[1.5px] border-ink bg-bg px-[14px] py-[10px] text-center text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink md:flex-initial"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div className="medallion flex justify-center">
          <div className="disc">
            <div className="r0" />
            <div className="r1" />
            <div className="r2" />
            <div className="r3">
              {service.medallion[0]}
              <br />
              {service.medallion[1]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
