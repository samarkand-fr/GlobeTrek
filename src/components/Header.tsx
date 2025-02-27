"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import { Menu, X } from "lucide-react"; // Importing Lucide icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if a link is active
  const isActive = (path: string) => pathname === path;

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="bg-amber-500 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src="/icon.webp" 
            alt="GlobeTrek Logo" 
            width={50}  
            height={50} 
            className="rounded-full shadow-lg" 
          />
          <span className="font-extrabold text-2xl">GlobeTrek</span>
        </Link>

        {/* Navigation Links & ThemeSwitcher (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          {routes.map(({ path, label }) => (
            <Link 
              key={path}
              href={path}
              className={`transition-colors px-3 py-2 rounded-lg ${
                isActive(path) ? "font-bold text-white" : "hover:text-amber-300"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="ml-4"> 
            <ThemeSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 py-4 bg-amber-600">
          {routes.map(({ path, label }) => (
            <Link 
              key={path}
              href={path}
              onClick={() => setIsOpen(false)}
              className={`transition-colors px-3 py-2 rounded-lg ${
                isActive(path) ? "font-bold text-white" : "hover:text-amber-300"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-2">
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
