interface HamburgerXButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function HamburgerXButton({ open, onClick }: HamburgerXButtonProps) {
  return (
    <button
      className={`
        hidden max-[1269px]:flex 
        items-center justify-center
        ml-1 w-8 h-8 rounded-lg cursor-pointer
        z-999 relative transition-all duration-200
        ${open ? "border border-black" : "border-none"}
      `}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={open ? "Close menu" : "Open menu"}
      type="button"
    >
      <span className="sr-only">Toggle menu</span>

      <div className="flex flex-col justify-center items-center w-7 h-7 gap-1.5">
        
        {/* TOP LINE */}
        <span
          className={`h-0.5 w-6 bg-black rounded transition-all duration-300 transform
            ${open ? "rotate-45 translate-y-2" : ""}
          `}
        />

        {/* MIDDLE LINE */}
        <span
          className={`h-0.5 w-6 bg-black rounded transition-all duration-300 transform
            ${open ? "opacity-0" : "opacity-100"}
          `}
        />

        {/* BOTTOM LINE */}
        <span
          className={`h-0.5 w-6 bg-black rounded transition-all duration-300 transform
            ${open ? "-rotate-45 -translate-y-2" : ""}
          `}
        />
      </div>
    </button>
  );
}
