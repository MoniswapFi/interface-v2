import React from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "Discord", href: "#" },
  { label: "Telegram", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-4 px-4 z-20">
      <div className="flex flex-wrap justify-between items-center">
        {/* Left side - Copyright */}
        <div className="text-sm">
          &copy; Copyright 2024 MoniSwap. All rights reserved.
        </div>

        {/* Center - Social Links */}
        <div className="flex space-x-4">
          {socialLinks.map(({ label, href }) => (
            <Link key={label} to={href} className="hover:text-gray-300">
              {label}
            </Link>
          ))}
        </div>

        {/* Right side - Tagline */}
        <div className="text-sm text-right">
          The Unified Trading and Liquidity Marketplace for 🐻⛓️
        </div>
      </div>
    </footer>
  );
};

export default Footer;
