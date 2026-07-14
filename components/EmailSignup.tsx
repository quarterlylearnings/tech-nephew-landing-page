import { emailSignup } from "@/lib/content";

export function EmailSignup() {
  return (
    <section className="relative overflow-hidden bg-ink py-12 pb-11 text-bg">
      <div className="absolute -bottom-[70px] -left-[70px] h-[220px] w-[220px] rounded-full border-[26px] border-accent opacity-[0.35]" />
      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-[clamp(24px,6vw,80px)] md:grid-cols-[1.2fr_1fr] md:items-center md:gap-14">
        <div>
          <h2 className="mt-[18px] mb-[14px] text-[clamp(28px,3.6vw,46px)] leading-[1.08]">
            {emailSignup.heading}
          </h2>
          <p className="mb-6 max-w-[540px] text-[15.5px] leading-[1.6] opacity-85 md:max-w-none">
            {emailSignup.sub}
          </p>
        </div>
        <div>
          <form
            className="max-w-[460px]"
            name="email-signup"
            method="POST"
            action="/success"
            data-netlify="true"
            {...{ "netlify-honeypot": "bot-field" }}
          >
            <input type="hidden" name="form-name" value="email-signup" />
            <input type="hidden" name="bot-field" />
            <input
              className="mb-3 w-full rounded-full border-[1.5px] border-bg bg-transparent px-[18px] py-4 font-body text-base text-bg outline-none placeholder:text-bg/55"
              type="email"
              name="email"
              placeholder={emailSignup.placeholder}
              required
            />
            <button
              className="w-full rounded-full border-none bg-accent px-[18px] py-4 font-body text-[15px] font-bold uppercase tracking-[0.06em] text-bg hover:bg-dark"
              type="submit"
            >
              {emailSignup.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
