import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#top">
          <Logo />
        </a>

        <ul className="hidden lg:flex items-center gap-2 lg:gap-3 xl:gap-6 2xl:gap-8 rounded-full px-4 lg:px-5 xl:px-8 2xl:px-12 py-2 lg:py-2.5 xl:py-3 bg-white shadow-sm bg-opacity-50 text-sm xl:text-base">
          <li>
            <a className="font-Ovo whitespace-nowrap" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo whitespace-nowrap" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo whitespace-nowrap" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="font-Ovo whitespace-nowrap" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="font-Ovo whitespace-nowrap" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo whitespace-nowrap" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo whitespace-nowrap" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 lg:gap-3 px-6 lg:px-7 xl:px-10 py-2 xl:py-2.5 border border-gray-500 rounded-full ml-2 lg:ml-4 font-Ovo whitespace-nowrap"
          >
            Contact{" "}
            <Image
              src={assets.arrow_icon}
              alt="arrow"
              width={12}
              height={12}
              className="w-3 h-3"
            />
          </a>
          <button className="block lg:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* ------- Mobile Menu ------- */}

        <ul
          ref={sideMenuRef}
          className="flex lg:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 h-screen bg-rose-50 transition duration-500"
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
