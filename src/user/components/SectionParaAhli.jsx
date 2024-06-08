const SectionParaAhli = ({ nama, pekerjaan, desk, imgUrl }) => {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-10">
      <figure className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium font-primary">Saran dari Ahli</h1>
        <blockquote className="text-lg md:text-xl lg:text-2xl font-medium text-zinc-700 mt-4">
          <p>{desk}</p>
        </blockquote>
        <figcaption className="flex flex-col items-center justify-center mt-6 space-y-3 lg:space-y-0 lg:space-x-3 lg:flex-row">
          <img className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full" src={imgUrl} alt="profile picture" />
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-3 font-normal font-secondary divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray-500 dark:divide-gray-700">
            <div className="text-lg md:text-xl text-black">{nama}</div>
            <div className="pt-2 lg:pt-0 lg:pl-3 text-sm md:text-base lg:text-sm text-zinc-700">{pekerjaan}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default SectionParaAhli;
