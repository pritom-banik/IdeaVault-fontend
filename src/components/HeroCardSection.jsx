import React from "react";
import HeroIdeaCard from "./HeroIdeaCard";


const HeroCardSection = async () => {
  const popularIdeas = await fetch(
    `${process.env.API_ENDPOINT}/ideas/getpopular`,
  );
  const ideas = await popularIdeas.json();
  return (
    <div className="flex flex-col justify-between items-center my-10">
      
      <div className="text-center max-w-3xl space-y-4 my-5">

          <div className="inline-block bg-black text-white px-5 py-2 text-sm font-bold border-2 border-black shadow-[4px_4px_0px_#ff66a3] rotate-[-2deg]">
             TRENDING
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white">
            Ideas Everyone Is Talking About
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-7 dark:text-white">
            Explore the most discussed, appreciated, and rapidly growing startup concepts from our community of innovators.
          </p>
        </div>


    <div className="flex flex-wrap gap-5 justify-center items-center mx-1">  
      {ideas.map((idea) => <HeroIdeaCard key={idea._id} idea={idea}></HeroIdeaCard>)}
    </div>
    </div>
  );
};

export default HeroCardSection;
