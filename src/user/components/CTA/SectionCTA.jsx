import ButtonCTA from "./Button/ButtonCTA";
const SectionCTA = (props) => {
  const { judul1, fitur, deksripsi, imgURL, judul2, children } = props;
  return (
    <div className="section">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-5xl text-gray-900 dark:text-white">
              {judul1} <strong className="text-blue-700">{fitur}</strong> {judul2}
            </h2>
            <p className="mb-6 font-light text-lg text-gray-700 md:text-lg dark:text-gray-400">{deksripsi}</p>
            <ButtonCTA>{children}</ButtonCTA>
          </div>
          <div className="mt-4 md:mt-0">
            <img className="w-full dark:hidden" src={imgURL} alt="section-home" />
            <img className="w-full hidden dark:block" src={imgURL} alt="section-home" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionCTA;
