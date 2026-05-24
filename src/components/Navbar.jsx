"use client";
import Link from "next/link";
import { useState } from "react";
import { LoginButton, RegisterButton } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    text-4xl font-extrabold
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
        <div className="hidden sm:flex justify-between gap-2">
          <Link href="/login" className="cursor-pointer">
            <LoginButton></LoginButton>
          </Link>
          <Link href="/registration" className="cursor-pointer">
            <RegisterButton></RegisterButton>
          </Link>
        </div>
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
