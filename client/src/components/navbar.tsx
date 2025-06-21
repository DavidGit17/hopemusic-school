import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/MainLogo.png";
import AuthButtons from "./AuthButtons";
import HamburgerXButton from "./ui/HamburgerXButton";
import { useAuth } from "@clerk/clerk-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoaded } = useAuth();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/instruments", label: "Instruments" },
    { to: "/instructors", label: "Instructors" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Hamburger/X button always on top left, above overlay and modal */}
      <div className="fixed top-4 left-2 z-[100] md:hidden">
        <HamburgerXButton
          open={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        />
      </div>
      <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center h-fit max-w-screen px-4 md:px-10 py-3 font-inter font-medium min-h-[64px]">
        {/* Logo */}
        <div className="MainLogo flex items-center flex-1 justify-left">
          <img src={logo} alt="Logo" className="h-10 md:pl-0 pl-10 " />
        </div>
        {/* Desktop Navigation */}
        <div className="desktop-nav hidden md:flex space-x-8 text-[14px] font-semibold flex-0 pr-5 justify-center">
          {isLoaded ? (
            navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "px-2 py-1 rounded transition-colors duration-200",
                    isActive
                      ? "underline underline-offset-4 decoration-purple-600 font-bold text-purple-700"
                      : "hover:underline hover:underline-offset-4 hover:decoration-purple-400 text-black",
                  ].join(" ")
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))
          ) : (
            <div className="h-6 w-40 bg-gray-200 animate-pulse rounded" />
          )}
        </div>
        {/* Desktop Auth Buttons */}
        <div className="desktop-auth hidden md:flex">
          {isLoaded ? <AuthButtons /> : <div className="h-8 w-20 bg-gray-200 animate-pulse rounded" />}
        </div>
      </nav>
      {/* Background overlay (blur behind content) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/55 backdrop-blur-xl transition-opacity duration-300 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
      {/* Mobile Menu Modal */}
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
          <div className="w-full flex flex-col">
            {isLoaded ? (
              navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "block w-full text-left px-4 py-3 border-b border-white/20 text-lg font-semibold rounded-md",
                      isActive
                        ? "underline underline-offset-4 decoration-purple-600 font-bold text-purple-700"
                        : "hover:underline hover:underline-offset-4 hover:decoration-purple-400 text-black",
                    ].join(" ")
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))
            ) : (
              <div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-4" />
            )}
            <div className="mt-4 w-full">
              {isLoaded ? <AuthButtons isMobile /> : <div className="h-8 w-20 bg-gray-200 animate-pulse rounded" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
