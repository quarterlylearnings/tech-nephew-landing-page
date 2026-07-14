import { Masthead } from "@/components/Masthead";
import { SunArc } from "@/components/SunArc";
import { Hero } from "@/components/Hero";
import { Empathy } from "@/components/Empathy";
import { Service } from "@/components/Service";
import { Problems } from "@/components/Problems";
import { Bio } from "@/components/Bio";
import { Steps } from "@/components/Steps";
import { Testimonials } from "@/components/Testimonials";
import { EmailSignup } from "@/components/EmailSignup";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <Masthead />
      <SunArc />
      <Hero />
      <Empathy />
      <Service />
      <Problems />
      <Bio />
      <Steps />
      <Testimonials />
      <EmailSignup />
      <SiteFooter />
    </>
  );
}
