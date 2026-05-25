"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { NormalButton } from "./Button";
import Link from "next/link";
import { Button, Input, Label, Modal, Surface } from "@heroui/react";

const getSafeImage = (url) => {
  if (!url) return "/card-pic.png";

  const clean = url.trim();

  const isValid =
    clean.startsWith("http://") ||
    clean.startsWith("https://") ||
    clean.startsWith("/");

  return isValid ? clean : "/card-pic.png";
};

const IdeaEditCard = ({ idea }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [modalIdea, setModalIdea] = useState({});
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    if (!idea?._id || !showDetails) return;

    const fetchIdea = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ideas/${idea._id}`,
        );

        if (!res.ok) return;

        const data = await res.json();
        setModalIdea(data?.[0] || {});
      } catch (error) {
        console.error(error);
      }
    };

    fetchIdea();
  }, [showDetails, idea?._id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const updatedData = {
      title: form.get("title"),
      imageUrl: form.get("imageUrl"),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ideas/${idea._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        },
      );

      if (!res.ok) throw new Error("Update failed");

      window.location.reload();

      const data = await res.json();
      console.log("Updated:", data);

      setShowDetails(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/ideas`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ideaId: idea._id,
        }),
      });

      if (!res.ok) throw new Error("Delete failed");

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      key={idea._id}
      className="relative group w-[320px] overflow-hidden rounded-none border-4 border-black bg-[#ff66a3] shadow-[8px_8px_0_#000]"
    >
      <button
        onClick={() => setShowDeleteConfirm(true)}
        className="absolute right-2 top-2 border-4 border-black bg-red-400 px-2 py-1 text-xs font-black uppercase text-black shadow-[3px_3px_0_#000] hover:bg-red-500 active:translate-x-[2px] active:translate-y-[2px]"
      >
        Delete
      </button>

      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-[320px] border-4 border-black bg-[#ff66a3] p-5 shadow-[10px_10px_0_#000]">
            <h2 className="text-xl font-black uppercase text-black">
              Confirm Delete?
            </h2>

            <p className="mt-2 text-sm font-bold text-black">
              This action cannot be undone.
            </p>

            <div className="mt-5 flex justify-between">
              <button
                onClick={async () => {
                  await handleDelete();
                  setShowDeleteConfirm(false);
                }}
                className="cursor-pointer hover:bg-red-600 border-4 border-black bg-red-500 px-4 py-2 font-black uppercase text-black shadow-[4px_4px_0_#000]"
              >
                Delete
              </button>

              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="cursor-pointer hover:bg-green-200 border-4 text-green-500 border-black bg-white px-4 py-2 font-black uppercase shadow-[4px_4px_0_#000]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TITLE */}
      <div className="border-b-4 border-black bg-[#fff36d] px-3 py-1">
        <h2 className="text-xl font-black truncate uppercase text-black">
          {idea.title}
        </h2>
      </div>

      {/* IMAGE */}
      <div className="relative border-b-4 border-black bg-[#9c9c9c]">
        <Image
          src={getSafeImage(idea.imageUrl)}
          alt={idea.title}
          width={100}
          height={200}
          className="w-full h-50 object-cover"
        />

        <div className="absolute text-black left-3 top-3 border-2 border-black bg-cyan-300 p-1 text-xs font-extrabold uppercase shadow-[3px_3px_0_#000]">
          {idea.category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="space-y-4 p-2 text-black">
        <div className="border-2 border-black bg-white p-2 shadow-[4px_4px_0_#000]">
          <h3 className="mb-2 text-sm font-black uppercase">Problem</h3>
          <p className="line-clamp-3 text-sm font-medium">
            {idea.problemStatement}
          </p>
        </div>

        <div className="border-2 border-black bg-[#caffbf] p-2 shadow-[4px_4px_0_#000]">
          <h3 className="mb-2 text-sm font-black uppercase">
            Proposed Solution
          </h3>
          <p className="line-clamp-4 text-sm font-medium">
            {idea.shortDescription}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center justify-around">
          <Link href={`/ideas/${idea._id}`}>
            <NormalButton>View</NormalButton>
          </Link>

          {/* MODAL */}
          <Modal>
            <Button
              onClick={() => setShowDetails(true)}
              className="border-4 border-black bg-green-400 hover:bg-green-500 px-6 py-3 text-lg font-extrabold text-black shadow-[4px_4px_0_#000] rounded-none"
            >
              Update Post
            </Button>

            <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">
              <Modal.Container placement="auto">
                <Modal.Dialog className="overflow-hidden border-4 border-black bg-[#ff66a3] shadow-[10px_10px_0_#000] sm:max-w-md">
                  <Modal.CloseTrigger />

                  {/* HEADER */}
                  <Modal.Header className="border-b-4 border-black bg-[#fff36d] p-5">
                    <Modal.Heading className="text-3xl font-black uppercase text-black">
                      Update Post
                    </Modal.Heading>
                  </Modal.Header>

                  {/* BODY */}
                  <Modal.Body className="bg-[#e8e8e8] p-5">
                    <Surface className="border-none bg-transparent shadow-none">
                      <form onSubmit={handleUpdate} className="space-y-5">
                        {/* TITLE */}
                        <div>
                          <Label className="mb-2 block text-sm font-black uppercase text-black">
                            Title *
                          </Label>

                          <Input
                            name="title"
                            type="text"
                            required
                            defaultValue={modalIdea?.title || ""}
                            className="font-semibold text-black bg-white border-4 border-black"
                          />
                        </div>

                        {/* SHORT DESCRIPTION */}
                        <div>
                          <Label className="mb-2 block text-sm font-black uppercase text-black">
                            Short Description *
                          </Label>

                          <textarea
                            name="shortDescription"
                            required
                            defaultValue={modalIdea?.shortDescription || ""}
                            className="w-full min-h-[90px] border-4 border-black bg-white p-2 font-semibold text-black"
                          />
                        </div>

                        {/* PROBLEM STATEMENT */}
                        <div>
                          <Label className="mb-2 block text-sm font-black uppercase text-black">
                            Problem Statement *
                          </Label>

                          <textarea
                            name="problemStatement"
                            required
                            defaultValue={modalIdea?.problemStatement || ""}
                            className="w-full min-h-[120px] border-4 border-black bg-white p-2 font-semibold text-black"
                          />
                        </div>

                        {/* CATEGORY + BUDGET */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label className="mb-2 block text-sm font-black uppercase text-black">
                              Category *
                            </Label>

                            <Input
                              name="category"
                              type="text"
                              required
                              defaultValue={modalIdea?.category || ""}
                              className="font-semibold text-black bg-white border-4 border-black"
                            />
                          </div>

                          <div>
                            <Label className="mb-2 block text-sm font-black uppercase text-black">
                              Budget
                            </Label>

                            <Input
                              name="estimatedBudget"
                              type="number"
                              defaultValue={modalIdea?.estimatedBudget || ""}
                              className="font-semibold text-black bg-white border-4 border-black"
                            />
                          </div>
                        </div>

                        
                        <div>
                          <Label className="mb-2 block text-sm font-black uppercase text-black">
                            Detailed Description
                          </Label>

                          <textarea
                            name="detailedDescription"
                            defaultValue={modalIdea?.detailedDescription || ""}
                            className="w-full min-h-[140px] border-4 border-black bg-white p-2 font-semibold text-black"
                          />
                        </div>

                        

                        {/* TAGS */}
                        <div>
                          <Label className="mb-2 block text-sm font-black uppercase text-black">
                            Tags (comma separated)
                          </Label>

                          <Input
                            name="tags"
                            type="text"
                            defaultValue={modalIdea?.tags?.join(", ") || ""}
                            className="font-semibold text-black bg-white border-4 border-black"
                          />
                        </div>

                        {/* IMAGE */}
                        <div>
                          <Label className="mb-2 block text-sm font-black uppercase text-black">
                            Image URL
                          </Label>

                          <Input
                            name="imageUrl"
                            type="url"
                            defaultValue={modalIdea?.imageUrl || ""}
                            className="font-semibold text-black bg-white border-4 border-black"
                          />
                        </div>

                        {/* TARGET AUDIENCE */}
                        <div>
                          <Label className="mb-2 block text-sm font-black uppercase text-black">
                            Target Audience
                          </Label>

                          <textarea
                            name="targetAudience"
                            defaultValue={modalIdea?.targetAudience || ""}
                            className="w-full min-h-[80px] border-4 border-black bg-white p-2 font-semibold text-black"
                          />
                        </div>

                        

                        {/* PROPOSED SOLUTION */}
                        <div>
                          <Label className="mb-2 block text-sm font-black uppercase text-black">
                            Proposed Solution
                          </Label>

                          <textarea
                            name="proposedSolution"
                            defaultValue={modalIdea?.proposedSolution || ""}
                            className="w-full min-h-[120px] border-4 border-black bg-white p-2 font-semibold text-black"
                          />
                        </div>

                        {/* FOOTER */}
                        <Modal.Footer className="px-0 pt-4">
                          <Button
                            slot="close"
                            className="border-4 border-black bg-white px-5 py-2 font-black uppercase text-black shadow-[4px_4px_0_#000]"
                          >
                            Cancel
                          </Button>

                          <Button
                            type="submit"
                            className="border-4 border-black bg-[#caffbf] px-5 py-2 font-black uppercase text-black shadow-[4px_4px_0_#000]"
                          >
                            Update
                          </Button>
                        </Modal.Footer>
                      </form>
                    </Surface>
                  </Modal.Body>
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default IdeaEditCard;
