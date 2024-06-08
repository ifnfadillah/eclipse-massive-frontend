import JudulFitur from "../../components/JudulFitur";
import CardCategory from "../../components/CardCategory";
import Judul from "../../components/Judul";
import Deskripsi from "../../components/Deskripsi";
import { Link } from "react-router-dom";
import { polaAsuh } from "../Data/polaAsuh";

const SectionCategory = () => {
  return (
    <div className="section-kategori-usia">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mb-32">
        <div className="mx-auto max-w-screen-lg text-center mb-16 lg:mb-24">
          <Judul>
            Pilih
            <JudulFitur> Panduan Pola Asuh</JudulFitur>
          </Judul>
          <Deskripsi>Kami mengelompokkkan beberapa panduan pola asuh anak dalam beberapa fase rentang usia anak. Pilih panduan pola asuh yang sesuai buah hatimu yang Parennials!</Deskripsi>
        </div>
        <div className="flex items-center justify-center">
          <div className="space-y-8 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 md:gap-12 md:space-y-0 justify-center">
            {polaAsuh.slice(0, 3).map((pola) => (
              <Link key={pola.id} to={`/edukasi/panduan-asuh/${pola.id}`}>
                <CardCategory title={pola.category} description={pola.description} imageUrl={pola.imageCard} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="space-y-8 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 md:gap-12 md:space-y-0">
            {polaAsuh.slice(3).map((pola) => (
              <Link key={pola.id} to={`/edukasi/panduan-asuh/${pola.id}`}>
                <CardCategory title={pola.category} description={pola.description} imageUrl={pola.imageCard} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCategory;
