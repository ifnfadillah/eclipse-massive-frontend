const CardCategory = (props) => {
  const { title, description, imageUrl } = props;
  return (
    <a href="#">
      <div className="max-w-xl bg-white border border-gray-200 rounded-xl shadow hover:shadow-xl dark:bg-gray-800  dark:border-gray-700">
        <img className=" w-full h-full" src={imageUrl} alt={title} />
        <div className="p-4 bg-sky-700 text-white text-center rounded-b-xl hover:bg-sky-500">
          <a href="#">
            <h5 className="mb-3 text-2xl font-semibold font-primary tracking-tight text-white dark:text-white">{title}</h5>
          </a>
          <p className="mb-2 font-normal font-primary text-xl text-white dark:text-gray-400">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default CardCategory;
