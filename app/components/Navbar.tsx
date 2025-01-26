"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // For logo images
import { usePathname } from "next/navigation"; // To detect the current path

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const getLinkClass = (route: string) =>
    `px-4 py-2 rounded-full ${
      pathname === route
        ? "bg-[rgba(19,24,57)] border border-[rgba(22,28,68)] text-[var(--extracted-r6o4lv,var(--token-b29c03a1-9065-4901-9b4a-bc27ba796af3,rgb(240,241,244)))]"
        : "bg-transparent text-[rgb(196,200,212)] hover:bg-[rgba(19,24,57)] hover:text-[var(--extracted-r6o4lv,var(--token-b29c03a1-9065-4901-9b4a-bc27ba796af3,rgb(240,241,244)))]"
    } text-[18px] font-medium transition`;

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-[rgba(10,12,30,0.8)] border border-[rgba(19,24,57,0.8)] rounded-full px-6 py-3 flex items-center justify-between shadow-lg max-w-[800px] w-[90%]">
      {/* Logo Section */}
      <Link href="/" className="text-white font-semibold text-lg">
        ZYYPHER
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
        <Link href="/portfolio" className={getLinkClass("/portfolio")}>
          Portfolio
        </Link>
        <Link href="/services" className={getLinkClass("/services")}>
          Services
        </Link>
        <Link
          href="/contact"
          className="px-4 py-2 rounded-full bg-[rgb(28,35,84)] text-[rgb(204,215,255)] text-[18px] font-medium shadow hover:bg-[rgba(38,115,204,0.18)] transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[60px] right-2 w-[85%] max-w-[300px] bg-[rgb(10,13,31)] rounded-lg shadow-lg border border-[rgb(19,24,57)] backdrop-blur-md p-4 flex flex-col space-y-4 md:hidden">
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
            href="/portfolio"
            className={getLinkClass("/portfolio")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            className={getLinkClass("/services")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={getLinkClass("/contact")}
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
