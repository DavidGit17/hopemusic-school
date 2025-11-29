import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import logo from "/src/assets/hopelogo.png";
import AuthButtons from "./AuthButtons";
import HamburgerXButton from "./ui/HamburgerXButton";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/instruments", label: "Instruments" },
  { to: "/instructors", label: "Instructors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoaded } = useAuth();
  const handleToggleMobileMenu = () => {
    console.debug("Navbar: toggling mobile menu");
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        onClick={() => setMobileMenuOpen(false)}
        className={({ isActive }) =>
          [
            isMobile
              ? "block w-full px-4 py-3 text-left border-b border-gray-200"
              : "px-2 py-1",
            "text-[14px] font-semibold transition-colors duration-200 rounded",
            isActive
              ? "underline underline-offset-4 decoration-[#EC622D] text-[#262626]"
              : "hover:underline hover:underline-offset-4 hover:decoration-[#EC622D]",
          ].join(" ")
        }
      >
        {item.label}
      </NavLink>
    ));

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
    fixed top-0 left-0 z-60 w-full h-16
    flex items-center 
    px-4 md:px-10 lg:px-16
    bg-white/30 backdrop-blur-lg
    border-b border-white/20
  "
      >
        {/* MOBILE NAVBAR (3 columns) */}
        <div className="flex w-full items-center justify-between md:hidden">
          {/* LEFT: Hamburger */}
          <div className="flex w-1/3 items-center z-999">
            <HamburgerXButton
              open={mobileMenuOpen}
              onClick={handleToggleMobileMenu}
            />
          </div>

          {/* CENTER: Logo */}
          <div className="flex w-1/3 justify-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* RIGHT: Auth */}
          <div className="flex w-1/3 justify-end">
            {isLoaded ? (
              <AuthButtons />
            ) : (
              <div className="w-20 h-8 bg-gray-200 rounded animate-pulse" />
            )}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex w-full items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-9 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {isLoaded ? (
              renderNavLinks()
            ) : (
              <div className="w-40 h-6 bg-gray-200 rounded animate-pulse" />
            )}
          </div>

          <div className="hidden md:flex">
            {isLoaded ? (
              <AuthButtons />
            ) : (
              <div className="w-20 h-8 bg-gray-200 rounded animate-pulse" />
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY (blur + dim) */}
      <div
        className={`
          fixed inset-0 z-45 md:hidden
          bg-black/40 backdrop-blur-md
          transition-opacity duration-300
          ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-50 md:hidden flex items-center justify-center
          transition-all duration-300
          ${
            mobileMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        <div
          className="
            w-4/5 max-w-xs p-6 rounded-2xl
            bg-white shadow-xl
          "
        >
          {isLoaded ? (
            renderNavLinks(true)
          ) : (
            <div className="w-40 h-6 bg-gray-200 rounded animate-pulse" />
          )}
        </div>
      </div>
    </>
  );
}
