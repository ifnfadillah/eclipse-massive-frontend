import ButtonCTA from "./Button/ButtonCTA";
import ButtonCTA2 from "./Button/ButtonCTA2";

const SectionCTA = (props) => {
  const { judul1, fitur, deksripsi, imgURL, judul2, children, btn2 } = props;
  return (
    <div className="section">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-24 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-8 md:mt-0">
            <h2 className="mb-4 text-4xl font-primary font-medium text-gray-900 dark:text-white">
              {judul1}{" "}
              <strong className="text-blue-700 font-primary">{fitur}</strong>{" "}
              {judul2}
            </h2>
            <p className="mb-6 font-secondary text-lg text-gray-700 md:text-lg dark:text-gray-400">
              {deksripsi}
            </p>
            <ButtonCTA>{children}</ButtonCTA>
            {btn2 && <ButtonCTA2>{btn2}</ButtonCTA2>}
          </div>
          <div className="mt-8 md:mt-0 py-8">
            <img className="w-full dark:hidden" src={imgURL} alt={fitur} />
            <img
              className="w-full hidden dark:block"
              src={imgURL}
              alt={fitur}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionCTA;
