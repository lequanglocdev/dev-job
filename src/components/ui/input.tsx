import * as React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : type}
        data-slot="input"
        className={cn(
          "text-white",
          "file:text-foreground placeholder:text-black dark:bg-input/30 border-[#00b894] flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-[#00b894] focus-visible:ring-white/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      {isPassword && (
        <div
          className="absolute right-3 top-1/2 cursor-pointer -translate-y-1/2 text-white"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
        </div>
      )}
    </div>
  );
}

export { Input };
