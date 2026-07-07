"use client";
import Image from "next/image";
import React, { useState } from "react";
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
    title: "Portfolio Website",
    image: "/projects/portfolio.jpg",
    description:
      "Responsive portfolio website showcasing projects, skills, and contact information.",
    tech: "Next.js • Tailwind CSS",
    live: "#",
    github: "#",
  },
  {
    title: "Chat Application",
    image: "/projects/chatapp.jpg",
    description:
      "Real-time chat application supporting private messaging and online presence.",
    tech: "React • Node.js • Socket.io",
    live: "#",
    github: "#",
  },
  {
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

const Work = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    const details = projectDetails[project.id];

    setSelectedProject({
      ...project,
      ...details, // merges overview, technologies, features, architecture in directly
    });

    document.getElementById("project_modal").showModal();
  };

  return (
    <section
      id="work"
      className="w-full px-5 lg:px-8 xl:px-[12%] py-20 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>

      <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600">
        A selection of projects showcasing my experience in full-stack
        development, cloud infrastructure, and DevOps.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="
              bg-white borde border-gray-200
              rounded-2xl
              overflow-hidden
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                width={1280}
                height={609}
                className="object-cover w-full h-48"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-600 text-sm leading-6 mb-4">
                {project.description}
              </p>

              <p className="text-sm font-medium text-violet-600 mb-5">
                {project.tech}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2">
                <button
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    text-sm
                    rounded-full
                    border border-gray-300
                    hover:bg-gray-50
                  "
                  onClick={() => openProject(project)}
                >
                  Details
                  <FaArrowRight size={12} />
                </button>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    text-sm
                    rounded-full
                    border border-violet-500
                    text-violet-600
                    hover:bg-violet-50
                  "
                >
                  Live
                  <FaExternalLinkAlt size={12} />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    text-sm
                    rounded-full
                    border border-gray-300
                    hover:bg-gray-50
                  "
                >
                  GitHub
                  <FaGithub size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              px-8 py-3
              rounded-full
              border border-gray-700
              font-medium
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[4px_4px_0px_#000]
              hover:bg-[#fcf4ff]
              active:bg-[#fcf4ff]
              text-gray-700
            "
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      <dialog id="project_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-5xl p-0">
          {selectedProject && (
            <>
              <div className="w-full bg-gray-100">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={1400}
                  height={700}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold">{selectedProject.title}</h2>

                {selectedProject.subtitle && (
                  <p className="text-violet-600 mt-1">
                    {selectedProject.subtitle}
                  </p>
                )}

                <p className="mt-5 text-gray-600 leading-7">
                  {selectedProject.overview || selectedProject.description}
                </p>

                {selectedProject.technologies?.length > 0 && (
                  <div className="mt-8">
                    <h3 className="font-semibold mb-3">Technologies</h3>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                      px-3 py-1
                      rounded-full
                      bg-violet-100
                      text-violet-700
                      text-sm
                    "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.features?.length > 0 && (
                  <div className="mt-8">
                    <h3 className="font-semibold mb-3">Key Features</h3>

                    <ul className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature) => (
                        <li
                          key={feature}
                          className="
                        flex items-center gap-2
                      "
                        >
                          <span>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex gap-3 mt-10">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                px-5 py-3
                rounded-full
                bg-violet-600
                text-white
                flex items-center gap-2
              "
                  >
                    Live Demo
                    <FaExternalLinkAlt />
                  </a>

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                px-5 py-3
                rounded-full
                border border-gray-300
                flex items-center gap-2
              "
                  >
                    GitHub
                    <FaGithub />
                  </a>
                </div>
              </div>
            </>
          )}

          <div className="modal-action p-6 pt-0">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Work;
