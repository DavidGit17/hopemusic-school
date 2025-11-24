import React from "react"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className ?? ""}`}
      {...props}
    />
  )
)
Textarea.displayName = "Textarea"
