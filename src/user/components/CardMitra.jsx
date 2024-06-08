const CardMitra = ({ imgUrl, nama }) => {
  return (
    <div className="max-w-sm bg-transparent md:max-w-md sm:max-w-full">
      <a href="#">
        <img className="w-full h-auto object-cover flex items-center" src={imgUrl} alt={nama} />
      </a>
      <div className="p-5 text-center">
        <a href="#" className="flex justify-center items-center">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-xl sm:text-lg">{nama}</h5>
          <svg className="ml-2 w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7 7h10m0 0v10m0-10L7 17" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CardMitra;
