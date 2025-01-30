"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (route: string) =>
    `px-4 py-2 rounded-full ${
      pathname === route
        ? "bg-[rgba(26,26,26,1)] border border-[rgba(38,38,38,1)] text-white"
        : "bg-transparent text-gray-400 hover:bg-[rgba(26,26,26,1)] hover:text-white"
    } text-[18px] font-medium transition`;

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-[100px] bg-[rgba(15,15,15,0.65)] border border-[rgba(38,38,38,1)] rounded-full px-6 py-3 flex items-center justify-between shadow-lg max-w-[900px] w-[90%]">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/mainLogo5.png"
          width={40}
          height={40}
          alt="main-logo"
          className="object-contain "
        />
        <span className="text-white font-semibold text-lg">ZYYPHER</span>
      </Link>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden text-white text-2xl ml-auto"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <Image
            src="https://framerusercontent.com/images/O7WjYKRM4LPp15hIT4WB2Oq4cc.svg"
            alt="Menu Icon"
            width={24}
            height={24}
          />
        )}
      </button>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/" className={getLinkClass("/")}>
          Home
        </Link>
        <Link href="/about" className={getLinkClass("/about")}>
          About
        </Link>
        <Link href="/services" className={getLinkClass("/services")}>
          Services
        </Link>
        <Link href="/portfolio" className={getLinkClass("/portfolio")}>
          Portfolio
        </Link>

        <Link
          href="/contact"
          className="px-4 py-2 rounded-full bg-[rgb(205,241,64)] text-black text-[18px] font-medium shadow hover:bg-[rgb(184,226,52)] transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[60px] right-2 w-[85%] max-w-[300px] bg-[rgba(15,15,15,0.9)] rounded-lg shadow-lg border border-[rgba(38,38,38,1)] backdrop-blur-[50px] p-4 flex flex-col space-y-4 md:hidden">
          <Link
            href="/"
            className={getLinkClass("/")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={getLinkClass("/about")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className={getLinkClass("/services")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className={getLinkClass("/portfolio")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-full bg-[rgb(205,241,64)] text-black text-[18px] font-medium shadow hover:bg-[rgb(184,226,52)] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
