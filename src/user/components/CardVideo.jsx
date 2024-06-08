const CardVideo = ({ imageUrl, title, link }) => {
  return (
    <a href="#" className="cursor-pointer block">
      <div className="max-w-full border-gray-200 rounded-xl shadow hover:shadow-xl mx-auto my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12 ">
        <img className="w-full h-40 object-cover md:h-32 lg:h-48" src={imageUrl} alt={title} />
        <div className="p-4 bg-sky-700 text-white text-left mx-auto rounded-b-xl hover:bg-sky-500">
          <a href={link}>
            <h5 className="py-2 text-base md:text-xl font-semibold font-primary tracking-tight text-white">{title}</h5>
          </a>
        </div>
      </div>
    </a>
  );
};

export default CardVideo;
