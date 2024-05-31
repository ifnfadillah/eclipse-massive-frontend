const CardFitur = ({ imgUrl, judul, deskripsi }) => {
  return (
    <a className="flex flex-col items-center px-4 py-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl transition-all duration-300 hover:shadow-xl">
      <img className="object-cover w-full mx-4 ms-6 rounded-lg h-auto md:h-auto md:w-40" src={imgUrl} alt={judul} />
      <div className="flex flex-col justify-between p-4 my-8 leading-normal">
        <h5 className="mb-2 text-2xl font-primary font-semibold tracking-tight text-neutral-800">{judul}</h5>
        <p className="mb-3 font-primary text-sm text-gray-700 mr-16">{deskripsi}</p>
      </div>
    </a>
  );
};

export default CardFitur;
