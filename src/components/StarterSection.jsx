import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const StarterSection = () => {
  return (
    <div className="flex flex-col justify-between items-center my-10">
      <div className=" flex flex-col justify-center items-center  bg-[#ff66a3] w-full p-3 border-2 border-black my-10 shadow-[8px_8px_0_#000]">
        <h1 className="text-3xl text-black text-center font-bold">How IdeaVault Works</h1>
        <h2 className="text-xl text-black text-center ">
          Share your ideas, receive valuable feedback, and turn concepts into
          opportunities—all in just three simple steps.
        </h2>
      </div>

      <Marquee pauseOnHover={true}>
        <div
          className="flex items-center justify-between gap-6 w-[600px] h-[220px] border-4 border-black bg-gradient-to-r from-[#ff66a3] via-yellow-100 to-[#e3c8d3] px-12 py-6 shadow-[8px_8px_0_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0px_#000]"
          style={{
            clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0% 100%)",
          }}
        >
          {/* Text Side */}
          <div className="flex-1 space-y-3 pl-4">
            <h2 className="text-3xl font-black text-black">Share Your Idea</h2>

            <p className="text-sm leading-6 font-medium text-gray-800">
              Publish your startup concept with a clear description, target
              audience, and proposed solution so others can understand your
              vision.
            </p>
          </div>

          {/* Image Side */}
          <div className="flex-shrink-0 pr-4">
            <Image
              src="/idea-share.png"
              alt="idea-share.png"
              width={180}
              height={180}
              className="drop-shadow-[5px_5px_0px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        <div
          className="flex items-center justify-between gap-6 w-[600px] h-[220px] border-4 border-black bg-gradient-to-r from-[#ff66a3] via-yellow-100 to-[#e3c8d3] px-12 py-6 shadow-[8px_8px_0_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0px_#000]"
          style={{
            clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0% 100%)",
          }}
        >
          {/* Text Side */}
          <div className="flex-1 space-y-3 pl-4">
            <h2 className="text-3xl font-black text-black">
              Get Community Feedback
            </h2>

            <p className="text-sm leading-6 font-medium text-gray-800">
              Receive comments, suggestions, and constructive insights from
              entrepreneurs, creators, and innovators in the community.
            </p>
          </div>

          {/* Image Side */}
          <div className="flex-shrink-0 pr-4">
            <Image
              src="/community-feedback.png"
              alt="community-feedback.png"
              width={180}
              height={180}
              className="drop-shadow-[5px_5px_0px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        <div
          className="flex items-center justify-between gap-6 w-[600px] h-[220px] border-4 border-black bg-gradient-to-r from-[#ff66a3] via-yellow-100 to-[#e3c8d3] px-12 py-6 shadow-[8px_8px_0_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0px_#000]"
          style={{
            clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0% 100%)",
          }}
        >
          {/* Text Side */}
          <div className="flex-1 space-y-3 pl-4">
            <h2 className="text-3xl font-black text-black">Refine & Grow</h2>

            <p className="text-sm leading-6 font-medium text-gray-800">
              Improve your idea using real feedback, validate your concept, and
              take the next step toward building something impactful.
            </p>
          </div>

          {/* Image Side */}
          <div className="flex-shrink-0 pr-4">
            <Image
              src="/refine-and-grow.png"
              alt="refine-and-grow.png"
              width={180}
              height={180}
              className="drop-shadow-[5px_5px_0px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default StarterSection;
