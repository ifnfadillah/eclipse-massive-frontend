import JudulCTA from "../components/Judul";
import JudulFitur from "../components/JudulFitur";
import Deskripsi from "../components/Deskripsi";
import CardFitur from "../components/CardFitur";
import { Link } from "react-router-dom";

const FeaturesHome = () => {
  return (
    <div className="py-8 md:py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
      <div className="mx-auto max-w-screen-lg text-center">
        <JudulCTA>
          Keunggulan Menggunakan <JudulFitur>Parentify</JudulFitur>
        </JudulCTA>
        <Deskripsi>Parentify membantu orang tua untuk memahami terkait parenting dan pola asuh yang tepat kepada anak disertai berbagai layanan untuk mendukung tumbuh kembang anak.</Deskripsi>
      </div>
      <div className="grid gap-8 lg:grid-cols-2 mb-4 py-6">
        <CardFitur imgUrl="/assets/fitur1.png" judul="Panduan Pola Asuh" deskripsi="Memberikan pemahaman kepada orang tua terkait pola asuh yang tepat ke anak." />
        <CardFitur imgUrl="/assets/fitur2.png" judul="Kenali Gaya Parenting" deskripsi="Membantu orang tua untuk mengenali jenis pola asuhnya kepada anak." />
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <Link>
          <CardFitur imgUrl="/assets/fitur3.png" judul="Kidspedia" deskripsi="Kumpulan bahan belajar untuk menunjang tumbuh kembang anak." />
        </Link>
        <CardFitur imgUrl="/assets/fitur4.png" judul="Sharenting" deskripsi="Ruang interaksi antar orang tua untuk terhubung dengan ahli parenting." />
      </div>
    </div>
  );
};

export default FeaturesHome;
