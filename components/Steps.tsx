import { steps, hero } from "@/lib/content";
import { PillCta } from "./PillCta";

const badgeStyles = [
  "bg-accent text-bg",
  "border-2 border-ink bg-panel text-panel-ink",
  "bg-dark text-bg",
];

export function Steps() {
  return (
    <section className="mx-auto max-w-[1180px] px-[clamp(24px,6vw,80px)] pt-[52px] pb-[52px]">
      <h2 className="text-[clamp(24px,3.4vw,36px)] leading-[1.1]">How it works</h2>
      <div className="mt-[30px] grid grid-cols-1 gap-[26px] md:grid-cols-3 md:gap-11">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="flex items-start gap-[18px] md:flex-col md:items-center md:text-center"
          >
            <div
              className={`flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full font-heading text-[22px] md:h-24 md:w-24 md:text-[34px] ${badgeStyles[i]}`}
            >
              {step.num}
            </div>
            <div>
              <h3 className="text-[20px] leading-[1.15]">{step.title}</h3>
              <p className="mt-1.5 text-[15.5px] leading-[1.55] text-ink-soft">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[34px] text-center">
        <PillCta label={hero.cta.label} href={hero.cta.href} />
      </div>
    </section>
  );
}
