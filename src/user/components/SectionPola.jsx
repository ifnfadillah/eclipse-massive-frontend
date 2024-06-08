import Deskripsi from "./Deskripsi";
import Judul from "./Judul";
import JudulFitur from "./JudulFitur";

const SectionPola = ({ judul, kategori, descSection, imgUrl, desc1, desc2, desc3, desc4 }) => {
  return (
    <div className="section">
      <div className="mx-auto max-w-screen-lg text-center">
        <Judul>
          <JudulFitur>{judul} </JudulFitur> {kategori}
        </Judul>
        <Deskripsi>{descSection}</Deskripsi>
      </div>
      <div className="grid gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:gap-14 md:grid-cols-1 md:py-12 lg:px-6 xl:grid-cols-2">
        <div className="w-full md:w-auto mt-8 md:mt-0">
          <img className="w-full lg:px-8 md:px-16 sm:px-24" src={imgUrl} alt={kategori} />
        </div>
        <div className="mt-8 md:mt-0 space-y-8">
          <div className="block py-8 bg-white border rounded-lg text-center max-w-full shadow-lg">
            <p className="mx-4 md:mx-8 font-secondary text-base md:text-lg font-normal text-zinc-700">{desc1}</p>
          </div>
          <div className="block py-8 bg-white border rounded-lg text-center max-w-full shadow-lg">
            <p className="mx-4 md:mx-8 font-secondary text-base md:text-lg font-normal text-zinc-700">{desc2}</p>
          </div>
          <div className="block py-8 bg-white border rounded-lg text-center max-w-full shadow-lg">
            <p className="mx-4 md:mx-8 font-secondary text-base md:text-lg font-normal text-zinc-700">{desc3}</p>
          </div>
          <div className="block py-8 bg-white border rounded-lg text-center max-w-full shadow-lg">
            <p className="mx-4 md:mx-8 font-secondary text-base md:text-lg font-normal text-zinc-700">{desc4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPola;
