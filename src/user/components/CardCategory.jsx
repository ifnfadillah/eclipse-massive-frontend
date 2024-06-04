const CardCategory = (props) => {
  const { title, description, imageUrl } = props;
  return (
    <a href="#" className="cursor-pointer">
      <div className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white border border-gray-200 rounded-xl shadow hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <img className="w-full h-48 object-cover md:h-32 lg:h-64" src={imageUrl} alt={title} />
        <div className="p-3 bg-sky-700 text-white text-center rounded-b-xl hover:bg-sky-500">
          <a href="#">
            <h5 className="py-2 text-2xl md:text-2xl font-semibold font-primary tracking-tight text-white">{title}</h5>
          </a>
          <p className="mb-2 font-normal font-primary text-sm md:text-lg text-white">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default CardCategory;
