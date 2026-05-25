"use client";
import React, { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { CiMenuKebab } from "react-icons/ci";

const Comment = ({ postId }) => {
  const [comments, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const fetchComments = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/comments/post/${postId}`,
        {
          cache: "no-store",
        },
      );

      if (res.status === 500) {
        setComment([]);
        return;
      }

      const data = await res.json();
      setComment(data);
    } catch (error) {
      console.log("Comment error : ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!postId) return;

    fetchComments();
  }, [postId]);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleComment = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const comment = formData.get("comment");
    const commentInfo = {
      postId: postId,
      userId: user.id,
      comment: comment,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentInfo),
        },
      );

      const data = await res.json();

      //console.log(data);

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
        e.target.reset();
        fetchComments();
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
    }
  };


  const deleteComment = async (id,userId) => {
    if(userId!==user.id){
toast.error("Only Comment Author Can Delete The Comment !", {
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
        return;
    }
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/comments`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ commentId: id }),
          },
        );
  
  
        if (res.ok) {
          toast.success("Comment Deletion Successful!", {
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
          setComment((prev) => prev.filter((c) => c._id !== id));
        } else {
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
      }
    };

  return (
    <div>
      <div className="border-4 border-black bg-white shadow-[6px_6px_0_#000]">
        
        <div className="border-b-4 border-black bg-[#fff36d] p-4">
          <h2 className="text-2xl font-black uppercase text-black">
            Comments ({comments.length})
          </h2>
        </div>

        
        <form
          onSubmit={handleComment}
          className="border-b-4 border-black bg-pink-50 p-4"
        >
          <textarea
            name="comment"
            required
            placeholder="Write your comment..."
            className="min-h-30 w-full resize-none border-4 border-black bg-white p-3 font-semibold text-black outline-none shadow-[4px_4px_0_#000]"
          />

          <button
            type="submit"
            className="cursor-pointer mt-4 border-4 border-black bg-[#ff66a3] px-5 py-2 text-sm font-black uppercase text-black shadow-[4px_4px_0_#000] transition-all active:translate-y-1"
          >
            Post Comment
          </button>
        </form>

        {/* COMMENT LIST */}
        {loading ? (
          <span className="loading loading-spinner loading-xl"></span>
        ) : (
          <div className="space-y-4 p-4">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div
                  key={comment._id}
                  className="relative border-4 border-black bg-cyan-50 p-4 shadow-[4px_4px_0_#000]"
                >
                  {/* TOP ROW */}
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-black uppercase text-black">
                        {comment.author?.name}
                      </h4>

                      {comment.updatedAt && (
                        <span className="text-xs font-bold text-gray-600">
                          {new Date(comment.updatedAt).toDateString()}
                        </span>
                      )}
                    </div>

                    {/* 3 DOT BUTTON */}
                    <div className="relative">
                      <div
                        onClick={() => toggleMenu(comment._id)}
                        className="text-2xl text-black cursor-pointer px-2"
                      >
                        <CiMenuKebab />
                      </div>

                      {/* DROPDOWN */}
                      {openMenuId === comment._id && (
                        <div className="absolute right-0 top-8 z-50 w-32 border-4 border-black bg-white shadow-[4px_4px_0_#000]">
                          <button
                            className="w-full px-3 py-2 text-left text-sm font-bold hover:bg-green-200 text-black border border-black cursor-pointer"
                            onClick={() => {
                              console.log("edit", comment._id);
                              setOpenMenuId(null);
                            }}
                          >
                            Edit
                          </button>

                          <button
                            className="w-full px-3 py-2 text-left text-sm font-bold hover:bg-red-200 text-black border border-black cursor-pointer"
                            onClick={() => deleteComment(comment._id,comment.author?._id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* COMMENT TEXT */}
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
        )}
      </div>
    </div>
  );
};

export default Comment;
