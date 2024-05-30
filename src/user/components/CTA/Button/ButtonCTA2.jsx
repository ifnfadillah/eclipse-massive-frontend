const ButtonCTA2 = ({ children }) => {
  return (
    <a
      href="#"
      className="inline-flex items-center justify-center font-primary shadow-md focus:outline-none border-2 border-black text-black bg-white hover:bg-blue-700 hover:border-blue-700 hover:text-white focus:bg-blue-900 focus:border-blue-900 focus:text-white font-medium rounded-lg text-lg px-4 py-2 me-2 mb-2 transition duration-200 ease-in-out"
    >
      {children}
      <svg className="w-5 h-5 ml-2 -mr-1 transition duration-300 ease-in-out" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
    </a>
  );
};

export default ButtonCTA2;
