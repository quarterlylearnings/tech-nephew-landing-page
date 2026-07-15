import { bio } from "@/lib/content";
import Image from "next/image";

export function Bio() {
    return (
        <section className="relative overflow-hidden bg-dark py-[52px] pb-14 text-dark-ink">
            <div className="absolute -top-[130px] -right-[130px] h-[360px] w-[360px] rounded-full bg-accent opacity-[0.16]" />
            <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-[30px] px-[clamp(24px,6vw,80px)] text-center md:grid-cols-[280px_1fr] md:gap-14 md:text-left">
                <div className="flex justify-center">
                    <div className="bio-photo flex h-[268px] w-[220px] items-center justify-center overflow-hidden rounded-full border-2 border-dark-ink bg-panel p-5 text-center font-heading text-[15px] text-panel-ink md:h-[316px] md:w-[260px]">
                        <Image
                            src={bio.photoPath}
                            alt="Brandon Campbell-Kearns"
                            width={400}
                            height={400}
                            className="rounded-full"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="text-balance text-center text-[clamp(28px,4.4vw,54px)] leading-[1.04] md:text-left">
                        {bio.heading}
                    </h2>
                    <div className="flex flex-col md:flex-row md:gap-x-1.5 mt-[10px] mb-[18px] text-center text-[11.5px] font-semibold uppercase tracking-[0.2em] opacity-70">
                        <p className="">
                            {bio.byline}
                        </p>
                        <span className="text-accent">
                            <a href="https://linkedin.com/in/campbellkearns">
                                {bio.linkedInUrl}
                            </a>
                        </span>
                    </div>
                    <p className="mx-auto max-w-[720px] text-[clamp(16px,1.5vw,19px)] leading-[1.7] opacity-[0.94] md:mx-0 md:max-w-none">
                        {bio.body}
                    </p>
                </div>
            </div>
        </section>
    );
}
