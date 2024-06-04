const SectionAyah = ({ imgUrl, desc }) => {
  return (
    <div className="section">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-24 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-8 md:mt-0">
          <div className="py-4 mx-auto md:py-8 md:px-10 w-full md:w-auto">
            <div className="block py-8 px-6 bg-white border rounded-lg shadow-lg w-full md:w-[580px]">
              <h5 className="mb-2 text-4xl font-primary font-medium text-sky-700 dark:text-white">Saran untuk Ayah</h5>
              <p className="mt-4 font-secondary text-lg font-normal text-zinc-700">{desc}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 py-10">
          <img className="w-full dark:hidden" src={imgUrl} alt="saran-ayah" />
          <img className="w-full hidden dark:block" src={imgUrl} alt="saran-ayah" />
        </div>
      </div>
    </div>
  );
};

export default SectionAyah;
