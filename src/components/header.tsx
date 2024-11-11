import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

const menuLinks = [
  { label: "Trade", href: "/trade" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Liquidity", href: "/liquidity" },
  { label: "More", href: "/more" },
];

export const Header = () => {
  const location = window.location.pathname;

  return (
    <div className="sticky top-0 z-20 flex items-center justify-between bg-transparent backdrop-blur-lg shadow-sm shadow-primary px-4 py-2">
      {/* Left side - Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="flex relative w-10 h-10">
          <img
            alt="Logo"
            className="cursor-pointer"
            src="/src/assets/logo.svg"
          />
        </div>
        <div className="font-light text-2xl primary-gradient">MONISWAP</div>
      </Link>

      {/* Center - Menu Links */}
      <div className="flex-1 flex justify-center">
        {menuLinks.map(({ label, href }) => (
          <Link
            key={href}
            to={href}
            className={`${
              location === href ? "shadow-sm" : ""
            } rounded-none hover:shadow-sm py-1.5 px-4 font-light text-gray-400 text-lg`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Right side - Connect Button */}
      <button className="border px-4 py-3 border-white rounded-md bg-gray-100">
        Connect Wallet
      </button>
    </div>
  );
};

export default Header;
