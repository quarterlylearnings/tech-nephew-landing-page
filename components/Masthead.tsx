import { site } from "@/lib/content";

export function Masthead({ tagline }: { tagline?: string }) {
  return (
    <header className="px-[clamp(24px,6vw,80px)] pt-[26px] pb-2 text-center">
      <div className="font-heading text-[19px]">{site.name}</div>
      {tagline && (
        <div className="mt-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          {tagline}
        </div>
      )}
    </header>
  );
}
