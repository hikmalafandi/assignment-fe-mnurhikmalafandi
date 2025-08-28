"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import SearchInput from "./SearchInput";

export default function Navbar({ search, setSearch }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">MyStore</div>

        {/* Desktop menu & search */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Products</a>
          <a href="#" className="hover:text-gray-300 transition-colors">About</a>

          {/* Search input */}
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
          />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4 flex flex-col space-y-2">
          <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Products</a>
          <a href="#" className="hover:text-gray-300 transition-colors">About</a>

          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
          />
        </div>
      )}
    </nav>
  );
}
