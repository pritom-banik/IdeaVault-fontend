"use client";
import Image from "next/image";
import React from "react";
import { NormalButton } from "./Button";

const getSafeImage = (url) => {
  if (!url) return "/card-pic.png";

  const clean = url.trim();

  const isValid =
    clean.startsWith("http://") ||
    clean.startsWith("https://") ||
    clean.startsWith("/");

  return isValid ? clean : "/card-pic.png";
};

const HeroIdeaCard = ({ idea }) => {
  return (
    <div
      key={idea._id}
      className="group w-[320px] overflow-hidden rounded-none border-4 border-black bg-[#ff66a3] shadow-[8px_8px_0_#000] transition-all duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_0_#000]"
    >
      
      <div className="border-b-4 border-black bg-[#fff36d] px-3 py-1">
        <h2 className="text-xl font-black uppercase tracking-wide text-black">
          {idea.title}
        </h2>
      </div>

      
      <div className="relative border-b-4 border-black bg-[#9c9c9c] dark:bg-[#cecece]">
        <Image
          src={getSafeImage(idea.imageUrl)}
          alt={`${idea.title} solution image`}
          width={100}
          height={200}
          className="w-full h-50 object-cover"
        />

        
        <div className="absolute left-3 top-3 border-2 text-black border-black bg-cyan-300 p-1 text-xs font-extrabold uppercase shadow-[3px_3px_0_#000]">
          {idea.category}
        </div>
      </div>

     
      <div className="space-y-4 p-2 text-black">
        
        <div className="border-2 border-black bg-white p-2 shadow-[4px_4px_0_#000]">
          <h3 className="mb-2 text-sm font-black uppercase">Problem</h3>

          <p className="line-clamp-3 text-sm font-medium leading-relaxed">
            {idea.problemStatement}
          </p>
        </div>

        
        <div className="border-2 border-black bg-[#caffbf] p-2 shadow-[4px_4px_0_#000]">
          <h3 className="mb-2 text-sm font-black uppercase">
            Proposed Solution
          </h3>

          <p className="line-clamp-4 text-sm font-medium leading-relaxed">
            {idea.shortDescription}
          </p>
        </div>

        
        <div className=" cursor-pointer">
          <NormalButton>View Details</NormalButton>
        </div>
      </div>
    </div>
  );
};

export default HeroIdeaCard;
