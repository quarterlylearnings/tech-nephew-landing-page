import type { Metadata } from "next";
import { Masthead } from "@/components/Masthead";
import { SiteFooter } from "@/components/SiteFooter";
import { success, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `You're in! - ${site.name}`,
};

export default function SuccessPage() {
  return (
    <>
      <Masthead tagline={success.tagline} />

      <section className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-panel to-bg text-center">
        <div className="mx-auto max-w-[600px] px-8 py-12">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-accent shadow-[0_8px_24px_rgba(191,58,43,0.3)]">
            <svg className="h-10 w-10 text-bg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>

          <h1 className="mb-4 text-[2.5rem] font-extrabold leading-tight text-ink">
            {success.title}
          </h1>
          <p className="mb-8 text-[1.3rem] font-medium text-ink-soft">{success.subtitle}</p>

          <div className="my-8 rounded-2xl border-l-4 border-accent bg-white p-10 text-left shadow-[0_4px_20px_rgba(191,58,43,0.15)]">
            <h3 className="mb-6 text-[1.4rem] font-bold text-ink">What happens next:</h3>
            <ul className="list-none space-y-6 p-0">
              {success.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex items-start gap-4 rounded-lg border-l-[3px] border-accent bg-[#fefbf7] p-4"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-[0.9rem] font-semibold text-bg">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 font-semibold text-ink">{step.title}</div>
                    <div className="text-[0.95rem] leading-relaxed text-ink">{step.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative my-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#e1306c] to-[#c13584] p-10 text-center text-white">
            <div className="relative z-[2]">
              <div className="mx-auto mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-white/20">
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3 className="mb-4 text-[1.6rem] font-bold">{success.instagram.heading}</h3>
              <p className="mb-8 text-[1.1rem] leading-relaxed opacity-95">
                {success.instagram.body}
              </p>
              <a
                href={success.instagram.href}
                target="_blank"
                rel="noopener"
                className="inline-block rounded-lg border-2 border-white/30 bg-white/20 px-8 py-[0.9rem] text-[1.1rem] font-semibold text-white no-underline backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/30"
              >
                Follow {success.instagram.handle}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="my-8 text-center">
        <a className="text-[1.1rem] font-medium text-accent no-underline hover:underline" href={success.backLink.href}>
          {success.backLink.label}
        </a>
      </div>

      <SiteFooter />
    </>
  );
}
