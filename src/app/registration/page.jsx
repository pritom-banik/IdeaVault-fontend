"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast, Bounce } from "react-toastify";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const RegisterForm = () => {
  const router = useRouter();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    if (
      user.password.length < 6 ||
      !/[A-Z]/.test(user.password) ||
      !/[a-z]/.test(user.password)
    ) {
      alert("Weak password !");
    }

    const { data, error } = await authClient.signUp.email(
      {
        email: user.email, // user email address
        password: user.password, // user password -> min 8 characters by default
        name: user.name, // user display name
        image: user.image, // User image URL (optional)
        callbackURL: "/", // A URL to redirect to after the user verifies their email (optional)
      },
      {
        onSuccess: (ctx) => {
          toast.success("Registration successful!", {
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
          setTimeout(async () => {
            await authClient.getSession();
            router.refresh();
            router.push("/");
          }, 2000);
        },
        onError: (ctx) => {
          toast.error("Registration failed", {
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

          return;
        },
      },
    );
  };

  const [showPassword, setShowPassword] = useState(false);

  const signInWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex my-5 items-center justify-center p-2">
      <div className="w-full max-w-md border-4 border-black bg-[#ff66a3] shadow-[10px_10px_0_#000]">
        <div className="border-b-4 border-black bg-green-400 p-2">
          <h1 className="text-center text-3xl font-black uppercase tracking-wide text-black">
            Register
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSignUp} className="space-y-2 p-3">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Name
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full border-4 border-black bg-white px-3 py-2 font-semibold text-black outline-none shadow-[4px_4px_0_#000] placeholder:text-gray-500 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full border-4 border-black bg-white px-3 py-2 font-semibold text-black outline-none shadow-[4px_4px_0_#000] placeholder:text-gray-500 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Photo URL
              <span className="ml-2 text-xs font-bold">(optional)</span>
            </label>

            <input
              type="text"
              name="image"
              placeholder="Paste image URL"
              className="w-full border-4 border-black bg-white px-3 py-2 font-semibold text-black outline-none shadow-[4px_4px_0_#000] placeholder:text-gray-500 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Password
            </label>
            <fieldset className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Enter password"
                className="w-full border-4 border-black bg-white px-3 py-2 font-semibold text-black outline-none shadow-[4px_4px_0_#000] placeholder:text-gray-500 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="22"
                    fill="none"
                    stroke="#2B788B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="22"
                    fill="none"
                    stroke="#2B788B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                    <path d="m2 2 20 20" />
                  </svg>
                )}
              </span>
            </fieldset>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="cursor-pointer w-full border-4 border-black bg-[#fff36d] px-4 py-3 text-lg font-black uppercase text-black shadow-[2px_2px_0_#000] active:translate-y-1 active:shadow-none"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-1 flex-1 bg-black"></div>
            <span className="text-sm font-black uppercase text-black">OR</span>
            <div className="h-1 flex-1 bg-black"></div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={signInWithGoogle}
            className="cursor-pointer flex w-full items-center justify-center gap-3 border-4 border-black bg-white px-4 py-3 text-sm font-black uppercase text-black shadow-[2px_2px_0_#000] transition-all active:translate-y-1 active:shadow-none"
          >
            <FcGoogle size={24} />
            Continue with Google
          </button>
          <div className="text-sm font-black uppercase text-black text-center cursor-pointer hover:underline">
            <Link href="/login">Have an account? - Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
