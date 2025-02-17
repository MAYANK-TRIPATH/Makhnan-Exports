"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Appbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white flex justify-between items-center py-4 px-8 shadow-2xl ">
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-2xl">Kesarwani Exports</h1>
      </div>

    
      <button
        className="block lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} />
      </button>

      <div
        className={`${
          isMenuOpen ? "absolute top-16 right-8 shadow-md rounded-lg flex" : "hidden"
        } flex-col gap-4 p-4 lg:flex lg:relative lg:flex-row lg:gap-6 lg:p-0 lg:shadow-none lg:bg-transparent bg-gray-700 w-fit`}
      >
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className=" hover:underline">About</Link>
        <Link href="/products" className="hover:underline">Products</Link>
        <Link href="/contact" className=" hover:underline">Contact</Link>
      </div>
    </div>
  );
}
