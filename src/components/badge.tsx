import React from "react"
import clsx from "clsx"

type BadgeProps = {
  children: React.ReactNode
  className?: string
  variant?: "default" | "secondary"
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-block rounded-full px-3 py-1 text-xs font-semibold",
        variant === "secondary"
          ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
          : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
        className
      )}
    >
      {children}
    </span>
  )
}
