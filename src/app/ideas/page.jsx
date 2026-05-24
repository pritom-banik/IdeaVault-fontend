import AllIdeas from "@/components/AllIdeas";
import IdeaApiCall from "@/components/IdeaApiCall";
import Loadingcard from "@/components/Loadingcard";
import React, { Suspense } from "react";

const Ideas = async() => {
// const param=await searchParams;
// const title=param?.title||"";

  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-around items-center">
      <div className="text-center max-w-3xl mt-5">
        <h1 className="text-3xl md:text-4xl font-black text-black dark:text-white">
          The Next Big Startup Might Be Here
        </h1>
      </div>

      <div className="w-full h-px bg-black dark:bg-gray-300 my-4"></div>
      
  <Suspense fallback={<Loadingcard />}>
        <IdeaApiCall></IdeaApiCall>
      </Suspense>
      
    </div>
  );
};

export default Ideas;
