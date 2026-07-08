"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Smart Deals",
    subtitle: "Product Marketplace & Bidding Platform",
    image: "/work1.png",
    description:
      "A full-stack marketplace platform where users can list products, place bids, manage listings, and track bidding activities through a secure authentication system.",
    tech: ["React • Firebase • Node.js • Express.js • MongoDB • Tailwind CSS"],
    github:
      "https://github.com/FahimFaysalNirjhar/smart-deals-react-client-side",
    live: "https://smart-deals.surge.sh/",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    image: "/projects/ecommerce.jpg",
    description:
      "Modern e-commerce application with authentication, cart management, and payment integration.",
    tech: "React • Node.js • MongoDB • Stripe",
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Dragon News",
    image: "/work2.png",
    description:
      "A responsive news application featuring Firebase Authentication, protected routes, dynamic news categories, article details pages, email verification, password recovery, and social login integration.",
    tech: "React • Firebase Auth • React Router • Tailwind CSS • DaisyUI",
    github: "https://github.com/FahimFaysalNirjhar/Dragon-News-React",
    live: "https://dragon-news-react-projec-8767f.web.app/category/1",
  },
  {
    id: 4,
    title: "Portfolio Website",
    image: "/projects/portfolio.jpg",
    description:
      "Responsive portfolio website showcasing projects, skills, and contact information.",
    tech: "Next.js • Tailwind CSS",
    live: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Chat Application",
    image: "/projects/chatapp.jpg",
    description:
      "Real-time chat application supporting private messaging and online presence.",
    tech: "React • Node.js • Socket.io",
    live: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Blog CMS",
    image: "/projects/blogcms.jpg",
    description:
      "A complete content management system with authentication, dashboard, and rich text editor.",
    tech: "Next.js • Prisma • PostgreSQL",
    live: "#",
    github: "#",
  },
];

export const projectDetails = {
  1: {
    overview:
      "Smart Deals is a full-stack marketplace application where users can create product listings, place bids, manage products, and track bidding activities through secure authentication.",
    technologies: [
      "React",
      "Firebase Authentication",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "DaisyUI",
    ],
    features: [
      "Firebase Authentication",
      "Google Login",
      "Email Verification",
      "Password Reset",
      "Protected Routes",
      "Product CRUD Operations",
      "Bidding System",
      "User Dashboard",
      "Search Functionality",
      "Responsive Design",
    ],
    architecture: [
      "React Frontend",
      "Firebase Authentication",
      "Express.js REST API",
      "MongoDB Atlas Database",
    ],
  },
  2: {
    overview:
      "Dragon News is a modern news application with secure authentication, protected routes, and dynamic news categories.",
    technologies: [
      "React",
      "React Router",
      "Firebase",
      "Tailwind CSS",
      "DaisyUI",
    ],
    features: [
      "Google Login",
      "GitHub Login",
      "Email Authentication",
      "Private Routes",
      "News Categories",
      "Responsive Design",
    ],
    architecture: ["React Frontend", "Firebase Authentication", "Context API"],
  },
};

