import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
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
          <div>
            <img src={logo} alt="" className="mt-[10px]" />
          </div>
        </Link>
      </div>

      {/* Hamburger Icon (Visible on small screens) */}
      <div className="lg:hidden absolute  right-5 flex justify-center align-middle items-center cursor-pointer z-50">
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
          <NavLink
            to="/morefeatures"
            className={({ isActive }) =>
              `cursor-pointer hover:text-white ${
                isActive
                  ? " text-white underline decoration-[white] underline-offset-[10px] "
                  : ""
              }`
            }
          >
            Features
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `cursor-pointer hover:text-white ${
                isActive
                  ? "text-white underline decoration-[white] underline-offset-[10px]"
                  : ""
              }`
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              `cursor-pointer hover:text-white ${
                isActive
                  ? "text-white underline decoration-[white] underline-offset-[10px]"
                  : ""
              }`
            }
          >
            Career
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `cursor-pointer hover:text-white ${
                isActive
                  ? "text-white underline decoration-[white] underline-offset-[10px]"
                  : ""
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `cursor-pointer hover:text-white ${
                isActive
                  ? "text-white underline decoration-[white] underline-offset-[10px]"
                  : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Demo Button */}
      <div className="hidden lg:block text-[20px] font-bold">
        <button className="px-4 py-2 text-white rounded-2xl hover:bg-[#7214FF]">
          DEMO
        </button>
      </div>
    </div>
  );
};

export default Navbar;
