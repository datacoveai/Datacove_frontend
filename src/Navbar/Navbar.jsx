import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center p-3 z-50 bg-[#060B27] home-container">
      {/* Logo */}
      <div className="text-[20px] font-bold cursor-pointer">
        <Link to="/">
          <h2>LOGO</h2>
        </Link>
      </div>

      {/* Hamburger Icon (Visible on small screens) */}
      <div className="lg:hidden absolute top-5 right-5 flex items-center cursor-pointer z-50">
        <RxHamburgerMenu
          size={30}
          className="cursor-pointer text-white"
          onClick={toggleMenu}
        />
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-[50px] left-0 w-full h-screen bg-[#060B27] lg:flex lg:static lg:w-auto lg:items-center lg:gap-8 lg:bg-transparent lg:h-auto`}
      >
        <div className="flex flex-col gap-4 p-5 lg:flex-row lg:p-0 lg:gap-8 text-gray-400 text-[12px]">
          <Link to="/morefeatures" className="cursor-pointer hover:text-white">
            Features
          </Link>
          <Link to="/pricing" className="cursor-pointer hover:text-white">
            Pricing
          </Link>
          <Link to="/agents" className="cursor-pointer hover:text-white">
            Agents
          </Link>
          <Link to="/about-us" className="cursor-pointer hover:text-white">
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="cursor-pointer hover:text-white"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Demo Button */}
      <div className="hidden lg:block text-[20px] font-bold">
        <button className="px-4 py-2 text-white rounded-2xl hover:bg-blue-600">
          DEMO
        </button>
      </div>
    </div>
  );
};

export default Navbar;
