import Hero from "@/components/Hero";
import HeroCardSection from "@/components/HeroCardSection";
import HeroIdeaCard from "@/components/HeroIdeaCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="my-10 mx-auto max-w-6xl">
      <Hero></Hero>
      <HeroCardSection></HeroCardSection>
    </div>
  );
}
