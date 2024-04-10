const Navbar = () => {
  return (
    <nav className="bg-transparent text-white flex justify-between items-center h-16 px-4">
      <div className="flex items-center">
        <h1 className="eid text-5xl font-bold">Mubarak</h1>
      </div>

      <ul className="flex space-x-7 text-2xl font-semibold">
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

      <div className="flex space-x-7">
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
