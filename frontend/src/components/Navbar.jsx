import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <div>
          <Link to="/">
            <h1 className="text-3xl font-bold text-blue-900 cursor-pointer">
              VulnLab
            </h1>
          </Link>

          <p className="text-gray-600 text-sm">
            Learn. Practice. Secure.
          </p>
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-10 text-lg font-semibold">

          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/features"
              className="hover:text-blue-600 transition"
            >
              Features
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* Buttons */}
        <div className="flex gap-5">

          <Link to="/login">
            <button className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition duration-300">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300">
              Register
            </button>
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;