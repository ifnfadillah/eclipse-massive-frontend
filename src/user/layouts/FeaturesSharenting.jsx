import JudulCTA from "../components/Judul";
import DeskripsiCta from "../components/Deskripsi";
import JudulFitur from "../components/JudulFitur";
import CardFitur from "../components/CardFitur";
import { Link } from "react-router-dom";

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
        <Link to="/sharenting-webinar">
          <CardFitur imgUrl="/assets/webinar.png" judul="Webinar" deskripsi="Sosialisasi secara online terkait dunia parenting langsung dari ahlinya." />
        </Link>
        <Link to="/sharenting-komunitas">
          <CardFitur imgUrl="/assets/komunitas.png" judul="Komunitas" deskripsi="Ruang diskusi antar orang tua seputar  edukasi parenting dan masalah pola asuh." />
        </Link>
      </div>
    </div>
  );
};

export default FeaturesSharenting;
