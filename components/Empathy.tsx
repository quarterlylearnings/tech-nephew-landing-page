import { empathy } from "@/lib/content";

export function Empathy() {
  return (
    <section className="mx-auto max-w-[1180px] px-[clamp(24px,6vw,80px)] pt-2 pb-14">
      <p className="mx-auto mt-[22px] max-w-[900px] text-pretty font-heading text-[clamp(20px,2.6vw,30px)] font-medium leading-[1.42]">
        {empathy.body}
        <em className="italic text-accent">{empathy.emphasis}</em>
      </p>
    </section>
  );
}
