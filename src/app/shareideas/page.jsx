"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast, Bounce } from "react-toastify";

const ShareIdeaPage = () => {
  const [loading, setLoading] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const formData = new FormData(form);

    const ideaData = {
      title: formData.get("title"),
      shortDescription: formData.get("shortDescription"),
      detailedDescription: formData.get("detailedDescription"),
      category: formData.get("category"),
      tags: formData
        .get("tags")
        ?.split(",")
        .map((tag) => tag.trim()),

      imageUrl: formData.get("imageUrl"),
      estimatedBudget: formData.get("estimatedBudget"),
      targetAudience: formData.get("targetAudience"),
      problemStatement: formData.get("problemStatement"),
      proposedSolution: formData.get("proposedSolution"),
      userId: user.id,
    };

    console.log(ideaData);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/ideas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ideaData),
      });

      const data = await res.json();

      console.log(data);

      if (res.ok) {
        toast.success("Idea shared successfully!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
        form.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed! Something went wrong...", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="border-4 border-black bg-[#ff66a3] shadow-[10px_10px_0_#000]">
        {/* HEADER */}
        <div className="border-b-4 border-black bg-[#fff36d] p-6">
          <h1 className="text-4xl font-black uppercase text-black">
            Share Your Idea
          </h1>

          <p className="mt-2 font-bold text-black">
            Turn your imagination into reality
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5 bg-white p-2">
          {/* TITLE */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Idea Title *
            </label>

            <input
              type="text"
              name="title"
              required
              placeholder="Enter idea title"
              className="w-full border-4 border-black p-3 outline-none shadow-[4px_4px_0_#000] text-black font-semibold"
            />
          </div>

          {/* SHORT DESCRIPTION */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Short Description *
            </label>

            <textarea
              name="shortDescription"
              required
              placeholder="Short summary..."
              className="min-h-[100px] text-black w-full border-4 border-black p-3 font-semibold outline-none shadow-[4px_4px_0_#000]"
            />
          </div>

          {/* PROBLEM */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Problem Statement *
            </label>

            <textarea
              name="problemStatement"
              required
              placeholder="What problem does this solve?"
              className="min-h-[120px] text-black w-full border-4 border-black p-3 font-semibold outline-none shadow-[4px_4px_0_#000]"
            />
          </div>

          {/* SOLUTION */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Proposed Solution *
            </label>

            <textarea
              name="proposedSolution"
              required
              placeholder="How does your idea solve it?"
              className="min-h-[120px] text-black w-full border-4 border-black p-3 font-semibold outline-none shadow-[4px_4px_0_#000]"
            />
          </div>

          {/* CATEGORY + BUDGET */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-black uppercase text-black">
                Category *
              </label>

              <input
                type="text"
                name="category"
                required
                placeholder="Startup, AI, SaaS..."
                className="w-full text-black border-4 border-black p-3 font-semibold outline-none shadow-[4px_4px_0_#000]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black uppercase text-black">
                Estimated Budget
              </label>

              <input
                type="number"
                name="estimatedBudget"
                placeholder="1000..."
                className="w-full text-black border-4 border-black p-3 font-semibold outline-none shadow-[4px_4px_0_#000]"
              />
            </div>
          </div>

          {/* TAGS */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Tags
            </label>

            <input
              type="text"
              name="tags"
              placeholder="AI, startup, productivity"
              className="w-full text-black border-4 border-black p-3 font-semibold outline-none shadow-[4px_4px_0_#000]"
            />

            <p className="mt-2 text-xs font-bold text-gray-500">
              Separate tags with commas
            </p>
          </div>

          {/* IMAGE URL */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Image URL
            </label>

            <input
              type="text"
              name="imageUrl"
              placeholder="https://example.com/image.png"
              className="w-full border-4 text-black border-black p-3 font-semibold outline-none shadow-[4px_4px_0_#000]"
            />
          </div>

          {/* TARGET AUDIENCE */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Target Audience
            </label>

            <textarea
              name="targetAudience"
              placeholder="Who will use this?"
              className="min-h-[100px] text-black w-full border-4 border-black p-3 font-semibold outline-none shadow-[4px_4px_0_#000]"
            />
          </div>

          {/* DETAILED DESCRIPTION */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Detailed Description
            </label>

            <textarea
              name="detailedDescription"
              placeholder="Detailed explanation..."
              className="min-h-[160px] text-black w-full border-4 border-black p-3 font-semibold outline-none shadow-[4px_4px_0_#000]"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="ml-auto cursor-pointer border-4 border-black bg-green-400 px-8 py-3 text-lg font-black uppercase text-black shadow-[4px_4px_0_#000]"
          >
            {loading ? "Sharing..." : "Share Idea"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShareIdeaPage;
