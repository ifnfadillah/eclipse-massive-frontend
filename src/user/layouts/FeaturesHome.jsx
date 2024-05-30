import JudulCTA from "../components/Judul";
import JudulFitur from "../components/JudulFitur";
import Deskripsi from "../components/Deskripsi";
import CardFitur from "../components/CardFitur";

const FeaturesHome = () => {
  return (
    <div className="sectionFeatures">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl mb-32 lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-lg text-center mb-16 lg:mb-24">
            <JudulCTA>
              Keunggulan Menggunakan <JudulFitur>Parentify</JudulFitur>
            </JudulCTA>
            <Deskripsi>Parentify membantu orang tua untuk memahami terkait parenting dan pola asuh yang tepat kepada anak disertai berbagai layanan untuk mendukung tumbuh kembang anak.</Deskripsi>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            <CardFitur imgUrl="/assets/fitur1.png" judul="Panduan Pola Asuh" deskripsi="Memberikan pemahaman kepada orang tua terkait pola asuh yang tepat ke anak." />
            <CardFitur imgUrl="/assets/fitur2.png" judul="Kenali Gaya Parenting" deskripsi="Membantu orang tua untuk mengenali jenis pola asuhnya kepada anak." />
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <CardFitur imgUrl="/assets/fitur3.png" judul="Kidspedia" deskripsi="Kumpulan bahan belajar untuk menunjang tumbuh kembang anak." />
            <CardFitur imgUrl="/assets/fitur4.png" judul="Sharenting" deskripsi="Ruang interaksi antar orang tua untuk terhubung dengan ahli parenting." />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesHome;
