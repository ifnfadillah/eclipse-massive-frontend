const ButtonCta = (props) => {
  const { children } = props;
  return (
    <a
      href="#"
      className="inline-flex items-center justify-center focus:outline-none text-white bg-sky-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 transition duration-300 ease-in-out"
    >
      {children}
      <svg
        className="w-5 h-5 ml-2 -mr-1 transition duration-300 ease-in-out"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  );
};

export default ButtonCta;
