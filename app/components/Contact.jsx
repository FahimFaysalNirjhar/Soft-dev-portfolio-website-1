"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
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

const titleLetters = "Get In Touch".split("");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

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
        Connect with me
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
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-white/70 font-Ovo"
      >
        I&apos;m always open to discussing new projects, freelance
        opportunities, and full-time roles.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column - contact info */}
        <div className="flex flex-col gap-4">
          {contactInfo.map((item, idx) => {
            const Wrapper = motion[item.href ? "a" : "div"];
            return (
              <Wrapper
                key={item.label}
                {...(item.href ? { href: item.href } : {})}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.12,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ y: -4, scale: 1.02 }}
                className="
                  flex items-center gap-4 bg-white dark:bg-darkHover/40 border border-gray-200 dark:border-white/20 rounded-2xl p-5 shadow-sm transition-shadow duration-300 hover:shadow-md active:shadow-md hover:bg-gray-50 dark:hover:bg-darkHover active:bg-gray-50 dark:active:bg-darkHover"
              >
                <motion.span
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.12 + 0.15,
                    type: "spring",
                    stiffness: 150,
                  }}
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white shrink-0"
                >
                  {item.icon}
                </motion.span>
                <span>
                  <span className="block text-xs text-gray-500 dark:text-white/50">
                    {item.label}
                  </span>
                  <span className="block font-semibold text-gray-900 dark:text-white">
                    {item.value}
                  </span>
                </span>
              </Wrapper>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4"
          >
            <h3 className="font-semibold mb-3 dark:text-white">Follow me</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.45 + idx * 0.1,
                    type: "spring",
                    stiffness: 180,
                  }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ y: -4, scale: 1.1 }}
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 dark:border-white/20 bg-white dark:bg-darkHover/40 text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-white/50 transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-darkHover active:bg-gray-50 dark:active:bg-darkHover"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column - form */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="
            bg-white dark:bg-darkHover/40
            border border-gray-200 dark:border-white/20
            rounded-2xl
            shadow-sm
            p-8
          "
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 dark:text-white"
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
                    w-full px-4 py-3 rounded-xl
                    border border-gray-200 dark:border-white/20
                    bg-gray-50 dark:bg-darkTheme
                    text-sm text-gray-900 dark:text-white
                    placeholder:text-gray-400 dark:placeholder:text-white/40
                    outline-none
                    focus:border-gray-500 dark:focus:border-white/50
                    focus:bg-white dark:focus:bg-darkTheme
                    transition-colors
                  "
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 dark:text-white"
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
                    w-full px-4 py-3 rounded-xl
                    border border-gray-200 dark:border-white/20
                    bg-gray-50 dark:bg-darkTheme
                    text-sm text-gray-900 dark:text-white
                    placeholder:text-gray-400 dark:placeholder:text-white/40
                    outline-none
                    focus:border-gray-500 dark:focus:border-white/50
                    focus:bg-white dark:focus:bg-darkTheme
                    transition-colors
                  "
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2 dark:text-white"
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
                  w-full px-4 py-3 rounded-xl
                  border border-gray-200 dark:border-white/20
                  bg-gray-50 dark:bg-darkTheme
                  text-sm text-gray-900 dark:text-white
                  placeholder:text-gray-400 dark:placeholder:text-white/40
                  outline-none
                  focus:border-gray-500 dark:focus:border-white/50
                  focus:bg-white dark:focus:bg-darkTheme
                  transition-colors
                "
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 dark:text-white"
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
                  w-full px-4 py-3 rounded-xl
                  border border-gray-200 dark:border-white/20
                  bg-gray-50 dark:bg-darkTheme
                  text-sm text-gray-900 dark:text-white
                  placeholder:text-gray-400 dark:placeholder:text-white/40
                  outline-none
                  focus:border-gray-500 dark:focus:border-white/50
                  focus:bg-white dark:focus:bg-darkTheme
                  transition-colors
                  resize-y
                "
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1.02 }}
              className="
                flex items-center justify-center gap-2
                w-full px-6 py-3.5 rounded-xl
                bg-gray-900 dark:bg-white
                text-white dark:text-gray-900
                font-medium text-sm
                hover:bg-gray-700 dark:hover:bg-gray-200
                transition-colors duration-300
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
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
