"use client";

import React from "react";
import { motion } from "motion/react";
import { FaGlobe } from "react-icons/fa";

const experienceData = [
  {
    title: "Web Developer & Webmaster",
    company: "Drik · Full-time",
    years: "Nov 2021 – Jul 2024 · 2 yrs 9 mos",
    description:
      "Worked as a Full-Stack Developer and Webmaster, building and maintaining web applications with React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and Prisma ORM. Managed website operations, SEO, social media platforms, and digital marketing campaigns to improve website performance and online engagement.",
    icon: FaGlobe,
  },
];

const titleLetters = "Experience".split("");

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full px-5 lg:px-8 xl:px-[12%] py-10 scroll-mt-20 overflow-hidden"
    >
      {/* Floating background glow — grayscale */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 left-1/4 w-72 h-72  dark:bg-white/10 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-40 right-1/4 w-64 h-64 bg-gray-400/20 dark:bg-white/5 rounded-full blur-3xl -z-10"
      />

      {/* Section Header */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center mb-2 font-Ovo text-lg tracking-wide"
      >
        My Professional Journey
      </motion.h4>

      <h2 className="flex justify-center text-5xl font-Ovo mb-4">
        {titleLetters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.05,
              type: "spring",
              stiffness: 120,
            }}
            viewport={{ once: false, amount: 0 }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </h2>

      {/* Animated underline — black/white */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        className="h-1 w-24 mx-auto mb-16 rounded-full bg-gradient-to-r from-black via-gray-500 to-black dark:from-white dark:via-gray-400 dark:to-white bg-[length:200%_100%]"
        style={{ originX: 0 }}
      />

      {/* Experience Card */}
      <div className="max-w-4xl mx-auto">
        {experienceData.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -8 }}
              whileTap={{ y: -8, scale: 0.98 }}
              className="
                relative
                border border-gray-300 dark:border-white/20
                rounded-4xl p-8 md:p-10
                bg-white dark:bg-darkHover/40
                cursor-pointer transition-shadow duration-500
                hover:bg-gray-50 hover:shadow-[6px_6px_0px_#000]
                active:bg-gray-50 active:shadow-[6px_6px_0px_#000]
                dark:hover:bg-darkHover dark:hover:shadow-white
                dark:active:bg-darkHover dark:active:shadow-white
                hover:font-bold active:font-bold overflow-hidden"
            >
              {/* Shimmer sweep on hover/tap */}
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "150%" }}
                whileTap={{ x: "150%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent skew-x-12 pointer-events-none"
              />

              {/* Top */}
              <div className="flex items-start gap-5 relative">
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 150,
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ rotate: 15, scale: 1.15 }}
                  whileTap={{ rotate: 15, scale: 1.15 }}
                  className="relative w-14 h-14 rounded-2xl border border-gray-300 dark:border-white/30
                    flex items-center justify-center shrink-0"
                >
                  {/* Pulsing ring — grayscale */}
                  <motion.span
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-2xl border border-gray-400 dark:border-white/40"
                  />
                  <Icon className="text-2xl dark:text-white relative z-10" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.35 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 dark:text-white/70 mt-1">
                    {item.company}
                  </p>

                  <p className="text-sm font-medium mt-2 dark:text-white/70">
                    {item.years}
                  </p>
                </motion.div>
              </div>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mt-6 border-t border-gray-200 dark:border-white/20 pt-6 relative"
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="font-Ovo text-gray-600 dark:text-white/80 leading-8"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
