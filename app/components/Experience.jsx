//

import React from "react";
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

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full px-5 lg:px-8 xl:px-[12%]  scroll-mt-20"
    >
      {/* Section Header */}
      <h4 className="text-center mb-2 font-Ovo text-lg">
        My Professional Journey
      </h4>

      <h2 className="text-center text-5xl font-Ovo mb-16">Experience</h2>

      {/* Experience Card */}
      <div className="max-w-4xl mx-auto">
        {experienceData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                border border-gray-300 rounded-4xl p-8 md:p-10 bg-white cursor-pointer transition-all duration-500 hover:bg-[#fcf4ff] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:bg-[#fcf4ff] active:-translate-y-1 active:shadow-[6px_6px_0px_#000]hover:font-bold active:font-bold"
            >
              {/* Top */}
              <div className="flex items-start gap-5">
                <div
                  className="
                    w-14 h-14 rounded-2xl border border-gray-300 flex items-center justify-center shrink-0"
                >
                  <Icon className="text-2xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>

                  <p className="text-gray-500 mt-1">{item.company}</p>

                  <p className="text-sm font-medium mt-2">{item.years}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-6 border-t border-gray-200 pt-6">
                <p className="font-Ovo text-gray-600 leading-8">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
