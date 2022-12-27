import React from "react";

export default function MyButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full   rounded-[0.3125rem] mb-2 h-[10vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-[1.5625rem] py-[0.9375rem] text-[1.25rem] text-black border-2 border-black "
    >
      {children}
    </button>
  );
}
