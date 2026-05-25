"use client";
import { Button, Input, Label, Modal, Surface } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { NormalButton } from "@/components/Button";
import { toast, Bounce } from "react-toastify";
import Link from "next/link";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    );
  }
  const user = session?.user;

  const handleUpdate = async (e) => {
    e.preventDefault();

    const fname = e.target.name.value;
    const fimage = e.target.image.value;

    const { data, error } = await authClient.updateUser({
      image: fimage,
      name: fname,
    });

    if (error) {
      toast.error("Update failed", {
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
      window.location.reload();
      return;
    }

    toast.success("Update successful!", {
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

    window.location.reload();
  };

  const safeImage =
    typeof user?.image === "string" &&
    (user.image.startsWith("http") || user.image.startsWith("/"))
      ? user.image
      : "/card-pic.png";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-8 text-center text-4xl font-black uppercase text-black dark:text-white">
        Profile Page
      </h1>

      <div className="space-y-10 border-4 border-black bg-[#ff66a3] p-6 shadow-[10px_10px_0_#000]">
        {/* TOP SECTION */}
        <div className="border-4 border-black bg-[#fff36d] p-6 shadow-[6px_6px_0_#000]">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            {/* IMAGE */}
            <div className="mx-auto">
              <div className="relative h-70 w-50 sm:w-70 lg:w-80 overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0_#000]">
                <Image
                  src={safeImage}
                  alt={"User"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* USER INFO */}
            <div className="space-y-5">
              <div>
                <h1 className="text-5xl font-black uppercase leading-tight text-black">
                  {user?.name || "Loading..."}
                </h1>

                <p className="mt-3 break-all text-lg font-bold text-black">
                  {user?.email || "Email Loading..."}
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-2">
                {/* UPDATE PROFILE */}
                <Modal>
                  <Button className="border-4 border-black bg-green-400 hover:bg-green-500 px-6 py-3 text-sm font-black uppercase text-black shadow-[4px_4px_0_#000]">
                    Update Profile
                  </Button>

                  <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">
                    <Modal.Container placement="auto">
                      <Modal.Dialog className="overflow-hidden border-4 border-black bg-[#ff66a3] shadow-[10px_10px_0_#000] sm:max-w-md">
                        <Modal.CloseTrigger />

                        {/* HEADER */}
                        <Modal.Header className="border-b-4 border-black bg-[#fff36d] p-5">
                          <div>
                            <Modal.Heading className="text-3xl font-black uppercase text-black">
                              Update Profile
                            </Modal.Heading>

                            <p className="mt-2 text-sm font-bold text-black">
                              Customize your account information
                            </p>
                          </div>
                        </Modal.Header>

                        {/* BODY */}
                        <Modal.Body className="bg-[#e8e8e8] p-5">
                          <Surface className="border-none bg-transparent shadow-none">
                            <form onSubmit={handleUpdate} className="space-y-5">
                              {/* NAME */}
                              <div>
                                <Label className="mb-2 block text-sm font-black uppercase text-black">
                                  Name
                                </Label>

                                <Input
                                  name="name"
                                  type="text"
                                  required
                                  placeholder="Enter your name"
                                  defaultValue={user?.name || ""}
                                  className="font-semibold text-black bg-white border-4 border-black"
                                  classNames={{
                                    inputWrapper:
                                      "border-4 border-black bg-white shadow-[4px_4px_0_#000] rounded-none",
                                  }}
                                />
                              </div>

                              {/* IMAGE */}
                              <div>
                                <Label className="mb-2 block text-sm font-black uppercase text-black">
                                  Profile Picture URL
                                </Label>

                                <Input
                                  name="image"
                                  type="url"
                                  placeholder="Enter profile image URL"
                                  defaultValue={user?.image || ""}
                                  className="font-semibold text-black bg-white border-4 border-black"
                                  classNames={{
                                    inputWrapper:
                                      "border-4 border-black bg-white shadow-[4px_4px_0_#000] rounded-none",
                                  }}
                                />
                              </div>

                              {/* FOOTER */}
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

                {/* LOGOUT */}
                <div
                  onClick={async () => {
                    await authClient.signOut();
                    window.location.reload();
                  }}
                >
                  <NormalButton>Log Out</NormalButton>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap my-10 text-black font-black justify-center items-center">
            <Link href="/myideas">
              <div className="bg-[#ff66a3] hover:bg-green-500 border-4 border-black p-1 cursor-pointer hover:underline active:translate-x-0.5 active:translate-y-0.5 transition-all">
                My Ideas
              </div>
            </Link>
            <Link href="/shareideas">
              <div className="bg-[#ff66a3] hover:bg-green-500 border-4 border-black p-1 cursor-pointer hover:underline active:translate-x-0.5 active:translate-y-0.5 transition-all">
                Share Ideas
              </div>
            </Link>
            <Link href="/bookmarks">
              <div className="bg-[#ff66a3] hover:bg-green-500 border-4 border-black p-1 cursor-pointer hover:underline active:translate-x-0.5 active:translate-y-0.5 transition-all">
                My BookMarks
              </div>
            </Link>
            <Link href="/ineractions">
              <div className="bg-[#ff66a3] hover:bg-green-500 border-4 border-black p-1 cursor-pointer hover:underline active:translate-x-0.5 active:translate-y-0.5 transition-all">
                My Interactions
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
