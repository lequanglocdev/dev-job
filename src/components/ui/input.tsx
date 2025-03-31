import * as React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {  } from "react-icons/fa";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = React.useState(false);

  const isPassword = type === "password";

  return (
    <div className="relative w-full">
      <input
        type={isPassword && !showPassword ? "password" : "text"}
        data-slot="input"
        className={cn(
          "w-full p-2 text-base border-gray-300 rounded-lg bg-white focus:bg-gray-50 focus:outline-none pr-10",
          className
        )}
        {...props}
      />

      {isPassword && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
        </button>
      )}
    </div>
  );
}

export { Input };