const titleLetters = "My Latest Work".split("");

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    const details = projectDetails[project.id];
    if (!details) return;
    setSelectedProject({ ...project, ...details });
    document.getElementById("project_modal").showModal();
  };

  const handleToggle = () => {
    setShowAll((prev) => {
      const next = !prev;
      if (prev && !next) {
        // was showing all, now collapsing — scroll back to section top
        requestAnimationFrame(() => {
          document.getElementById("work")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
      return next;
    });
  };
  return (
    <section
      id="work"
      className="relative w-full px-5 lg:px-8 xl:px-[12%] py-20 scroll-mt-20 overflow-hidden"
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
        className="absolute top-40 right-1/4 w-64 h-64 bg-gray-400/20 dark:bg-white/5 rounded-full blur-3xl -z-10"
      />

      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>

      <h2 className="flex justify-center flex-wrap text-5xl font-Ovo">
        {titleLetters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.03,
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
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-white/70 font-Ovo"
      >
        A selection of projects showcasing my experience in full-stack
        development, cloud infrastructure, and DevOps.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id ?? index}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: (index % 3) * 0.15,
              type: "spring",
              stiffness: 80,
            }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -10 }}
            whileTap={{ y: -10, scale: 0.98 }}
            className="
              relative
              bg-white dark:bg-darkHover/40
              border border-gray-200 dark:border-white/20
              rounded-2xl overflow-hidden shadow-sm
              transition-shadow duration-300
              hover:shadow-xl active:shadow-xl
            "
          >
            {/* Shimmer sweep on hover/tap */}
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "150%" }}
              whileTap={{ x: "150%" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-0 z-10 w-1/3 bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent skew-x-12 pointer-events-none"
            />

            {/* Project Image */}
            <div className="overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  width={1280}
                  height={609}
                  className="object-cover w-full h-48"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-white/70 text-sm leading-6 mb-4">
                {project.description}
              </p>

              <p className="text-sm font-medium text-gray-800 dark:text-white/80 mb-5">
                {project.tech}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-gray-300 dark:border-white/30 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 active:bg-gray-50 dark:active:bg-white/10"
                  onClick={() => openProject(project)}
                >
                  Details
                  <FaArrowRight size={12} />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.05 }}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-gray-700 dark:border-white text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 active:bg-gray-50 dark:active:bg-white/10"
                >
                  Live
                  <FaExternalLinkAlt size={12} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.05 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-gray-300 dark:border-white/30 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 active:bg-gray-50 dark:active:bg-white/10"
                >
                  GitHub
                  <FaGithub size={12} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ y: -4, scale: 0.97 }}
            onClick={handleToggle}
            className="
    px-8 py-3 rounded-full border border-gray-700 dark:border-white/40
    font-medium transition-shadow duration-300
    hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-white
    active:shadow-[4px_4px_0px_#000] dark:active:shadow-white
    hover:bg-gray-50 dark:hover:bg-darkHover
    active:bg-gray-50 dark:active:bg-darkHover
    text-gray-700 dark:text-white
  "
          >
            {showAll ? "Show Less" : "Show More"}
          </motion.button>
        </div>
      )}

      <dialog id="project_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-5xl p-0 dark:bg-darkTheme dark:text-white">
          {selectedProject && (
            <div key={selectedProject.title}>
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full bg-gray-100 overflow-hidden"
              >
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={1400}
                  height={700}
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              <div className="p-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl font-bold dark:text-white/80"
                >
                  {selectedProject.title}
                </motion.h2>

                {selectedProject.subtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-700 dark:text-white/70 mt-1"
                  >
                    {selectedProject.subtitle}
                  </motion.p>
                )}

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4 }}
                  className="mt-5 text-gray-600 dark:text-white/70 leading-7"
                >
                  {selectedProject.overview || selectedProject.description}
                </motion.p>

                {selectedProject.technologies?.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4 }}
                    className="mt-8"
                  >
                    <motion.h3
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ duration: 0.3 }}
                      className="font-semibold mb-3 dark:text-white"
                    >
                      Technologies
                    </motion.h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.7 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{
                            duration: 0.35,
                            delay: i * 0.04,
                            type: "spring",
                            stiffness: 150,
                          }}
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 1.08 }}
                          className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {selectedProject.features?.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4 }}
                    className="mt-8"
                  >
                    <motion.h3
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ duration: 0.3 }}
                      className="font-semibold mb-3 dark:text-white"
                    >
                      Key Features
                    </motion.h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ duration: 0.35, delay: i * 0.05 }}
                          whileHover={{ x: 4 }}
                          whileTap={{ x: 4 }}
                          className="flex items-center gap-2 dark:text-white/90"
                        >
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{
                              duration: 0.3,
                              delay: i * 0.05,
                              type: "spring",
                              stiffness: 200,
                            }}
                          >
                            ✓
                          </motion.span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-3 mt-10"
                >
                  <motion.a
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 1.05, y: -3 }}
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center gap-2"
                  >
                    Live Demo
                    <FaExternalLinkAlt />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 1.05, y: -3 }}
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-full border border-gray-300 dark:border-white/30 flex items-center gap-2 dark:text-white"
                  >
                    GitHub
                    <FaGithub />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          )}

          <div className="modal-action p-6 pt-0">
            <form method="dialog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}
                className="btn"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </motion.button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Work;
