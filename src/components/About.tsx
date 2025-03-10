"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-600">
      <div className="container mx-auto px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Column - Existing Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <p className="text-lg">
              With a blend of self-taught programming expertise and formal
              education in actuarial science, I bring a unique analytical
              perspective to software development. My journey combines technical
              prowess with exceptional customer service skills, allowing me to
              build solutions that truly address user needs.
            </p>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                Technical Expertise
              </h3>
              <ul className="space-y-2">
                <li>
                  • Frontend: React, Redux, TypeScript, NextJS, TailwindCSS
                </li>
                <li>• Core: HTML, CSS, JavaScript</li>
                <li>• Testing & Deployment: Jest, Git, NodeJS</li>
                <li>• AI utilisation: Model Context Protocol</li>
                <li>• Prototyping & Wireframing</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Beyond Coding</h3>
              <ul className="space-y-2">
                <li>• Comprehensive documentation creation</li>
                <li>• In-depth product research and analysis</li>
                <li>• Advanced troubleshooting methodologies</li>
                <li>• Customer support excellence</li>
                <li>• UI/UX Design</li>
                <li>• Creative graphic design</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
