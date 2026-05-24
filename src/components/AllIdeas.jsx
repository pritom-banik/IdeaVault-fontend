import React from "react";
import HeroIdeaCard from "./HeroIdeaCard";
import Searchbox from "./Searchbox";

const AllIdeas = ({
  data,
  setSearchTitle,
  setShowAllIdea,
  setSearchCategories,
}) => {
  return (
    <>
      <Searchbox setSearchTitle={setSearchTitle}></Searchbox>
      <div className="max-w-6xl mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 justify-items-center mx-1">
          {data.map((idea) => (
            <HeroIdeaCard key={idea._id} idea={idea}></HeroIdeaCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllIdeas;
