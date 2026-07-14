import { hero } from "@/lib/content";
import { HeadingLines } from "./HeadingLines";
import { PillCta } from "./PillCta";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1180px] px-[clamp(24px,6vw,80px)] pt-[10px] pb-14 text-center md:pt-6 md:pb-[76px]">
      <h1 className="mx-auto my-[22px] max-w-[960px] text-balance text-[clamp(38px,7vw,88px)] leading-[1.02]">
        <HeadingLines parts={hero.heading} />
      </h1>
      <p className="mx-auto mb-[26px] max-w-[560px] text-[clamp(16px,1.6vw,19px)] text-ink-soft">
        {hero.sub}
      </p>
      <PillCta label={hero.cta.label} href={hero.cta.href} />
      <div className="mt-4 text-[12.5px] uppercase tracking-[0.14em] text-ink-soft md:tracking-[0.16em]">
        {hero.micro}
      </div>
      <p className="mx-auto mt-3 max-w-[440px] text-[13.5px] text-ink-soft">{hero.trust}</p>
    </section>
  );
}
