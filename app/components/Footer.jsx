import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { assets } from "@/assets/assets";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Logo />

        <div
          className={`flex w-max items-center gap-2 mx-auto ${outfit.className}`}
        >
          <Image src={assets.mail_icon} alt="" className="w-6" />
          fahimfaysal1995@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className={outfit.className}>
          © 2026 Fahim Faysal Nirjhar. All rights reserved.{" "}
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              className={outfit.className}
              target="_blank"
              href="https://github.com/FahimFaysalNirjhar"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className={outfit.className}
              target="_blank"
              href="https://www.linkedin.com/in/fahim-faysal-a62b91153/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
