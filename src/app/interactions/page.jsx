"use client";
import React, { useEffect, useState } from "react";
import { Button, Input, Label, Modal, Surface } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { toast, Bounce } from "react-toastify";

const InteractionComment = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [comments, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedComment, setSelectedComment] = useState(null);

  const fetchComments = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/comments/user/${user.id}`,
        { cache: "no-store" },
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
    if (!user?.id) return;
    fetchComments();
  }, [user]);

  const deleteComment = async (id) => {
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


 const handleUpdate = async (e) => {
  e.preventDefault();

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
      toast.success("Comment updated successfully!");
      setComment((prev) =>
        prev.map((c) =>
          c._id === selectedComment._id
            ? { ...c, comment: updatedData.comment }
            : c
        )
      );

      setSelectedComment(null);
    } else {
      toast.error(data.message || "Update failed");
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong...");
  }
};


  return (
    <div className="flex flex-col justify-center items-center">
      {/* HEADER */}
      <div className="text-center max-w-3xl space-y-4 my-5">
        <div className="inline-block bg-black text-white px-5 py-2 text-sm font-bold border-2 border-black shadow-[4px_4px_0px_#ff66a3] rotate-[-2deg]">
          Track your takes.
        </div>

        <h1 className="text-2xl md:text-5xl font-black text-black dark:text-white">
          Echoes of your insights
        </h1>
      </div>

      {/* TABLE WRAPPER */}
      <div className="w-full max-w-5xl mx-auto overflow-x-auto my-10">
        <div className="min-w-[900px]">
          <table className="w-full table-fixed border-4 border-black bg-white shadow-[3px_3px_0_#000]">
            {/* HEAD */}
            <thead>
              <tr className="bg-[#fff36d] border-b-4 text-black font-bold border-black">
                <th className="w-[220px] px-4 py-4 text-left text-sm font-black uppercase border-r-4 border-black">
                  Comments
                </th>
                <th className="w-[160px] px-4 py-4 text-left text-sm font-black uppercase border-r-4 border-black">
                  Last Updated
                </th>
                <th className="w-[220px] px-4 py-4 text-left text-sm font-black uppercase border-r-4 border-black">
                  Post
                </th>
                <th className="w-[140px] px-4 py-4 text-left text-sm font-black uppercase border-r-4 border-black">
                  Delete
                </th>
                <th className="w-[160px] px-4 py-4 text-left text-sm font-black uppercase">
                  Edit
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {comments.map((comment) => (
                <tr
                  key={comment._id}
                  className="border-b-4 border-black hover:bg-yellow-50 transition-colors"
                >
                  {/* COMMENT */}
                  <td className="w-[220px] px-4 py-4 border-r-4 border-black">
                    <p className="truncate font-bold text-black">
                      {comment.comment}
                    </p>
                  </td>

                  {/* DATE */}
                  <td className="w-[160px] px-4 py-4 border-r-4 border-black whitespace-nowrap font-bold text-black">
                    {new Date(comment.updatedAt).toDateString()}
                  </td>

                  {/* POST */}
                  <td className="w-[220px] px-4 py-4 border-r-4 border-black">
                    <Link href={`/ideas/${comment.postId}`}>
                      <p className="truncate font-bold text-black hover:underline">
                        {comment.postTitle}
                      </p>
                    </Link>
                  </td>

                  {/* DELETE */}
                  <td className="w-[140px] px-4 py-4 border-r-4 border-black text-center">
                    <Button
                      onClick={() => deleteComment(comment._id)}
                      className="rounded-none border-2 border-black text-black hover:bg-red-500 bg-red-400 px-3 py-2 text-xs font-black uppercase shadow-[2px_2px_0_#000]"
                    >
                      Delete
                    </Button>
                  </td>

                  {/* EDIT */}
                  <td className="w-[160px] px-4 py-4 text-center">
                    <Modal>
                      <Button 
                       onClick={() => setSelectedComment(comment)}
                      className="rounded-none border-2 text-black border-black hover:bg-green-500 bg-green-400 px-3 py-2 text-xs font-black uppercase shadow-[2px_2px_0_#000]">
                        Edit
                      </Button>

                      <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">
                        <Modal.Container placement="auto">
                          <Modal.Dialog className="border-4 border-black bg-[#ff66a3] shadow-[10px_10px_0_#000] sm:max-w-md">
                            <Modal.CloseTrigger />

                            <Modal.Header className="border-b-4 border-black bg-[#fff36d] p-5">
                              <Modal.Heading className="text-3xl font-black uppercase text-black">
                                Edit Comment
                              </Modal.Heading>
                            </Modal.Header>

                            <Modal.Body className="bg-[#e8e8e8] p-5">
                              <Surface className="border-none bg-transparent shadow-none">
                                <form
                                onSubmit={handleUpdate}
                                 className="space-y-5">
                                  <div>
                                    <Label className="mb-2 block text-sm font-black uppercase text-black">
                                      Comment
                                    </Label>

                                    <Input
                                      name="comment"
                                      type="text"
                                      required
                                      placeholder="Your thoughts..."
                                      defaultValue={comment.comment}
                                      className="font-semibold text-black bg-white border-4 border-black"
                                      classNames={{
                                        inputWrapper:
                                          "border-4 border-black bg-white shadow-[4px_4px_0_#000] rounded-none",
                                      }}
                                    />
                                  </div>

                                  <Modal.Footer className="px-0 pt-4">
                                    <Button
                                      slot="close"
                                      className="rounded-none border-4 border-black bg-white px-5 py-2 font-black uppercase text-black shadow-[4px_4px_0_#000]"
                                    >
                                      Cancel
                                    </Button>

                                    <Button
                                      type="submit"
                                      className="rounded-none border-4 border-black bg-[#caffbf] px-5 py-2 font-black uppercase text-black shadow-[4px_4px_0_#000]"
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InteractionComment;
