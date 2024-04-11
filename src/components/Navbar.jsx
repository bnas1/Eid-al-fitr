import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white flex justify-between items-center h-16 px-4 sm:px-6 md:px-8 sticky top-0 z-10">
      <div className="flex items-center">
        <h1 className="eid text-2xl  font-bold cursor-pointer">Mubarak</h1>
      </div>

      <button
        className="block sm:hidden focus:outline-none z-20"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div
        className={`${
          isOpen ? "block fixed inset-0 bg-lime-300 z-10" : "hidden"
        } sm:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full text-lg font-semibold">
          <li>
            <a
              href="#"
              className="hover:text-green-400 block px-4 py-2"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-green-400 block px-4 py-2"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-green-400 block px-4 py-2"
              onClick={toggleMenu}
            >
              Blog
            </a>
          </li>
        </ul>
      </div>

      <div className="hidden sm:flex items-center">
        <ul className="flex space-x-7 text-lg font-semibold">
          <li>
            <a href="#" className="hover:text-green-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">
              Blog
            </a>
          </li>
        </ul>
      </div>

      <div className="flex space-x-4">
        <a href="#" className="text-2xl hover:text-blue-700">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-2xl hover:text-blue-950">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-2xl hover:text-red-300">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
