import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Handshake, Baby, UsersRound, Newspaper, LogOut, ChevronDown, ChevronUp } from "lucide-react";

function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const location = useLocation();

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsDropdownOpen1(false);
  };

  return (
    <div className="Sidebar">
      <aside
        id="sidebar-multi-level-sidebar"

        className={`fixed top-0 left-0 z-40 w-60 h-screen py-12 bg-white border-r border-gray-200 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className="h-full px-6 py-8 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-4 font-medium">
            <li>
              <Link to="/dashboard"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${location.pathname === "/dashboard" && "bg-gray-100 dark:bg-gray-700"}`}>
                <Home className="text-gray-700 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" size={24} strokeWidth={2} />
                <span className="ms-3 font-secondary text-sm">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/data-mitra"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${location.pathname === "/data-mitra" && "bg-gray-100 dark:bg-gray-700"}`}>
                <Handshake className="text-gray-700 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" size={24} strokeWidth={2} />
                <span className="ms-3 font-secondary text-sm">Mitra</span>
              </Link>
            </li>
            <li>
              <Link to="/data-kidspedia"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${location.pathname === "/data-kidspedia" && "bg-gray-100 dark:bg-gray-700"}`}>
                <Baby className="text-gray-700 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" size={24} strokeWidth={2} />
                <span className="ms-3 font-secondary text-sm">Kidspedia</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={toggleDropdown1}
              >
                <UsersRound className="text-gray-700 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" size={24} strokeWidth={2} />
                <span className="ms-3 font-secondary text-sm">Sharenting</span>
                {isDropdownOpen1 ? (
                  <ChevronUp className="text-gray-700 ms-12" size={20} strokeWidth={2} />
                ) : (
                  <ChevronDown className="text-gray-700 ms-12" size={20} strokeWidth={2} />
                )}
              </button>
              {isDropdownOpen1 && (
                <ul id="dropdown-example" className="pt-4 space-y-4">
                  <li>
                    <Link to="/data-webinar"
                      className={`flex font-secondary text-sm items-center w-full p-2 py-3 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${location.pathname === "/data-webinar" && "bg-gray-100 dark:bg-gray-700"}`}>
                      Webinar
                    </Link>
                  </li>
                  <li>
                    <Link to="/data-komunitas"
                      className={`flex font-secondary text-sm items-center w-full p-2 py-3 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${location.pathname === "/data-komunitas" && "bg-gray-100 dark:bg-gray-700"}`}>
                      Komunitas
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/data-artikel"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${location.pathname === "/data-artikel" && "bg-gray-100 dark:bg-gray-700"}`}>
                <Newspaper className="text-gray-700 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" size={24} strokeWidth={2} />
                <span className="ms-3 font-secondary text-sm">Artikel</span>
              </Link>
            </li>
          </ul>
          <div className="absolute bottom-5 w-48">
            <Link to="/login" className="flex items-center p-2 px-3 bg-red-700 text-white rounded-lg dark:text-white hover:bg-red-800 dark:hover:bg-gray-700 group">
              <LogOut className="text-white transition duration-75 dark:text-gray-400 group-hover:text-white-900 dark:group-hover:text-white" size={24} strokeWidth={2} />
              <span className="ms-24 font-secondary font-semibold text-sm">Keluar</span>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
