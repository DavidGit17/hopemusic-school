interface HamburgerXButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function HamburgerXButton({ open, onClick }: HamburgerXButtonProps) {
  return (
    <button
      className="md:hidden flex items-center ml-2 cursor-pointer z-50 relative w-9 h-9"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      type="button"
    >
      <span className="sr-only">Toggle menu</span>
      <div className="flex flex-col justify-center items-center w-7 h-7 gap-2">
        <span
          className={`h-0.5 w-7 bg-black rounded transition-all duration-300 transform
            ${open ? "rotate-45 translate-y-2" : ""}
          `}
          style={{ transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)" }}
        />
        <span
          className={`h-0.5 w-7 bg-black rounded transition-all duration-300 transform
            ${open ? "opacity-0 translate-x-3" : "translate-x-0"}
          `}
          style={{ transition: "opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)" }}
        />
        <span
          className={`h-0.5 w-7 bg-black rounded transition-all duration-300 transform
            ${open ? "-rotate-45 -translate-y-2" : ""}
          `}
          style={{ transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)" }}
        />
      </div>
    </button>
  );
}
