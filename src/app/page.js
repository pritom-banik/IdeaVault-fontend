import Chart from "@/components/Chart";
import Hero from "@/components/Hero";
import HeroCardSection from "@/components/HeroCardSection";
import Loadingcard from "@/components/Loadingcard";
import StarterSection from "@/components/StarterSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="my-10 mx-auto max-w-6xl">
      <Hero></Hero>
      <StarterSection></StarterSection>
      <Suspense fallback={<Loadingcard/>}>
      <HeroCardSection />
    </Suspense>
    <Chart></Chart>
    </div>
  );
}
