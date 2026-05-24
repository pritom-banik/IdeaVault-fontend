import React from "react";
import HeroIdeaCard from "./HeroIdeaCard";
import Searchbox from "./Searchbox";
import { NormalButton } from "./Button";
import CategorySearch from "./CategorySearch";
import Loadingcard from "./Loadingcard";

const AllIdeas = ({
  data,
  setSearchTitle,
  setShowAllIdea,
  setSearchCategories,
  allCategories,
  searchcategories,
  isLoading
}) => {
  return (
    <>
      <Searchbox setSearchTitle={setSearchTitle}></Searchbox>
      <CategorySearch allCategories={allCategories} searchcategories={searchcategories} setSearchCategories={setSearchCategories}></CategorySearch>
      {
         isLoading ?(<Loadingcard></Loadingcard>):
        (<div className="max-w-6xl mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 justify-items-center mx-1">
          {data.map((idea) => (
            <HeroIdeaCard key={idea._id} idea={idea}></HeroIdeaCard>
          ))}
        </div>
      </div> )
      }
      
    </>
  );
};

export default AllIdeas;
