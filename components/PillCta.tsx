export function PillCta({ label, href }: { label: string; href: string }) {
  return (
    <a
      className="inline-flex items-center gap-2 rounded-full bg-accent px-[30px] py-4 text-[15px] font-bold uppercase tracking-[0.04em] text-bg no-underline transition-colors hover:bg-ink hover:text-bg"
      href={href}
      target="_blank"
      rel="noopener"
    >
      {label}
    </a>
  );
}
