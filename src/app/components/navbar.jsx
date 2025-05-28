"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const AppNavbar = () => {
  const [activePath, setActivePath] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services/", label: "Services" },
    { path: "/about/", label: "About" },
    { path: "/gallery/", label: "Gallery" },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Replace with actual route or logic
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

    const handleReset = () => {
    setSearchQuery("");
    window.location.href = "/"; // Adjust this to your default landing route
  };


  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="text-xl text-black font-bold">
          LOGO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${
                activePath === item.path ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-500 transition`}
            >
              {item.label}
            </Link>
          ))}


            <div className="relative flex items-center space-x-1">
  <input
    type="text"
    placeholder="Search..."
    className="border rounded-full px-4 py-1.5 text-sm pr-20 focus:outline-none focus:ring focus:border-blue-400"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  {searchQuery && (
    <button
      onClick={handleReset}
      className="absolute right-10 text-xs text-gray-500 hover:text-red-600"
      aria-label="Reset Search"
    >
      Reset
    </button>
  )}
  <button
    onClick={handleSearch}
    className="absolute right-2 p-1 text-gray-700 hover:text-blue-600"
    aria-label="Search"
  >
    <Search size={18} />
  </button>
</div>


        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-white border-t mt-2 px-4 py-2 font-semibold space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block ${
                activePath === item.path ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-500`}
            >
              {item.label}
            </Link>
          ))}

            <div className="relative flex items-center gap-2 mt-4">
  <input
    type="text"
    placeholder="Search..."
    className="flex-1 border rounded-full px-3 py-1.5 text-sm pr-20 focus:outline-none focus:ring focus:border-blue-400"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  {searchQuery && (
    <button
      onClick={handleReset}
      className="absolute right-14 text-xs text-gray-500 hover:text-red-600"
      aria-label="Reset Search"
    >
      Reset
    </button>
  )}
  <button
    onClick={handleSearch}
    className="absolute right-2 p-1 text-gray-700 hover:text-blue-600"
    aria-label="Search"
  >
    <Search size={20} />
  </button>
</div>


        </nav>
      )}
    </header>
  );
};

export default AppNavbar;
