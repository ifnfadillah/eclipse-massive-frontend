const CardFitur = ({ imgUrl, judul, deskripsi }) => {
  return (
    <a className="flex flex-col md:flex-row items-center md:items-start px-4 py-3 bg-white border border-gray-200 rounded-lg shadow transition-all duration-300 hover:shadow-xl">
      <img className="object-cover w-full md:w-40 rounded-lg h-40 md:h-auto" src={imgUrl} alt={judul} />
      <div className="flex flex-col justify-between p-4 md:p-6 md:ml-4 leading-normal w-full md:w-auto">
        <h5 className="mb-2 text-xl md:text-2xl font-primary font-semibold tracking-tight text-neutral-800">{judul}</h5>
        <p className="mb-3 font-primary text-sm text-gray-700">{deskripsi}</p>
      </div>
    </a>
  );
};

export default CardFitur;
