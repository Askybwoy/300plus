import { Hero } from "@/components/sections/Hero";
import { EntryCards } from "@/components/sections/EntryCards";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Moodboard } from "@/components/sections/Moodboard";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { SocialProof } from "@/components/sections/SocialProof";
import { Audit } from "@/components/sections/Audit";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-black">
      <Hero />
      <EntryCards />
      {/* White background zone */}
      <div className="bg-white">
        <ProcessSection />
        <HowItWorks />
        <Moodboard />
        <WhatYouGet />
        <SocialProof />
        <Audit />
        <PricingSection />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
