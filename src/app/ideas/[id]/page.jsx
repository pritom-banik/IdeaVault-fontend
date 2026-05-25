import Image from "next/image";
import { notFound } from "next/navigation";

const getIdea = async (id) => {
  const res = await fetch(`${process.env.API_ENDPOINT}/ideas/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
};

const getComments = async (id) => {
  const res = await fetch(
    `${process.env.API_ENDPOINT}/comments/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return [];

  return res.json();
};

const getSafeImage = (url) => {
  if (!url) return "/card-pic.png";

  const clean = url.trim();

  const isValid =
    clean.startsWith("http://") ||
    clean.startsWith("https://") ||
    clean.startsWith("/");

  return isValid ? clean : "/card-pic.png";
};

export default async function IdeaDetails({ params }) {
  const { id } = await params;

  const ideaData = await getIdea(id);
const idea = ideaData[0];

  console.log(idea);

  if (!idea) {
    notFound();
  }

  const comments = await getComments(id);

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      
      {/* HERO SECTION */}
      <div className="border-4 border-black bg-[#ff66a3] shadow-[10px_10px_0_#000]">
        
        {/* TOP */}
        <div className="border-b-4 border-black bg-[#fff36d] p-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            
            {/* LEFT */}
            <div className="space-y-3">
              <h1 className="text-4xl font-black uppercase text-black">
                {idea.title}
              </h1>

              <p className="max-w-2xl text-sm font-bold text-black">
                {idea.shortDescription}
              </p>

              {/* META */}
              <div className="flex flex-wrap gap-3">
                
                <div className="border-2 text-black border-black bg-cyan-300 px-3 py-1 text-xs font-black uppercase shadow-[3px_3px_0_#000]">
                  {idea.category}
                </div>

                <div className="border-2 text-black border-black bg-white px-3 py-1 text-xs font-black uppercase shadow-[3px_3px_0_#000]">
                  👀 {idea.views} Views
                </div>

                <div className="border-2 text-black border-black bg-[#caffbf] px-3 py-1 text-xs font-black uppercase shadow-[3px_3px_0_#000]">
                  💰 ${idea.estimatedBudget}
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative h-[220px] w-full overflow-hidden border-4 border-black bg-white shadow-[6px_6px_0_#000] md:w-[260px]">
              <Image
                src={getSafeImage(idea.imageUrl)}
                alt={idea.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM INFO */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4">
          
          <div>
            <p className="text-xs font-black uppercase text-gray-500">
              Created By
            </p>

            <p className="text-lg font-black text-black">
              {idea.author?.name}
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase text-gray-500">
              Published
            </p>

            <p className="font-bold text-black">
              {new Date(idea.createdAt).toDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid gap-6 lg:grid-cols-3">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 lg:col-span-2">
          
          {/* PROBLEM */}
          <div className="border-4 border-black bg-pink-100 p-5 shadow-[6px_6px_0_#000]">
            <h2 className="mb-3 text-2xl font-black uppercase text-black">
              Problem Statement
            </h2>

            <p className="font-medium leading-relaxed text-black">
              {idea.problemStatement}
            </p>
          </div>

          {/* SOLUTION */}
          <div className="border-4 border-black bg-[#caffbf] p-5 shadow-[6px_6px_0_#000]">
            <h2 className="mb-3 text-2xl font-black uppercase text-black">
              Proposed Solution
            </h2>

            <p className="font-medium leading-relaxed text-black">
              {idea.proposedSolution}
            </p>
          </div>

          {/* DESCRIPTION */}
          <div className="border-4 border-black bg-cyan-100 p-5 shadow-[6px_6px_0_#000]">
            <h2 className="mb-3 text-2xl font-black uppercase text-black">
              Detailed Description
            </h2>

            <p className="font-medium leading-relaxed text-black">
              {idea.detailedDescription}
            </p>
          </div>

          {/* COMMENTS */}
          <div className="border-4 border-black bg-white shadow-[6px_6px_0_#000]">
            
            {/* HEADER */}
            <div className="border-b-4 border-black bg-[#fff36d] p-4">
              <h2 className="text-2xl font-black uppercase text-black">
                Comments ({comments.length})
              </h2>
            </div>

            {/* COMMENT INPUT UI */}
            <div className="border-b-4 border-black bg-pink-50 p-4">
              <textarea
                placeholder="Write your comment..."
                className="min-h-[120px] w-full resize-none border-4 border-black bg-white p-3 font-semibold text-black outline-none shadow-[4px_4px_0_#000]"
              />

              <button
                type="button"
                className="mt-4 border-4 border-black bg-[#ff66a3] px-5 py-2 text-sm font-black uppercase text-black shadow-[4px_4px_0_#000] transition-all hover:-translate-y-1"
              >
                Post Comment
              </button>
            </div>

            {/* COMMENT LIST */}
            <div className="space-y-4 p-4">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div
                    key={comment._id}
                    className="border-4 border-black bg-cyan-50 p-4 shadow-[4px_4px_0_#000]"
                  >
                    <div className="mb-2 flex items-center justify-between gap-3">
                      
                      <h4 className="text-sm font-black uppercase text-black">
                        {comment.author?.name}
                      </h4>

                      {comment.updatedAt && (
                        <span className="text-xs font-bold text-gray-600">
                          {new Date(
                            comment.updatedAt
                          ).toDateString()}
                        </span>
                      )}
                    </div>

                    <p className="font-medium leading-relaxed text-black">
                      {comment.comment}
                    </p>
                  </div>
                ))
              ) : (
                <div className="border-4 border-dashed border-black bg-gray-100 p-6 text-center">
                  <p className="font-black uppercase text-black">
                    No comments yet
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          
          {/* TAGS */}
          <div className="border-4 border-black bg-[#fff36d] p-5 shadow-[6px_6px_0_#000]">
            <h3 className="mb-4 text-2xl font-black uppercase text-black">
              Tags
            </h3>

            <div className="flex flex-wrap gap-3">
              {idea.tags?.map((tag) => (
                <span
                  key={tag}
                  className="border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase shadow-[3px_3px_0_#000]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* TARGET USERS */}
          <div className="border-4 border-black bg-cyan-100 p-5 shadow-[6px_6px_0_#000]">
            <h3 className="mb-3 text-2xl font-black uppercase text-black">
              Target Audience
            </h3>

            <p className="font-medium leading-relaxed text-black">
              {idea.targetAudience}
            </p>
          </div>

          {/* EXTRA INFO */}
          <div className="border-4 border-black bg-[#caffbf] p-5 shadow-[6px_6px_0_#000]">
            <h3 className="mb-4 text-2xl font-black uppercase text-black">
              Idea Stats
            </h3>

            <div className="space-y-3">
              
              <div className="border-2 border-black bg-white p-3">
                <p className="text-xs font-black uppercase text-gray-500">
                  Budget
                </p>

                <p className="text-lg font-black text-black">
                  ${idea.estimatedBudget}
                </p>
              </div>

              <div className="border-2 border-black bg-white p-3">
                <p className="text-xs font-black uppercase text-gray-500">
                  Views
                </p>

                <p className="text-lg font-black text-black">
                  {idea.views}
                </p>
              </div>

              <div className="border-2 border-black bg-white p-3">
                <p className="text-xs font-black uppercase text-gray-500">
                  Comments
                </p>

                <p className="text-lg font-black text-black">
                  {comments.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}