"use client";

import React, { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { authClient } from "@/lib/auth-client";

const AddBookmark = ({ ideaId }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkId, setBookmarkId] = useState(null);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  // check bookmark on load
  useEffect(() => {
    const checkBookmark = async () => {
      if (!user || !ideaId) return;

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/bookmarks/isbookmarked?ideaId=${ideaId}&userId=${user.id}`,
        );

        const data = await res.json();

        if (res.ok && data.bookmarked) {
          setIsBookmarked(true);
          setBookmarkId(data.bookmarkId);
        } else {
          setIsBookmarked(false);
          setBookmarkId(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkBookmark();
  }, [ideaId, user]);

  // add bookmark
  const handleAddBookmark = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/bookmarks`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            postId: ideaId,
            userId: user.id,
          }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        setIsBookmarked(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // delete bookmark
  const handleRemoveBookmark = async () => {
    try {
      const bookmarkData = {
        postId: ideaId,
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
        setIsBookmarked(false);
        setBookmarkId(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // toggle
  const handleBookmarkToggle = async () => {
    if (!user) return;

    if (isBookmarked) {
      await handleRemoveBookmark();
    } else {
      await handleAddBookmark();
    }
  };

  return (
    <div
      onClick={handleBookmarkToggle}
      className="text-black font-extrabold text-3xl cursor-pointer"
    >
      {isBookmarked ? <BsBookmarkCheckFill /> : <CiBookmark />}
    </div>
  );
};

export default AddBookmark;
