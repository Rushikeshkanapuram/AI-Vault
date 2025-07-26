// /components/ui/progress.jsx

import * as React from "react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({ className, value, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative h-2 w-full rounded-full bg-muted", className)}
      {...props}
    >
      <div
        className={cn(
          "h-full rounded-full transition-all",
          value >= 90
            ? "bg-red-500"
            : value >= 75
            ? "bg-yellow-500"
            : "bg-green-500"
        )}
        style={{ width: `${value ?? 0}%` }}
      />
    </div>
  )
})

Progress.displayName = "Progress"
export { Progress }
