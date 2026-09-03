import { CTA } from "@/src/components/CTA";
import { FAQ } from "@/src/components/FAQ";
import { Features } from "@/src/components/Features";
import { Footer } from "@/src/components/Footer";
import { Hero } from "@/src/components/Hero";
import { HowItWorks } from "@/src/components/HowItWorks";
import { Navbar } from "@/src/components/Navbar";
import { Pricing } from "@/src/components/Pricing";
import { Showcase } from "@/src/components/Showcase";
import { StatsBar } from "@/src/components/StatsBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink-50 font-sans text-ink-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <Showcase />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
