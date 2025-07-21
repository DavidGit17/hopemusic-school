import { useCallback } from "react"

type ToastType = "success" | "error" | "info"

export function useToast() {
  const toast = useCallback(
    ({ title, description, type = "info" }: { title: string; description?: string; type?: ToastType }) => {
      // Placeholder: Replace with your toast implementation (e.g., using a context or a library)
      window.alert(`${title}${description ? ": " + description : ""}`)
    },
    []
  )
  return { toast }
}
