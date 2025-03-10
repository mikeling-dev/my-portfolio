"use client";
import Link from "next/link";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbar = document.querySelector("nav");
    if (element && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full text-white py-4 z-50 bg-black font-sans px-6 md:px-20">
      <div id="navbar" className=" w-full md:flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          mike_ling
        </Link>
        <div
          id="navigations"
          className="md:space-x-8 space-x-3 align-middle ml-auto"
        >
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-gray-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-gray-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-gray-300"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-gray-300"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
