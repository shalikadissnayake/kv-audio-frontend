import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import MobileNavPanel from "./mobileNavPanel";


export default function Header() {
  const [navPanelOpen, setNavPanelOpen] = useState(false);
  const token = localStorage.getItem("token");

  return (
    <header className="w-full h-[70px] shadow-xl flex items-center justify-between px-6 bg-accent text-white relative">
      {/* Logo */}
      <Link to="/">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[60px] h-[60px] object-cover border-[3px] rounded-full"
        />
      </Link>

      {/* Center Navigation Links */}
      <nav className="hidden md:flex gap-8 text-[20px] font-semibold">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/items">Items</Link>
      </nav>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        {/* Cart */}
        <Link to="/booking" className="hidden md:block text-[24px]">
          <FaCartShopping />
        </Link>

        {/* Login / Logout */}
        {token ? (
          <button
            className="hidden md:block bg-white text-black px-4 py-1 rounded-lg text-[16px] font-medium hover:bg-gray-200 transition"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="hidden md:block bg-white text-black px-4 py-1 rounded-lg text-[16px] font-medium hover:bg-gray-200 transition"
          >
            Sign In
          </Link>
        )}

        {/* Mobile Hamburger */}
        <GiHamburgerMenu
          className="md:hidden text-[28px] cursor-pointer"
          onClick={() => setNavPanelOpen(true)}
        />
      </div>

      {/* Mobile Navigation Panel */}
      <MobileNavPanel isOpen={navPanelOpen} setOpen={setNavPanelOpen} />
    </header>
  );
}
