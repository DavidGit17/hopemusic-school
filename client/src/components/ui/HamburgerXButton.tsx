interface HamburgerXButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function HamburgerXButton({ open, onClick }: HamburgerXButtonProps) {
  return (
    <button
      className={`md:hidden flex items-center ml-1 cursor-pointer z-50 relative w-8 h-8 rounded-lg justify-center transition-all duration-200 ${
        open ? "border border-black" : "border-none"
      }`}
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      type="button"
    >
      <span className="sr-only">Toggle menu</span>
      <div className="flex flex-col justify-center items-center w-7 h-7 gap-[6px]">
        <span
          className={`h-0.5 w-6 bg-black rounded transition-all duration-300 transform
            ${open ? "rotate-45 translate-y-2" : ""}
          `}
        />
        <span
          className={`h-0.5 w-6 bg-black rounded transition-all duration-300 transform
            ${open ? "opacity-0" : "opacity-100"}
          `}
        />
        <span
          className={`h-0.5 w-6 bg-black rounded transition-all duration-300 transform
            ${open ? "-rotate-45 -translate-y-2" : ""}
          `}
        />
      </div>
    </button>
  );
}
