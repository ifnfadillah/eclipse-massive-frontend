import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavbarHome = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="bg-gradient-to-t from-sky-200 via-sky-300 to-sky-400 sticky top-4 mx-10 border-blue-200 dark:border-gray-600 dark:bg-gray-900 rounded-3xl shadow-lg z-50">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/assets/logoHome.png" className="h-12" alt="Flowbite Logo" />
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:textWhite">Parentify</span>
        </a>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded={isDropdownOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div id="mega-menu-full" className={`items-center justify-between ${isDropdownOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white border-b border-gray-100 hover:text-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:textWhite md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Beranda
              </Link>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                onClick={toggleDropdown}
                data-collapse-toggle="mega-menu-full-dropdown"
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-white border-b border-gray-100 md:w-auto hover:text-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:textWhite md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Edukasi{" "}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>
            <li>
              <Link
                to="/kidspedia"
                className="block py-2 px-3 text-white border-b border-gray-100 hover:text-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:textWhite md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Kidspedia
              </Link>
            </li>
            <li>
              <Link
                to="/Sharenting"
                className="block py-2 px-3 text-white border-b border-gray-100 hover:text-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:textWhite md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Sharenting
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white border-b border-gray-100 hover:text-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:textWhite md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Artikel
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isDropdownOpen && (
        <div id="mega-menu-full-dropdown" className="mt-1 bg-sky-300 border-gray-200 shadow-sm border-y rounded-b-3xl dark:bg-gray-900 dark:border-gray-600">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-white dark:textWhite sm:grid-cols-2 md:grid-cols-3 md:px-6">
            <ul aria-labelledby="mega-menu-full-dropdown-button">
              <Link to="/edukasi/panduanasuh">
                <li>
                  <a href="#" className="block p-3 rounded-lg hover:text-gray-50 dark:hover:bg-gray-700">
                    <div className="font-semibold">Panduan Pola Asuh Anak</div>
                    <span className="text-sm text-white dark:text-gray-400">Panduan pola asuh sesuai rentang usia anak.</span>
                  </a>
                </li>
              </Link>
            </ul>
            <ul>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:text-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold">Gaya Parenting</div>
                  <span className="text-sm text-white dark:text-gray-400">Gaya parenting dan perilakunya kepada anak</span>
                </a>
              </li>
            </ul>
            <ul className="hidden md:block">
              <li>
                <a href="#" className="block p-3 rounded-lg hover:text-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold">Kenali Gaya Parentingmu</div>
                  <span className="text-sm text-white dark:text-gray-400">Quiz mengenali gaya parenting orang tua</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarHome;
