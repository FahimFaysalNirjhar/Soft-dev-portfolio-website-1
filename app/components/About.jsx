import { infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLinux,
  FaDocker,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

const toolsData = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", needsBg: true },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF", needsBg: true },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma ORM", icon: SiPrisma, color: "#FFFFFF", needsBg: true },
  { name: "Linux", icon: FaLinux, color: "#000000", needsBg: true },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="flex w-full items-center lg:items-start flex-col lg:flex-row  gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src="/profile.JPG"
            alt="developer profile picture"
            width={400}
            height={500}
            className="w-full h-auto rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo cursor-pointer transition-all duration-500 hover:font-bold hover:-translate-y-1 active:font-bold active:-translate-y-1 ">
            I'm a Full-Stack Developer & DevOps Engineer with experience
            building scalable web applications and deploying production-ready
            systems. My expertise includes React, Next.js, TypeScript, Node.js,
            Express.js, MongoDB, PostgreSQL, and Prisma ORM. I also work with
            Docker, AWS, Redis, and CI/CD workflows to create reliable,
            cloud-native applications. Passionate about clean architecture,
            performance optimization, and delivering seamless user experiences
            from development to deployment.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, idx) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl
                p-6 cursor-pointer hover:bg-[#fcf4ff] hover:font-bold hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0px_#000] active:bg-[#fcf4ff]  active:scale-[1.02] active:-translate-y-1 active:shadow-[4px_4px_0px_#000]
                dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50
                dark:active:shadow-white dark:active:bg-darkHover/50
"
                key={idx}
              >
                <Image
                  className="w-7 mt-3"
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </li>
            ))}
          </ul>
          <h4 className="my-8 text-gray-700 font-semibold font-Ovo dark:text-white/80">
            Tech Stack
          </h4>
          <ul className="flex flex-wrap gap-4">
            {toolsData.map((tool, index) => {
              const Icon = tool.icon;

              return (
                <li
                  key={index}
                  className="p-4 border border-gray-300 rounded-xl hover:shadow-[4px_4px_0px_#000] hover:-translate-y-1 transition-all duration-300 cursor-pointer active:shadow-[4px_4px_0px_#000] active:-translate-y-1"
                >
                  {tool.needsBg ? (
                    <span
                      className={`inline-flex items-center justify-center rounded-md p-1.5 ${
                        tool.name === "Linux"
                          ? "bg-white"
                          : "bg-neutral-800 dark:bg-neutral-700"
                      }`}
                    >
                      <Icon
                        size={30}
                        color={tool.color}
                        className="hover:scale-110 transition-transform duration-300"
                      />
                    </span>
                  ) : (
                    <Icon
                      size={42}
                      color={tool.color}
                      className="hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
