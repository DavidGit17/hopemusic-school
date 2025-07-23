import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    document.body.style.position = mobileMenuOpen ? "fixed" : "";
    document.body.style.width = mobileMenuOpen ? "100%" : "";
  }, [mobileMenuOpen]);

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          [
            isMobile
              ? "block w-full text-left px-4 py-3 border-b border-white/20 text-lg"
              : "px-2 py-1 text-[14px]",
            "font-semibold rounded transition-colors duration-200",
            isActive
              ? "underline underline-offset-4 decoration-[#EC622D] font-inter text-[#262626]"
              : "hover:underline hover:underline-offset-4 hover:decoration-[#EC622D]",
          ].join(" ")
        }
        onClick={() => setMobileMenuOpen(false)}
      >
        {item.label}
      </NavLink>
    ));

  return (
    <>
      {/* ────── Mobile: Hamburger Left ────── */}
      <div className="fixed top-4 left-2 z-[100] md:hidden">
        <HamburgerXButton
          open={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        />
      </div>

      {/* ────── Mobile: Auth Button Right ────── */}
      <div className="fixed top-4 right-2 z-[100] md:hidden">
        {isLoaded ? (
          <AuthButtons />
        ) : (
          <div className="h-8 w-20 bg-gray-200 animate-pulse rounded" />
        )}
      </div>

      {/* ────── Desktop Navbar ────── */}
      <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 px-4 md:px-16 py-3 font-inter font-medium min-h-[64px] flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start flex-shrink-0 w-full md:w-auto">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Nav Links (centered on desktop) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          {isLoaded ? renderNavLinks() : (
            <div className="h-6 w-40 bg-gray-200 animate-pulse rounded" />
          )}
        </div>

        {/* Auth Buttons (right on desktop) */}
        <div className="hidden md:flex">
          {isLoaded ? <AuthButtons /> : (
            <div className="h-8 w-20 bg-gray-200 animate-pulse rounded" />
          )}
        </div>
      </nav>

      {/* ────── Mobile Menu Overlay ────── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/55 backdrop-blur-xl transition-opacity duration-300 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* ────── Mobile Menu Content ────── */}
      <div
        className={`fixed inset-0 flex items-center justify-center md:hidden z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ contain: "paint", willChange: "opacity, transform" }}
      >
        <div
          className={`w-4/5 max-w-xs bg-white/30 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 flex flex-col items-center transition-all duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-10"
          }`}
        >
          <div className="w-full flex flex-col gap-4">
            {isLoaded ? (
              renderNavLinks(true)
            ) : (
              <div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-4" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
