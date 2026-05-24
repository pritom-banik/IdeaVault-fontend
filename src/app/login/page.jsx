"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { toast, Bounce } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { createAuthClient } from "better-auth/client";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleLogIn = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const femail = formData.get("email");
    const fpassword = formData.get("password");

    const { data, error } = await authClient.signIn.email({
      email: femail, // required
      password: fpassword, // required
      rememberMe: true,
      callbackURL: callbackUrl,
    });

    if (error) {
      console.log("SignIn error:", error);
      toast.error("Sign-in failed", {
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
    }

    toast.success("Sign-in successful!", {
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

    setTimeout(() => {
      router.push(callbackUrl);
    }, 2000);
  };

  const authClient = createAuthClient();
  const signInWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex my-5 items-center justify-center p-2">
      <div className="w-full max-w-md border-4 border-black bg-[#ff66a3] shadow-[10px_10px_0_#000]">
        {/* Header */}
        <div className="border-b-4 border-black bg-cyan-400 p-2">
          <h1 className="text-center text-3xl font-black uppercase tracking-wide text-black">
            Login
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleLogIn} className="space-y-3 p-3">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
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

            {/* Forget Password */}
            <div className="mt-2 text-right">
              <span className="cursor-pointer text-xs font-black uppercase text-black hover:underline">
                Forget Password?
              </span>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="cursor-pointer w-full border-4 border-black bg-[#fff36d] px-4 py-3 text-lg font-black uppercase text-black shadow-[2px_2px_0_#000] active:translate-y-1 active:shadow-none"
          >
            Login
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

          {/* Register Redirect */}
          <div className="text-center text-sm font-black uppercase text-black">
            <Link href="/registration">
              <span className="cursor-pointer hover:underline">
                Dont have an account? - Register
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
