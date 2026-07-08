import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 mt-10">
      <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-md">
        <Image
          src="/pro_pic.jpg"
          alt="Profile picture"
          width={128}
          height={128}
          className="w-full h-full object-cover object-[center_25%]"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Fahim Faysal Nirjhar{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Full-Stack Developer & DevOps Engineer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Full-Stack Developer & DevOps Engineer specializing in scalable web
        applications, cloud infrastructure, and automated CI/CD pipelines.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 text-sm sm:text-base dark:bg-transparent"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="/_Fahim_Faysal_Nirjhar_Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 text-sm sm:text-base bg-white dark:text-black "
        >
          My Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
