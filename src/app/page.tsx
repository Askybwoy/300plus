import { Hero } from "@/components/sections/Hero";
import { EntryCards } from "@/components/sections/EntryCards";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { PricingSection } from "@/components/sections/PricingSection";
import { Moodboard } from "@/components/sections/Moodboard";
import { Audit } from "@/components/sections/Audit";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-black">
      <Hero />
      <EntryCards />
      {/* White background zone */}
      <div className="bg-white">
        <HowItWorks />
        <WhatYouGet />
        <PricingSection />
      </div>
      {/* Back to white for approach */}
      <div className="bg-white">
        <Moodboard />
      </div>
      <Audit />
      <FAQ />
      <Footer />
    </main>
  );
}
