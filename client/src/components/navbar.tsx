import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/clerk-react";
import logo from "/src/assets/Mainlogo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/instruments", label: "Instruments" },
    { to: "/instructors", label: "Instructors" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center h-fit max-w-screen px-4 md:px-10 py-3 font-inter font-medium">
      <div className="flex items-center flex-1">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-8 text-[14px] font-semibold flex-1 justify-center">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                "px-2 py-1 rounded transition-colors duration-200",
                isActive
                  ? "underline underline-offset-4 decoration-purple-600 font-bold purple-blue-700"
                  : "hover:underline hover:underline-offset-4 hover:decoration-purple-400 text-black",
              ].join(" ")
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      {/* Desktop Auth */}
      <div className="hidden md:flex items-center space-x-2">
        <SignedOut>
          <SignInButton mode="modal" fallbackRedirectUrl="/">
            <button className="text-black text-sm px-4 py-2 rounded-lg mr-2 hover:bg-gray-200 transition cursor-pointer">
              Login
            </button>
          </SignInButton>
          <SignUpButton mode="modal" fallbackRedirectUrl="/">
            <button className="bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 transition cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden flex items-center ml-2 cursor-pointer z-50 relative w-9 h-9"
        onClick={() => setMobileMenuOpen((open) => !open)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <span className="sr-only">Toggle menu</span>
        <div className="flex flex-col justify-center items-center w-7 h-7 gap-2">
          <span
            className={`h-0.5 w-7 bg-black rounded transition-all duration-300
              ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}
            `}
          />
          <span
            className={`h-0.5 w-7 bg-black rounded transition-all duration-300
              ${mobileMenuOpen ? "opacity-0" : ""}
            `}
          />
          <span
            className={`h-0.5 w-7 bg-black rounded transition-all duration-300
              ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}
            `}
          />
        </div>
      </button>
      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center md:hidden z-40 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                "block w-full text-center px-4 py-3 border-b border-gray-100",
                isActive
                  ? "underline underline-offset-4 decoration-purple-600 font-bold text-purple-700"
                  : "hover:underline hover:underline-offset-4 hover:decoration-purple-400 text-black",
              ].join(" ")
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <div className="flex flex-col items-center py-2">
          <SignedOut>
            <SignInButton mode="modal" fallbackRedirectUrl="/">
              <button className="text-black text-sm px-4 py-2 rounded-lg mb-2 hover:bg-gray-200 transition cursor-pointer w-32">
                Login
              </button>
            </SignInButton>
            <SignUpButton mode="modal" fallbackRedirectUrl="/">
              <button className="bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 transition cursor-pointer w-32">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
