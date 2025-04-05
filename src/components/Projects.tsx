"use client";

import { motion } from "framer-motion";
import backkeeper_v1 from "../../public/backkeeper_home.png";
import hl_calculator from "../../public/hl_calculator.png";
import kinjo_home from "../../public/kinjo_home.png";
import backkeeper_v2 from "../../public/backkeeper-v2-home.png";
// import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Backkeeper AI v2",
      description:
        "An AI-powered expense claims assistant designed to automate the claims process",
      overview:
        "Backkeeper v2 is an AI-powered claims assistant that simplifies expense tracking and management for non-finance professionals. It automates organizing and categorizing expense documents, making the claims process effortless. The system integrates with existing workflows - just forward receipts to a dedicated Telegram bot. The AI extracts relevant information and automatically records transactions. Users can converse with the bot to modify records or export data without logging in. The new team feature allows organizations to create multiple teams, invite members, and centralize expense management. Admins can monitor all transactions, manage team members, and maintain complete oversight, allowing organizations to maintain organized financial records with minimal effort.",
      techstack: {
        frontend: [
          "Next.js",
          "React",
          "Typescript",
          "Tailwind CSS",
          "Shadcn/UI",
          "Framer motion",
        ],
        backend: ["Next.js API Routes", "PostgreSQL", "Tanstack React Query"],
      },
      keyFeatures: [
        "Intelligent Document Processing: Automated receipt and invoice recognition with accurate data extraction from various document formats.",
        "Seamless Integration: Telegram integration for instant processing. Conversational interface for managing claims without manual data entry.",
        "Smart Categorization: Automatic transaction categorization with custom category creation and management.",
        "Team Management: Create multiple teams, invite members, and maintain admin controls for organizational expense oversight.",
        "Conversational Interface: Chat with our Telegram bot to modify records, export data, and manage expenses without logging into the dashboard.",
        "Reporting & Analytics: Visual dashboards for financial insights. Customizable report templates (WIP)",
      ],
      link: "https://backkeeper-ui.vercel.app",
      image_src: backkeeper_v2,
    },
    {
      id: 2,
      title: "Backkeeper AI v1",
      description:
        "An AI-powered bookkeeping assistant designed to automate bookkeeping process",
      overview:
        "BackKeeper is an AI-powered bookkeeping assistant that simplifies financial record-keeping for non-accountants. It automates organizing and categorizing financial documents, making bookkeeping effortless. The system integrates with existing workflows - just forward receipts to a dedicated email. The AI extracts relevant information and automatically records transactions. User can download their expenses into a csv file for record keeping, or simply add their accountant to the team to help manage their expenses, allowing anyone to maintain organized financial records with minimal effort.",
      techstack: {
        frontend: [
          "Next.js",
          "React",
          "Typescript",
          "Tailwind CSS",
          "Shadcn/UI",
          "Framer motion",
        ],
        backend: ["Next.js API Routes", "Prisma ORM"],
      },
      keyFeatures: [
        "Intelligent Document Processing: Automated receipt and invoice recognition with accurate data extraction from various document formats.",
        "Seamless Integration: Email forwarding integration for instant processing. No manual data entry required",
        "Smart Categorization: Automatic transaction categorization with custom category creation and management.",
        "Reporting & Analytics: Visual dashboards for financial insights. Customizable report templates (WIP)",
      ],
      link: "https://backkeeper.com",
      image_src: backkeeper_v1,
    },
    {
      id: 3,
      title: "HL Trading Calculator",
      description:
        "An optimised, all-in-one trading calcultor developed for Hyperliquid dashboard. Collab with @chrisling_dev",
      overview:
        "Hyperliquid Dashboard is one of the earliest dashboards for the Hyperliquid ecosystem. Originally tracking users' assets, positions and orders, the calculator was added to address a common trading pain point. Unlike competitors that separate calculators into multiple tabs (PnL, average price, liquidation) requiring redundant data entry, our all-in-one solution streamlines the process. This unified approach saves traders time and reduces errors, providing comprehensive position analysis on a single screen without duplicate inputs.",
      techstack: {
        frontend: [
          "Next.js",
          "React",
          "Typescript",
          "Tailwind CSS",
          "Shadcn/UI",
        ],
        backend: ["Javascript"],
      },
      keyFeatures: [
        "Enter multiple entry prices to automatically calculate average position",
        "Input leverage to instantly see liquidation price",
        "Add multiple exit prices to view potential PnL scenarios",
      ],
      link: "https://hyperliquid.chrisling.dev/calculator",
      image_src: hl_calculator,
    },
    {
      id: 4,
      title: "Kinjo",
      description:
        "An Airbnb-style booking platform, built from scratch with Next.js and Supabase.",
      overview:
        "A full-stack web application modeled after Airbnb that enables users to browse accommodations, book stays, and manage properties as hosts. Built as a portfolio demo, Kinjo features secure authentication (including Google OAuth), dynamic listing creation with photo uploads, and real-time availability management. Deployed on Vercel with a Supabase backend, it showcases a robust, scalable architecture in a production-like environment, demonstrating comprehensive full-stack development capabilities.",
      techstack: {
        frontend: [
          "Next.js",
          "React",
          "Typescript",
          "Tailwind CSS",
          "Shadcn/UI",
        ],
        backend: [
          "Next.js API Routes",
          "Prisma ORM",
          "Supabase",
          "JWT",
          "Google Oauth 2.0",
        ],
      },
      keyFeatures: [
        "User Authentication: Sign up, log in, and log in with Google using JWT-based sessions.",
        "Listing Management: Hosts can create, edit, and delete listings with multi-photo uploads to Supabase Storage.",
        "Seach and Filters: Users can browse listings with filters and book stays with dynamic availability checks.",
        "Responsive Design: A sleek, mobile-friendly UI powered by Tailwind CSS and Shadcn/UI components.",
        "Real-time Data: Integrated Prisma ORM with Supabase for efficient database operations.",
      ],
      link: "https://kinjo.vercel.app",
      image_src: kinjo_home,
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="py-12 bg-black text-white px-4 md:px-20 min-h-screen"
    >
      <div className="container mx-auto">
        <div className="">
          <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide justify-start w-full">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`text-lg whitespace-nowrap ${
                  selectedProject.id === project.id
                    ? "font-semibold text-xl"
                    : "font-normal"
                } `}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <motion.div
          key={selectedProject.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <Link
            href={selectedProject.link}
            className="hover:opacity-80 hover:scale-110 transition-transform duration-300"
            target="_blank"
          >
            <div
              className="relative h-[40vh] md:h-[60vh] bg-cover bg-center rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${selectedProject.image_src.src})`,
              }}
            >
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-xl justify-end flex flex-col p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300">{selectedProject.description}</p>
              </motion.div>
            </div>
          </Link>
          <div className="mt-6 text-gray-300">
            <h4 className="text-xl font-semibold mb-2">Overview</h4>
            <p className="mb-6">{selectedProject.overview}</p>

            <h4 className="text-xl font-semibold mb-2">Tech Stack</h4>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
              <div>
                <strong>Frontend:</strong>
                <ul className="list-disc pl-5">
                  {selectedProject.techstack.frontend.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Backend:</strong>
                <ul className="list-disc pl-5">
                  {selectedProject.techstack.backend.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h4 className="text-xl font-semibold mb-2">Key Features</h4>
            <ul className="list-disc pl-5">
              {selectedProject.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <a
            href={selectedProject.link}
            target="_blank"
            className="inline-block mt-4 text-blue-400 hover:underline"
          >
            View live project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
