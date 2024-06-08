const CardPerilaku = ({ kategori, deskripsi, pertanyaan, tanda }) => {
  return (
    <section>
      <div className="py-8 px-6 mx-auto max-w-screen-xl mb-8 lg:py-16 lg:px-10">
        <div className="py-8 px-6 bg-white border rounded-lg text-center max-w-full min-h-56 shadow-lg flex justify-center items-center">
          <div className="text-center">
            <h5 className="mb-2 text-2xl md:text-4xl font-primary font-medium text-neutral-800 dark:text-white">
              {pertanyaan} <strong className="text-2xl md:text-4xl font-primary font-medium text-sky-700">{kategori}</strong> {tanda}
            </h5>
            <hr className="h-0.5 bg-black mx-auto my-4 w-20 md:w-40" />
            <p className="mt-4 mx-4 md:mx-8 font-secondary text-base md:text-lg font-normal text-zinc-700 dark:text-gray-400">{deskripsi}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPerilaku;
