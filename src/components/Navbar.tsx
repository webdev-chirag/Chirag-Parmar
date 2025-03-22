"use client"
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">Chirag's Portfolio</h1>
        <ul className="hidden md:flex gap-6 text-lg">
          {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="hover:text-blue-400">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}
