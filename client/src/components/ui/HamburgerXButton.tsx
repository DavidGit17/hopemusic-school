import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface HamburgerXButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function HamburgerXButton({ open, onClick }: HamburgerXButtonProps) {
  return (
    <button onClick={onClick} className="md:hidden p-2" aria-label="Toggle menu">
      {open ? (
        <XMarkIcon className="w-6 h-6 text-black" />
      ) : (
        <Bars3Icon className="w-6 h-6 text-black" />
      )}
    </button>
  );
}
