"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const RegisterForm = () => {
  const [password, setPassword] = useState("");

  const validations = {
    length: password.length >= 6,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
  };

  return (
    <div className="flex my-5 items-center justify-center p-2">
      <div className="w-full max-w-md border-4 border-black bg-[#ff66a3] shadow-[10px_10px_0_#000]">
        
        {/* Header */}
        <div className="border-b-4 border-black bg-green-400 p-2">
          <h1 className="text-center text-3xl font-black uppercase tracking-wide text-black">
            Register
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-2 p-3">
          
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-black uppercase text-black">
              Name
            </label>

            <input
              type="text"
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
              placeholder="Paste image URL"
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
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-4 border-black bg-white px-3 py-2 font-semibold text-black outline-none shadow-[4px_4px_0_#000] placeholder:text-gray-500 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none"
            />

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
          <div className="text-sm font-black uppercase text-black text-center cursor-pointer hover:underline">
            <Link href="/login">
            Have an account? - Login
            </Link>
            </div>
        </form>
        
      </div>
      
    </div>
  );
};

export default RegisterForm;