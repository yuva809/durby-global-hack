import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { Overview } from "@/components/sections/overview";
import { GlobalBridge } from "@/components/sections/global-bridge";
import { Challenge } from "@/components/sections/challenge";
import { Prizes } from "@/components/sections/prizes";
import { Timeline } from "@/components/sections/timeline";
import { HowToJoin } from "@/components/sections/how-to-join";
import { WhyJoin } from "@/components/sections/why-join";
import { WhatYouCanBuild } from "@/components/sections/what-you-can-build";
import { Judging } from "@/components/sections/judging";
import { Mentors } from "@/components/sections/mentors";
import { Resources } from "@/components/sections/resources";
import { Sponsors } from "@/components/sections/sponsors";
import { FaqSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <Overview />
        <GlobalBridge />
        <Challenge />
        <Prizes />
        <Timeline />
        <HowToJoin />
        <WhyJoin />
        <WhatYouCanBuild />
        <Judging />
        <Mentors />
        <Resources />
        <Sponsors />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
