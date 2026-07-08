import Image from "next/image";
import React from "react";

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

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 mt-20  scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I build modern web applications and scalable cloud infrastructure,
        combining full-stack development with DevOps practices to deliver
        secure, high-performance, and reliable digital solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon: Icon, title, description }, idx) => (
          <div
            key={idx}
            className="
        border border-gray-400
        rounded-xl
        px-8 py-10
        cursor-pointer
        transition-all
        duration-500
        hover:bg-[#fcf4ff]
        hover:-translate-y-1
        hover:shadow-[4px_4px_0px_#000]
        active:bg-[#fcf4ff]
        active:-translate-y-1
        active:shadow-[4px_4px_0px_#000]
        hover:font-bold
        active:font-bold
        dark:hover:bg-darkHover
        dark:hover:shadow-white
        dark:active:bg-darkHover
        dark:active:shadow-white

      "
          >
            <Icon className="text-4xl mb-4" />

            <h3 className="text-lg font-semibold mb-3 ">{title}</h3>

            <p className="text-gray-600 text-sm leading-6 dark:text-white/80">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
