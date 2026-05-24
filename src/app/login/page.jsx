"use client";

import Link from "next/link";
import React, { useState } from "react";
 import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const [password, setPassword] = useState("");

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
        <form className="space-y-3 p-3">
          
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-4 border-black bg-white px-3 py-2 font-semibold text-black outline-none shadow-[4px_4px_0_#000] placeholder:text-gray-500 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-4 border-black bg-white px-3 py-2 font-semibold text-black outline-none shadow-[4px_4px_0_#000] placeholder:text-gray-500 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none"
            />

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

            <span className="text-sm font-black uppercase text-black">
              OR
            </span>

            <div className="h-1 flex-1 bg-black"></div>
          </div>

          {/* Google Login */}
          <button
            type="button"
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