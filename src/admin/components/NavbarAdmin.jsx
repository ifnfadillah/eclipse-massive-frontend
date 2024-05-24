import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Menu, X } from "lucide-react";

const NavbarAdmin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-1 px-2 md:px-0 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleSidebar}
                aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">{isSidebarOpen ? "Close sidebar" : "Open sidebar"}</span>
                {isSidebarOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
              </button>
              <Link to="/" className="flex md:me-24 ms-3">
                <img src="/assets/parentify-logo.png" className="h-14" alt="Logo" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {isSidebarOpen && <Sidebar />}
    </div>
  );
};

export default NavbarAdmin;
