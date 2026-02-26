import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { Moodboard } from "@/components/sections/Moodboard";
import { Audit } from "@/components/sections/Audit";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <HowItWorks />
      <WhatYouGet />
      <Moodboard />
      <Audit />
      <FAQ />
      <Footer />
    </main>
  );
}
