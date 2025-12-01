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
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY && window.scrollY > 50) {
  //       // scrolling down
  //       setHidden(true);
  //     } else {
  //       // scrolling up
  //       setHidden(false);
  //     }
  //     setLastScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  const handleToggleMobileMenu = () => {
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
        className={`fixed left-1/2 -translate-x-1/2
    top-4
    w-[95%] md:w-[85%] lg:w-[80%]
    h-16 px-4 md:px-10 lg:px-16
    bg-white/10 backdrop-blur-xl
    shadow-lg shadow-black/10
    rounded-3xl
    z-60 flex items-center
    transition-transform duration-300 ease-out
    ${hidden ? "-translate-y-24" : "translate-y-0"}
  `}
      >
        {/* MOBILE NAVBAR */}
        <div className="flex w-full items-center justify-between md:hidden">
          {/* LEFT: Hamburger */}
          <div className="flex w-1/3 items-center z-999">
            <HamburgerXButton
              open={mobileMenuOpen}
              onClick={handleToggleMobileMenu}
            />
          </div>

          {/* CENTER: empty to balance layout */}
          <div className="flex w-1/3 justify-center"></div>

          {/* RIGHT: Logo (moved here) */}
          <div className="flex w-1/3 justify-end">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-8 md:h-9 w-auto object-contain shrink-0
"
              />
            </Link>
          </div>
        </div>

        {/* DESKTOP NAVBAR */}
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

      {/* MOBILE OVERLAY */}
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
            flex flex-col
          "
        >
          {/* NAVLINKS */}
          <div className="flex-1">
            {isLoaded ? (
              renderNavLinks(true)
            ) : (
              <div className="w-40 h-6 bg-gray-200 rounded animate-pulse" />
            )}
          </div>

          {/* LOGIN CTA (BOTTOM CENTER) */}
          <div className="pt-6 flex justify-center">
            {isLoaded ? (
              <AuthButtons />
            ) : (
              <div className="w-24 h-8 bg-gray-200 rounded animate-pulse" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
