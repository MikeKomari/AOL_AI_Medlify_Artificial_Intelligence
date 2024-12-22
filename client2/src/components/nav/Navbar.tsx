import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center !bg-transparent container z-[9999]">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="w-[80px] h-[80px] rounded-full"
          src="assets/logo1.png"
          alt=""
        />
        <h1 className="text-lg font-bold tracking-wide">Medify</h1>
      </div>

      {/* Links */}
      <div className=" md:flex space-x-6">
        <a href="#about" className="hover:text-blue-600">
          About
        </a>
        <a href="#content" className="hover:text-blue-600">
          Content
        </a>
        <a href="#events" className="hover:text-blue-600">
          Events
        </a>
        <a href="#login" className="hover:text-blue-600">
          Login
        </a>
        <a
          href="#signup"
          className="hover:text-blue-600 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Navbar;
