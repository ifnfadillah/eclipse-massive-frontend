const CardCategory = (props) => {
  const { title, description, imageUrl } = props;
  return (
    <a href="#">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-lg w-full h-full" src={imageUrl} alt={title} />
        <div className="p-5 bg-sky-700 text-white text-center">
          <a href="#">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-white dark:text-gray-400">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default CardCategory;
