// src/components/tabs.tsx
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type TabsContextType = {
  value: string;
  setValue: (v: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function Tabs({
  defaultValue,
  className,
  children,
}: {
  defaultValue: string;
  className?: string;
  children: ReactNode;
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={
        `
        flex gap-3 
        overflow-x-auto scrollbar-hide 
        sm:justify-center   /* Center on larger screens */
        sm:overflow-visible /* Remove scroll on desktop */
        ` + (className ?? "")
      }
    >
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  className,
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const ctx = useContext(TabsContext);
  if (!ctx) return null;

  const isActive = ctx.value === value;

  const base =
    "px-4 py-2 text-sm rounded-xl border whitespace-nowrap transition-colors duration-200";
  const active = "bg-[#EC622D] text-white border-[#EC622D] shadow-sm";
  const inactive = "bg-white text-gray-700 border-gray-200 hover:bg-gray-100";

  return (
    <button
      type="button"
      onClick={() => ctx.setValue(value)}
      className={`${base} ${isActive ? active : inactive} ${className ?? ""}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children: ReactNode;
}) {
  const ctx = useContext(TabsContext);
  if (!ctx || ctx.value !== value) return null;
  return <div className={className}>{children}</div>;
}
