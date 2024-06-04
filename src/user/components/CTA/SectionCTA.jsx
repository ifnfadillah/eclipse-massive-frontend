import ButtonCTA from "./Button/ButtonCTA";
import ButtonCTA2 from "./Button/ButtonCTA2";

const SectionCTA = (props) => {
  const { judul1, fitur, deksripsi, imgUrl, judul2, children, btn2 } = props;
  return (
    <div className="section">
<<<<<<< HEAD
      <div className="gap-8 items-center py-8 px-4 bg-red-600 mx-auto max-w-screen-xl xl:gap-24 sm:py-16 lg:px-6 flex flex-col-reverse md:flex-row md:grid md:grid-cols-2">
=======
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-24 sm:py-16 lg:px-6 flex flex-col-reverse md:flex-row md:grid md:grid-cols-2">
>>>>>>> user-fakhri
        <div className="mt-8 md:mt-0 md:order-1">
          <h2 className="mb-4 text-4xl font-primary font-medium text-gray-900 dark:text-white">
            {judul1} <strong className="text-blue-700 font-primary">{fitur}</strong> {judul2}
          </h2>
          <p className="mb-6 font-secondary text-lg text-gray-700 md:text-lg dark:text-gray-400">{deksripsi}</p>
<<<<<<< HEAD
          <ButtonCTA>{children}</ButtonCTA>
          {btn2 && <ButtonCTA2>{btn2}</ButtonCTA2>}
        </div>
        <div className="mt-8 md:mt-0 md:py-8 md:order-1 ">
          <img className="w-full dark:hidden" src={imgURL} alt={fitur} />
          <img className="w-full hidden dark:block" src={imgURL} alt={fitur} />
=======
          {children && <ButtonCTA>{children}</ButtonCTA>}
          {btn2 && <ButtonCTA2>{btn2}</ButtonCTA2>}
        </div>
        <div className="mt-8 md:mt-0 py-8 md:order-1 ">
          <img className="w-full dark:hidden" src={imgUrl} alt={fitur} />
          <img className="w-full hidden dark:block" src={imgUrl} alt={fitur} />
>>>>>>> user-fakhri
        </div>
      </div>
    </div>
  );
};

export default SectionCTA;
