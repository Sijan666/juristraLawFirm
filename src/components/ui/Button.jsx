import React from "react";
import { cn } from "@/lib/utils";

export const Button = ({children, className = "", onClick, type = "button", ...props}) => {
  return (
    <button type={type} onClick={onClick} className={cn(
        "inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition",
        className
      )}
      {...props}>
      {children}
    </button>
  );
};