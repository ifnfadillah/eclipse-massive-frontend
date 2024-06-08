const SectionAyah = ({ imgUrl, desc }) => {
  return (
    <div className="section">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-24 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="order-2 md:order-1 mt-8 md:mt-0">
          <div className="py-4 px-2 mx-auto md:py-8 md:px-10 md:w-auto bg-white border rounded-lg shadow-lg w-full">
            <h5 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-primary font-medium text-sky-700 dark:text-white">Saran untuk Ayah</h5>
            <p className="mt-4 font-secondary text-base sm:text-lg lg:text-xl font-normal text-zinc-700">{desc}</p>
          </div>
        </div>
        <div className="order-1 md:order-0 mt-8 md:mt-0 py-10 px-4 lg:px-6">
          <img className="w-full h-auto object-cover" src={imgUrl} alt="saran-ayah" />
        </div>
      </div>
    </div>
  );
};

export default SectionAyah;
