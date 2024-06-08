import ButtonCTA from "./Button/ButtonCTA";
import ButtonCTA2 from "./Button/ButtonCTA2";

const SectionCTA = (props) => {
  const { judul1, fitur, deksripsi, imgUrl, judul2, children, btn2 } = props;
  return (
    <div className="gap-8 md:items-center py-4 px-4 mx-auto max-w-screen-xl xl:gap-24 sm:py-16 lg:px-6 flex flex-col-reverse md:flex-row md:grid md:grid-cols-2">
      <div className=" md:mt-0 md:order-1">
        <h2 className="mb-4 text-3xl md:text-4xl font-primary font-medium text-gray-900 dark:text-white">
          {judul1} <strong className="text-sky-700 font-primary">{fitur}</strong> {judul2}
        </h2>
        <p className="mb-6 font-secondary text-md text-gray-700 md:text-lg dark:text-gray-400">{deksripsi}</p>
        {children && <ButtonCTA>{children}</ButtonCTA>}
        {btn2 && <ButtonCTA2>{btn2}</ButtonCTA2>}
      </div>
      <div className="mt-8 md:mt-0 py-2 md:order-1 ">
        <img className="md:w-full dark:hidden" src={imgUrl} alt={fitur} />
      </div>
    </div>
  );
};

export default SectionCTA;
