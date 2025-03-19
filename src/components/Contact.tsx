"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTelegramPlane,
} from "react-icons/fa"; // Using react-icons for icons
import { FaXTwitter } from "react-icons/fa6"; // Using react-icons for icons

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/mikeling-dev",
      icon: <FaGithub />,
    },
    { name: "X", url: "https://x.com/mikeling_dev", icon: <FaXTwitter /> },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mike-ling-72b8151b6/",
      icon: <FaLinkedin />,
    },
    {
      name: "Telegram",
      url: "https://www.t.me/orangemike",
      icon: <FaTelegramPlane />,
    },
    {
      name: "Email",
      url: "mailto:mikeling.dev@gmail.com",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white"
      style={{
        backgroundImage: "url('/space-background.jpg')", // Reuse your space background
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Optional: fixed background for a parallax effect
      }}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-10"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-300 mb-8 max-w-md mx-auto"
        >
          Feel free to reach out for collaborations, questions, or just to say
          hi!
        </motion.p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-10">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.1, color: "#60a5fa" }} // Light blue on hover
              className="text-3xl text-gray-400 hover:text-blue-400 transition-colors"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Email Button */}
        <motion.a
          href="mailto:mikeling.dev@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
        >
          Email Me
        </motion.a>
      </div>
    </section>
  );
}
