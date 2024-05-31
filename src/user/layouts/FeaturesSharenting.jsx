import JudulCTA from "../components/Judul";
import DeskripsiCta from "../components/Deskripsi";
import JudulFitur from "../components/JudulFitur";
import CardFitur from "../components/CardFitur";

const FeaturesSharenting = () => {
  return (
    <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-lg text-center mb-16">
        <JudulCTA>
          Mari Bergabung Bersama <JudulFitur>Sharenting</JudulFitur>
        </JudulCTA>
        <DeskripsiCta>Sharenting memiliki 2 layanan yang dapat Parennials pilih!</DeskripsiCta>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <CardFitur
          imgUrl="/assets/webinar.png"
          judul="Webinar"
          deskripsi="Sosialisasi secara online terkait dunia parenting langsung dari ahlinya." />
        <CardFitur
          imgUrl="/assets/komunitas.png"
          judul="Komunitas"
          deskripsi="Ruang diskusi antar orang tua seputar  edukasi parenting dan masalah pola asuh." />
      </div>
    </div>
  );
};

export default FeaturesSharenting;
