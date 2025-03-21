import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full p-2 text-base border-gray-300 rounded-lg bg-white focus:bg-gray-50 focus:outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Input }
