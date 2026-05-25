"use client";
import Link from "next/link";
import { useState } from "react";
import { LoginButton, RegisterButton } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  console.log("The sessiion info : ", session);
  const user = session?.user;
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-lg border-b-4 border-black bg-[#ff66a3] dark:bg-[#737373]">
      <header className="mx-auto flex flex-overflow h-16 max-w-6xl items-center justify-between px-5">
        <div className={`flex items-center gap-4 `}>
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="flex items-center gap-3">
            <p
              className="
              text-2xl
              md:text-3xl
    lg:text-4xl font-extrabold
    text-white dark:text-[#ff66a3]

    dark:[text-shadow:1px_1px_1px_#000000,0_0_1px_#22d3ee,0_0_1px_#22d3ee]

    drop-shadow-[0_0_1px_rgba(34,211,238,0.7)]
    transition-all duration-300
  "
            >
              IdeaVault
            </p>
          </div>
        </div>
        <ul
          className={` hidden items-center gap-3 md:flex font-semibold text-xl text-black dark:text-white`}
        >
          <li>
            <Link href="/" className="block py-2 ">
              Home
            </Link>
          </li>
          <li>
            <Link href="/ideas" className="block py-2 ">
              Ideas
            </Link>
          </li>
          <li>
            <Link href="/" className="block py-2 ">
              My Ideas
            </Link>
          </li>
          <li>
            <Link href="/" className="block py-2 ">
              Share Ideas
            </Link>
          </li>
        </ul>
        <div>
          <ThemeToggle></ThemeToggle>
        </div>

        {isPending ? (
          <span className="loading loading-spinner text-success"></span>
        ) : user ? (
          <div className="flex items-center gap-2 cursor-pointer">
            <h1 className={`text-black font-semibold text-lg hidden sm:block`}>{user.name}</h1>

            <Dropdown>
              <Dropdown.Trigger>
                <Avatar className="cursor-pointer">
                  <Avatar.Fallback className="border-none bg-gradient-to-br from-green-600 to-sky-800 dark:from-[#ff66a3] dark:to-[#ef0a65] text-white">
                    {user.name?.slice(0, 2).toUpperCase()}
                  </Avatar.Fallback>
                </Avatar>
              </Dropdown.Trigger>

              <Dropdown.Popover>
                <Dropdown.Menu
                onAction={async (key) => {
                    if (key === "logout") {
                      await authClient.signOut();
                      window.location.reload();
                    }
                  }}>
                  <Dropdown.Item>
                    <Link href="/profile" className="text-[#ff66a3] font-bold">Profile</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/bookmarks" className="text-[#ff66a3] font-bold">BookMarks</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/interactions" className="text-[#ff66a3] font-bold">Interaction</Link>
                  </Dropdown.Item>
                  <Dropdown.Item id="logout" textValue="logout">
                    <Label>Log out</Label>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>
        ) : (
          <div className="hidden sm:flex justify-between gap-2">
            <Link href="/login" className="cursor-pointer">
              <LoginButton></LoginButton>
            </Link>
            <Link href="/registration" className="cursor-pointer">
              <RegisterButton></RegisterButton>
            </Link>
          </div>
        )}
      </header>

      {/* For small screen */}
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4 font-semibold text-xl text-black">
            <li>
              <Link href="/" className="block py-2 ">
                Home
              </Link>
            </li>
            <li>
              <Link href="/ideas" className="block py-2  ">
                Ideas
              </Link>
            </li>
            <li>
              <Link href="/profile" className="block py-2 ">
                My Ideas
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 ">
                Share Ideas
              </Link>
            </li>
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="/login" className={` text-lg  py-2`}>
                <LoginButton></LoginButton>
              </Link>

              <Link
                href="/signup"
                className="no-underline w-full cursor-pointer"
              >
                <RegisterButton></RegisterButton>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
