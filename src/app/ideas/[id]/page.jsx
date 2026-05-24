import Image from "next/image";

export default function IdeaDetails({ idea }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">

      {/* HEADER CARD */}
      <div className="border-4 border-black shadow-[10px_10px_0px_#000] bg-gradient-to-r from-[#ff66a3] via-yellow-100 to-cyan-100 p-8">

        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">

          {/* TEXT */}
          <div className="space-y-4 flex-1">
            <h1 className="text-4xl font-black text-black">
              {idea.title}
            </h1>

            <p className="text-lg font-medium text-black/80">
              {idea.shortDescription}
            </p>

            {/* META */}
            <div className="flex flex-wrap gap-3 text-sm font-bold">
              <span className="bg-black text-white px-3 py-1 border-2 border-black">
                {idea.category}
              </span>

              <span className="bg-white border-2 border-black px-3 py-1">
                👀 {idea.views} views
              </span>

              <span className="bg-white border-2 border-black px-3 py-1">
                💰 ${idea.estimatedBudget}
              </span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-[220px] h-[220px] relative border-4 border-black shadow-[6px_6px_0px_#000] bg-white">
            <Image
              src={idea.imageUrl}
              alt={idea.title}
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT MAIN CONTENT */}
        <div className="md:col-span-2 space-y-6">

          {/* PROBLEM */}
          <div className="border-4 border-black p-6 shadow-[6px_6px_0px_#000] bg-pink-100">
            <h2 className="text-2xl font-black mb-2">Problem Statement</h2>
            <p className="text-black/80">{idea.problemStatement}</p>
          </div>

          {/* SOLUTION */}
          <div className="border-4 border-black p-6 shadow-[6px_6px_0px_#000] bg-green-100">
            <h2 className="text-2xl font-black mb-2">Proposed Solution</h2>
            <p className="text-black/80">{idea.proposedSolution}</p>
          </div>

          {/* DESCRIPTION */}
          <div className="border-4 border-black p-6 shadow-[6px_6px_0px_#000] bg-blue-100">
            <h2 className="text-2xl font-black mb-2">Detailed Description</h2>
            <p className="text-black/80">{idea.detailedDescription}</p>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* TAGS */}
          <div className="border-4 border-black p-6 shadow-[6px_6px_0px_#000] bg-yellow-100">
            <h3 className="text-xl font-black mb-3">Tags</h3>

            <div className="flex flex-wrap gap-2">
              {idea.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border-2 border-black bg-white font-bold text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* USER */}
          <div className="border-4 border-black p-6 shadow-[6px_6px_0px_#000] bg-white">
            <h3 className="text-xl font-black mb-2">Created By</h3>
            <p className="font-bold">{idea.userID}</p>
            <p className="text-sm text-gray-600">
              {new Date(idea.createdAt).toDateString()}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}