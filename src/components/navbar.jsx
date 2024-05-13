import React1 from "react";

function navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div>
            <a href="/" className="text-white font-bold">
              Brand
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className={`${isOpen ? "" : "hidden"} md:flex md:items-center`}>
            <a href="/" className="text-white mx-2">
              Home
            </a>
            <a href="/" className="text-white mx-2">
              About
            </a>
            <a href="/" className="text-white mx-2">
              Services
            </a>
            <a href="/" className="text-white mx-2">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
