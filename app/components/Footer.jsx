"use client";

import React from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { assets } from "@/assets/assets";
import DarkLogo from "./DarkLogo";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        >
          {isDarkMode ? <DarkLogo /> : <Logo />}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`flex w-max items-center gap-2 mx-auto dark:text-white ${outfit.className}`}
        >
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          fahimfaysal1995@gmail.com
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-white/20 mx-[10%] mt-12 py-6"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`dark:text-white/80 ${outfit.className}`}
        >
          © 2026 Fahim Faysal Nirjhar. All rights reserved.{" "}
        </motion.p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <motion.li
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            whileHover={{ y: -3 }}
            whileTap={{ y: -3 }}
          >
            <a
              className={`dark:text-white hover:text-gray-600 dark:hover:text-white/70 transition-colors duration-300 ${outfit.className}`}
              target="_blank"
              href="https://github.com/FahimFaysalNirjhar"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ y: -3 }}
            whileTap={{ y: -3 }}
          >
            <a
              className={`dark:text-white hover:text-gray-600 dark:hover:text-white/70 transition-colors duration-300 ${outfit.className}`}
              target="_blank"
              href="https://www.linkedin.com/in/fahim-faysal-a62b91153/"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Footer;
