import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full  text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          mike_ling
        </Link>
        <div className="space-x-4">
          <Link href="#about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="#projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
