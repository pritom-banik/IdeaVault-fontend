import React from "react";

const baseStyle = `
  px-5 py-2
  border-[3px] border-black
  shadow-[4px_4px_0_#000]
  text-black
  font-extrabold
  rounded-md
  transition-all duration-300
  hover:translate-x-[2px]
  hover:translate-y-[2px]
  hover:shadow-[2px_2px_0_#000]
  active:translate-x-[4px]
  active:translate-y-[4px]
  active:shadow-none
`;

export const LoginButton = ({ children = "Login", ...props }) => (
  <button
    className={`${baseStyle} bg-sky-400 hover:bg-sky-500`}
    {...props}
  >
    {children}
  </button>
);

export const RegisterButton = ({ children = "Register", ...props }) => (
  <button
    className={`${baseStyle} bg-green-400 hover:bg-green-500`}
    {...props}
  >
    {children}
  </button>
);

export const NormalButton = ({ children = "Explore Ideas", ...props }) => (
  <button
    className={`${baseStyle} bg-yellow-300 hover:bg-yellow-400`}
    {...props}
  >
    {children}
  </button>
);