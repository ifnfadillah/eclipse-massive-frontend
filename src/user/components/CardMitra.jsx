const CardMitra = ({ imgUrl, nama }) => {
  return (
    <div className="max-w-sm bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-lg flex items-center" src={imgUrl} alt={nama} />
      </a>
      <div className="p-5 text-center">
        <a href="#" className="flex justify-center items-center">
          <h5 className=" text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{nama}</h5>
          <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7 7h10m0 0v10m0-10L7 17" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CardMitra;
