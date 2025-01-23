import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/85 border-b border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <a
          href="/"
          className="flex items-center space-x-2 text-white hover:text-gray-300 transition"
        >
          {/* Replace with your SVG or logo */}
          <Image src='/images/mainLogo.jpg' width={30} height={20} alt='Main logo'  />
          <span className="font-semibold text-lg">ZYYPHER</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="/features"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Features
          </a>
          <a
            href="/resources"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Resources
          </a>
          <a
            href="/support"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Support
          </a>
          <a
            href="/enterprise"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Enterprise
          </a>
          <a
            href="/pricing"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Pricing
          </a>
          <a
            href="/contact"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* Login & Signup */}
        <div className="flex space-x-4">
          <a
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
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
