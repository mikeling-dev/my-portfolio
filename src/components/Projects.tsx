"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "All-in-one Trading Calculator",
      description:
        "An optimised, all-in-one trading calcultor developed for Hyperliquid dashboard. Collab with @chrisling_dev",
      link: "https://hyperliquid.chrisling.dev/calculator",
    },
    {
      id: 2,
      title: "???",
      description: "Working on some idea at the moment",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-600">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className=" mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View live project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
