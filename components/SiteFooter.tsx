import { footer } from "@/lib/content";
import { HeadingLines } from "./HeadingLines";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-dark pt-[52px] pb-10 text-center text-dark-ink">
      <div className="absolute -top-[140px] left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-accent opacity-[0.18]" />
      <div className="relative mx-auto max-w-[1180px] px-[clamp(24px,6vw,80px)]">
        <div className="mb-[26px] text-[clamp(40px,8vw,110px)] leading-[0.96]">
          <HeadingLines parts={footer.tag} />
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-[11.5px] font-bold uppercase tracking-[0.2em] opacity-85">
          <a className="text-dark-ink no-underline hover:text-accent" href={footer.links.podcast.href}>
            {footer.links.podcast.label}
          </a>
          <a className="text-dark-ink no-underline hover:text-accent" href={footer.links.contact.href}>
            {footer.links.contact.label}
          </a>
        </nav>
        <div className="mt-[22px] text-[11.5px] opacity-70">{footer.familyNote}</div>
        <div className="mt-[10px] text-[11px] tracking-[0.1em] opacity-60">{footer.copyright}</div>
      </div>
    </footer>
  );
}
