import { problems } from "@/lib/content";

export function Problems() {
  return (
    <section className="mx-auto max-w-[1180px] px-[clamp(24px,6vw,80px)] pt-[52px] pb-14">
      <h2 className="text-[clamp(24px,3.4vw,36px)] leading-[1.1]">What people ask about</h2>
      <div className="mt-[26px] grid grid-cols-1 gap-4 md:grid-cols-3">
        {problems.map((problem, i) => (
          <div
            key={problem.num}
            className={`problem-card relative rounded-[22px] border-[1.5px] border-ink px-5 pt-[18px] pb-4 ${
              i % 2 === 1 ? "bg-panel" : "bg-bg"
            }`}
          >
            <div className="absolute -top-3 left-[18px] flex h-6 w-[34px] items-center justify-center rounded-xl bg-accent text-[10.5px] font-bold tracking-[0.08em] text-bg">
              {problem.num}
            </div>
            <q className="mt-1.5 mb-2 block font-heading text-[18px] italic font-medium leading-[1.35]">
              {problem.quote}
            </q>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
              — {problem.who}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
