"use client";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope size={18} />,
    label: "Email",
    value: "fahimfaysal1995@gmail.com",
    href: "mailto:fahimfaysal1995@gmail.com",
  },
  {
    icon: <FaPhone size={18} />,
    label: "Phone",
    value: "+8801731926452",
    href: "mob:+8801731926452",
  },
  {
    icon: <FaMapMarkerAlt size={18} />,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
  },
];

const socialLinks = [
  {
    icon: <FaGithub size={16} />,
    href: "https://github.com/FahimFaysalNirjhar",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={16} />,
    href: "https://www.linkedin.com/in/fahim-faysal-a62b91153/",
    label: "LinkedIn",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "af887fe9-4dba-499e-8c87-0f833660c87e",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-5 lg:px-8 xl:px-[12%] py-20 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get In Touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 font-Ovo">
        I&apos;m always open to discussing new projects, freelance
        opportunities, and full-time roles.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column - contact info */}
        <div className="flex flex-col gap-4">
          {contactInfo.map((item) => {
            const Wrapper = item.href ? "a" : "div";
            return (
              <Wrapper
                key={item.label}
                {...(item.href ? { href: item.href } : {})}
                className="
                  flex items-center gap-4
                  bg-white
                  border border-gray-200
                  rounded-2xl
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                  active:-translate-y-1
                  active:shadow-md
                  hover:bg-[#fcf4ff]
                    active:bg-[#fcf4ff]
                "
              >
                <span
                  className="
                    flex items-center justify-center
                    w-11 h-11
                    rounded-xl
                    bg-violet-100
                    text-violet-600
                    shrink-0
                  "
                >
                  {item.icon}
                </span>
                <span>
                  <span className="block text-xs text-gray-500">
                    {item.label}
                  </span>
                  <span className="block font-semibold text-gray-900">
                    {item.value}
                  </span>
                </span>
              </Wrapper>
            );
          })}

          <div className="mt-4">
            <h3 className="font-semibold mb-3">Follow me</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    flex items-center justify-center
                    w-11 h-11
                    rounded-full
                    border border-gray-200
                    bg-white
                    text-gray-600
                    hover:text-violet-600
                    hover:border-violet-300
                    transition-colors
                    duration-300
                    hover:bg-[#fcf4ff]
                    active:bg-[#fcf4ff]
                    hover:-translate-y-1
                    active:-translate-y-1
                   
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - form */}
        <div
          className="
            bg-white
            border border-gray-200
            rounded-2xl
            shadow-sm
            p-8
          "
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    border border-gray-200
                    bg-gray-50
                    text-sm
                    outline-none
                    focus:border-violet-400
                    focus:bg-white
                    transition-colors
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    border border-gray-200
                    bg-gray-50
                    text-sm
                    outline-none
                    focus:border-violet-400
                    focus:bg-white
                    transition-colors
                  "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                className="
                  w-full
                  px-4 py-3
                  rounded-xl
                  border border-gray-200
                  bg-gray-50
                  text-sm
                  outline-none
                  focus:border-violet-400
                  focus:bg-white
                  transition-colors
                "
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="
                  w-full
                  px-4 py-3
                  rounded-xl
                  border border-gray-200
                  bg-gray-50
                  text-sm
                  outline-none
                  focus:border-violet-400
                  focus:bg-white
                  transition-colors
                  resize-y
                "
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="
                flex items-center justify-center gap-2
                w-full
                px-6 py-3.5
                rounded-xl
                bg-gray-900
                text-white
                font-medium
                text-sm
                hover:bg-violet-600
                transition-colors
                duration-300
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {status === "sending" ? (
                "Sending..."
              ) : status === "sent" ? (
                "Message Sent ✓"
              ) : status === "error" ? (
                "Failed — Try Again"
              ) : (
                <>
                  Send Message <FaPaperPlane size={14} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
