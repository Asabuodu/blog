
// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react"; // Optional: Lucide icons for toggle

// const AppNavbar = () => {
//   const [activePath, setActivePath] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setActivePath(window.location.pathname);
//     }
//   }, []);

//   const navItems = [
//     { path: "/", label: "Home" },
//     { path: "/services/", label: "Services" },
//     { path: "/about/", label: "About" },
//     { path: "/gallery/", label: "Gallery" },
//   ];

//   return (
//     <header className="bg-white shadow-sm py-4">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         {/* Brand */}
//         <Link href="/" className="text-xl font-bold">
//           {/* Optional Image Logo */}
//           {/* <img src="/assets/logo.png" alt="Logo" className="h-10" /> */}
//           LOGO
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex space-x-8 font-semibold">
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               href={item.path}
//               className={`${
//                 activePath === item.path ? "text-blue-600" : "text-gray-700"
//               } hover:text-blue-500 transition`}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Toggle Button */}
//         <button
//           className="lg:hidden"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle Menu"
//         >
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <nav className="lg:hidden bg-white border-t mt-2 px-4 py-2 font-semibold space-y-2">
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               href={item.path}
//               onClick={() => setMenuOpen(false)}
//               className={`block ${
//                 activePath === item.path ? "text-blue-600" : "text-gray-900"
//               } hover:text-blue-950`}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// };

// export default AppNavbar;




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

          {/* Search input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring focus:border-blue-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 text-gray-600 hover:text-blue-600"
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

          {/* Mobile Search */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 border rounded-full px-3 py-1.5 text-sm focus:outline-none focus:ring focus:border-blue-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="p-1 text-gray-600 hover:text-blue-600"
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
