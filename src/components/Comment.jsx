"use client";
import React, { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { CiMenuKebab } from "react-icons/ci";
import { Button, Input, Label, Modal, Surface } from "@heroui/react";

const Comment = ({ postId }) => {
  const [comments, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

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

  const deleteComment = async (id, userId) => {
    if (userId !== user.id) {
      toast.error("You are not comment author !", {
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

  const handleCommentUpdate = async (e) => {
    e.preventDefault();
    if (selectedComment.author._id !== user.id) {
      toast.error("You are not comment author !", {
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
      const form = new FormData(e.target);

      const updatedData = {
        comment: form.get("comment"),
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/comments/${selectedComment._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        },
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("Updated!", {
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
        setSelectedComment(null);
        window.location.reload();
      } else {
        toast.error("Comment update failed !", {
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
      toast.error("Something went wrong...", {
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
                        <div className="absolute right-0 top-8 z-50 w-32 border-4 border-black bg-white shadow-[2px_2px_0_#000]">
                          <Modal>
                            <Button
                              onClick={() => setSelectedComment(comment)}
                              className="w-full bg-white hover:bg-green-200 px-3 py-2 text-sm font-bold text-black rounded-none"
                            >
                              Edit
                            </Button>

                            <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">
                              <Modal.Container placement="auto">
                                <Modal.Dialog className="overflow-hidden border-4 border-black bg-gray-300 shadow-[10px_10px_0_#000] sm:max-w-md">
                                  <Modal.CloseTrigger />

                                  {/* HEADER */}
                                  <Modal.Header className="border-b-4 border-black bg-[#fff36d] p-5">
                                    <Modal.Heading className="text-3xl font-black uppercase text-black">
                                      Edit Comment
                                    </Modal.Heading>
                                  </Modal.Header>

                                  {/* BODY */}
                                  <Modal.Body className="bg-[#e8e8e8] p-5">
                                    <Surface className="border-none bg-transparent shadow-none">
                                      <form
                                        onSubmit={handleCommentUpdate}
                                        className="space-y-5"
                                      >
                                        {/* TITLE */}
                                        <div>
                                          <Label className="mb-2 block text-sm font-black uppercase text-black">
                                            Your Comment
                                          </Label>

                                          <Input
                                            name="comment"
                                            type="text"
                                            defaultValue={comment.comment}
                                            required
                                            className="font-semibold text-black bg-white border-4 border-black"
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

                          {/* ============================ */}

                          <button
                            className="w-full px-3 py-2 text-center text-sm font-bold hover:bg-red-200 text-black border border-black cursor-pointer"
                            onClick={() =>
                              deleteComment(comment._id, comment.author?._id)
                            }
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
