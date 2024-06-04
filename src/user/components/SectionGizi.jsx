import CardGizi from "./CardGizi";
import Deskripsi from "./Deskripsi";
import Judul from "./Judul";
import JudulFitur from "./JudulFitur";

const SectionGizi = ({ usia, children }) => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mb-32">
      <div className="mx-auto max-w-screen-lg text-center mb-16 lg:mb-24">
        <Judul>
          Asupan <JudulFitur>Gizi</JudulFitur>
        </Judul>
        <Deskripsi>Berikut merupakan asupan gizi yang harus terpenuhi pada anak {usia}</Deskripsi>
      </div>
      <div>
        <div className="flex justify-center space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">{children}</div>
      </div>
    </div>
  );
};

export default SectionGizi;
