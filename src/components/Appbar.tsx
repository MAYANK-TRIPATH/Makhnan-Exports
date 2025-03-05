"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Appbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-lg shadow-lg  px-6 py-2 z-10 flex items-center justify-between">
        
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            width={150}
            height={40}
            alt="Logo"
            className="cursor-pointer w-32 md:w-40"
          />
        </Link>

       
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-lg text-black hover:text-red-400 transition-colors duration-200 font-semibold"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg text-black hover:text-red-400 transition-colors duration-200 font-semibold "
          >
            About
          </Link>
          <Link
            href="/products"
            className="text-lg text-black hover:text-red-400 transition-colors duration-200 font-semibold"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="text-lg text-black hover:text-red-400 transition-colors duration-200 font-semibold"
          >
            Contact
          </Link>
        </div>

        
        <button
          className="md:hidden text-black p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md transition-opacity duration-300 z-50"
          onClick={closeMenu}
        />
      )}

      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-black p-2"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        <div className="mt-16 space-y-6 px-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="block text-black hover:text-red-400 transition-colors duration-200 font-medium text-lg"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="block text-black hover:text-red-400 transition-colors duration-200 font-medium text-lg"
          >
            About
          </Link>
          <Link
            href="/products"
            onClick={closeMenu}
            className="block text-black hover:text-red-400 transition-colors duration-200 font-medium text-lg"
          >
            Products
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block text-black hover:text-red-400 transition-colors duration-200 font-medium text-lg"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}