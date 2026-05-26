"use client";

import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { NormalButton } from "@/components/Button";
import Link from "next/link";

const Page = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [bookmarks, setBookmarks] = useState([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletePostId,setDeletePostId]=useState(null);

  useEffect(() => {
    if (!user) return;

    const fetchBookmarks = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/bookmarks/${user.id}`,
      );

      const data = await res.json();
      setBookmarks(data);
    };

    fetchBookmarks();
  }, [user]);


   // delete bookmark
  const handleRemoveBookmark = async () => {
    try {
      const bookmarkData = {
        postId: deletePostId,
        userId: user.id,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/bookmarks`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookmarkData),
        },
      );

      if (res.ok) {
        setDeletePostId(null);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-auto my-10">
      <div className="text-center max-w-3xl mx-auto space-y-4 my-5">
        <div className="inline-block text-center bg-black text-white px-5 py-2 text-sm font-bold border-2 border-black shadow-[4px_4px_0px_#ff66a3] rotate-[-2deg]">
          Never lose a gem.
        </div>

        <h1 className="text-2xl text-center md:text-5xl font-black text-black dark:text-white">
          Your personal library
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {bookmarks.map((bookmark) => (
          <div
            key={bookmark._id}
            className="relative group w-[320px] overflow-hidden border-4 border-black bg-[#ff66a3] shadow-[8px_8px_0_#000] transition-all duration-200 "
          >
            {/* TITLE */}
            <div className="border-b-4 border-black bg-[#fff36d] px-3 py-1">
              <h2 className="text-xl font-black uppercase truncate text-black">
                {bookmark.title}
              </h2>
            </div>

            {/* CATEGORY */}
            <div className="border-b-4 border-black bg-cyan-300 px-3 py-1">
              <p className="text-xs font-black uppercase text-black">
                {bookmark.category}
              </p>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-between h-[calc(100%-96px)] p-3 text-black">
              {/* DESCRIPTION BOX */}
              <div className="border-2 border-black bg-white p-2 shadow-[4px_4px_0_#000]">
                <h3 className="mb-1 text-sm font-black uppercase">
                  Description
                </h3>
                <p className="h-20 text-sm font-medium line-clamp-4">
                  {bookmark.shortDescription}
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex justify-end gap-2 mt-3">
                <button
                  onClick={() => {setShowDeleteConfirm(true);setDeletePostId(bookmark.postId)}}
                  className=" border-4 border-black bg-red-400 px-2 py-1 text-xs font-black uppercase text-black shadow-[3px_3px_0_#000] hover:bg-red-500 active:translate-x-[2px] active:translate-y-[2px]"
                >
                  Delete
                </button>

                <Link href={`/ideas/${bookmark.postId}`}>
                  <NormalButton>View</NormalButton>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

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
                onClick={ () => {
                   handleRemoveBookmark();
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
    </div>
  );
};

export default Page;
