import React from "react";
import { NormalButton } from "./Button";
import Image from "next/image";
import HeroIdeaCard from "./HeroIdeaCard";

const HeroCardSection = async () => {
  const popularIdeas = await fetch(
    `${process.env.API_ENDPOINT}/ideas/getpopular`,
  );
  const ideas = await popularIdeas.json();
  return (
    <div className="flex ">
    <div className="flex flex-wrap gap-5 justify-between items-center">
      {ideas.map((idea) => <HeroIdeaCard key={idea._id} idea={idea}></HeroIdeaCard>)}
    </div>
    </div>
  );
};

export default HeroCardSection;
