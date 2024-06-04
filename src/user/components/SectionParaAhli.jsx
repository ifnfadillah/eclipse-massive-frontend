const SectionParaAhli = ({ nama, pekerjaan, desk, imgUrl }) => {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-10">
      <figure className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl font-medium font-primary">Saran dari Ahli</h1>
        <blockquote className="text-2xl font-medium text-zinc-700 mt-4">
          <p>{desk}</p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <img className="w-16 h-16 rounded-full" src={imgUrl} alt="profile picture" />
          <div className="flex items-center divide-x-2 font-normal font-secondary divide-gray-500 dark:divide-gray-700">
            <div className="pr-3 text-xl  text-black">{nama}</div>
            <div className="pl-3 text-sm  text-zinc-700 ">{pekerjaan}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default SectionParaAhli;
