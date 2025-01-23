"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/85 border-b border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-white hover:text-gray-300 transition"
        >
          <Image
            src="/images/mainLogo.jpg"
            width={30}
            height={20}
            alt="Main logo"
          />
          <span className="font-semibold text-lg">ZYYPHER</span>
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden bg-black">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-300"
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>


        {/* Login & Signup for Desktop */}
        <div className="hidden md:flex space-x-4">
          {/* <a
            href="/login"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Sign Up
          </a> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md md:hidden">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-400 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-400 hover:text-white"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="block px-4 py-2 text-gray-400 hover:text-white"
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            className="block px-4 py-2 text-gray-400 hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-400 hover:text-white"
          >
            Contact
          </Link>
          {/* <a
            href="/login"
            className="block px-4 py-2 text-gray-400 hover:text-white"
          >
            Login
          </a>
          <a
            href="/signup"
            className="block px-4 py-2 text-white bg-blue-600 text-center rounded-md mx-4 mt-2"
          >
            Sign Up
          </a> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
