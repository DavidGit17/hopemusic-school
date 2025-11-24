import React, { useState, useRef, useEffect } from "react"

interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

export const Select: React.FC<SelectProps> = ({ value, onValueChange, children }) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(value || "")
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setSelected(value || "")
  }, [value])

  const handleSelect = (val: string) => {
    setSelected(val)
    onValueChange?.(val)
    setOpen(false)
  }

  return (
    <SelectContext.Provider value={{ open, setOpen, selected, handleSelect, triggerRef }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  )
}

interface SelectContextType {
  open: boolean
  setOpen: (open: boolean) => void
  selected: string
  handleSelect: (val: string) => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

const SelectContext = React.createContext<SelectContextType | null>(null)

export const SelectTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ctx = React.useContext(SelectContext)
  if (!ctx) return null
  return (
    <button
      ref={ctx.triggerRef}
      type="button"
      className="w-full border rounded px-3 py-2 text-left bg-white dark:bg-gray-900"
      onClick={() => ctx.setOpen(!ctx.open)}
    >
      {children}
    </button>
  )
}

export const SelectValue: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  const ctx = React.useContext(SelectContext)
  if (!ctx) return null
  return <span>{ctx.selected ? ctx.selected : placeholder}</span>
}

export const SelectContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ctx = React.useContext(SelectContext)
  if (!ctx || !ctx.open) return null
  return (
    <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-900 border rounded shadow">
      {children}
    </div>
  )
}

export const SelectItem: React.FC<{ value: string; children: React.ReactNode }> = ({ value, children }) => {
  const ctx = React.useContext(SelectContext)
  if (!ctx) return null
  return (
    <div
      className="px-3 py-2 cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900"
      onClick={() => ctx.handleSelect(value)}
    >
      {children}
    </div>
  )
}
