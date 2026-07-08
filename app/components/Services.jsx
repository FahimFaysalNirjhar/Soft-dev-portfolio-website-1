"use client";

import React from "react";
import { motion } from "motion/react";
import { FaLaptopCode, FaReact, FaServer, FaDocker } from "react-icons/fa";

export const serviceData = [
  {
    icon: FaLaptopCode,
    title: "Full-Stack Development",
    description:
      "Building modern web applications with React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and Prisma ORM.",
  },
  {
    icon: FaReact,
    title: "Frontend Development",
    description:
      "Creating responsive, fast, and user-friendly interfaces with React, Next.js, TypeScript, Redux, HTML, and CSS.",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description:
      "Developing secure APIs, authentication systems, and scalable server-side applications with Node.js and Express.js.",
  },
  {
    icon: FaDocker,
    title: "DevOps & Cloud",
    description:
      "Containerizing applications with Docker and managing deployments, CI/CD pipelines, Linux servers, and cloud infrastructure.",
  },
];

const titleLetters = "My Services".split("");

const Services = () => {
  return (
    <div
      id="services"
      className="relative w-full px-[12%] py-10 mt-20 scroll-mt-20 overflow-hidden"
    >
      {/* Floating background glow */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 left-1/4 w-72 h-72  dark:bg-white/10 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-40 right-1/4 w-64 h-64  dark:bg-white/5 rounded-full blur-3xl -z-10"
      />

      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Offer
      </motion.h4>

      <h2 className="flex justify-center flex-wrap text-5xl font-Ovo">
        {titleLetters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.04,
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

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.5 }}
        className="h-1 w-24 mx-auto mt-4 mb-8 rounded-full bg-gradient-to-r from-black via-gray-500 to-black dark:from-white dark:via-gray-400 dark:to-white bg-[length:200%_100%]"
        style={{ originX: 0 }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/70"
      >
        I build modern web applications and scalable cloud infrastructure,
        combining full-stack development with DevOps practices to deliver
        secure, high-performance, and reliable digital solutions.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon: Icon, title, description }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: idx * 0.15,
              type: "spring",
              stiffness: 80,
            }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -8 }}
            whileTap={{ y: -8, scale: 0.98 }}
            className="
              relative
              border border-gray-400 dark:border-white/20
              rounded-xl
              px-8 py-10
              cursor-pointer
              transition-shadow
              duration-500
              hover:bg-gray-50 dark:hover:bg-darkHover
              active:bg-gray-50 dark:active:bg-darkHover
              hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-white
              active:shadow-[4px_4px_0px_#000] dark:active:shadow-white
              hover:font-bold active:font-bold
              overflow-hidden
            "
          >
            {/* Shimmer sweep on hover/tap */}
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "150%" }}
              whileTap={{ x: "150%" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent skew-x-12 pointer-events-none"
            />

            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15 + 0.2,
                type: "spring",
                stiffness: 150,
              }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ rotate: 15, scale: 1.15 }}
              whileTap={{ rotate: 15, scale: 1.15 }}
              className="relative w-fit"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full border border-gray-400 dark:border-white/40"
              />
              <Icon className="text-4xl mb-4 relative z-10 dark:text-white" />
            </motion.div>

            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              {title}
            </h3>

            <p className="text-gray-600 text-sm leading-6 dark:text-white/80">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
