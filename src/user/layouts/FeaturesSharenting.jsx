import JudulCTA from "../components/Judul";
import DeskripsiCta from "../components/Deskripsi";
import JudulFitur from "../components/JudulFitur";
import CardFitur from "../components/CardFitur";

const FeaturesSharenting = () => {
  return (
    <div className="sectionFeatures">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl mb-32 lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-lg text-center mb-16 lg:mb-24">
            <JudulCTA>
              Mari Bergabung Bersama <JudulFitur>Sharenting</JudulFitur>
            </JudulCTA>
            <DeskripsiCta>Lakukan pendampingan bahan belajar dari Sharenting untuk menunjang tumbuh kembang anakmu Parennials. Pilih bahan belajar yang sesuai di bawah ini!</DeskripsiCta>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            <CardFitur imgUrl="/assets/fitur1.png" judul="Panduan Pola Asuh" deskripsi="Memberikan pemahaman kepada orang tua terkait pola asuh yang tepat ke anak." />
            <CardFitur imgUrl="/assets/fitur2.png" judul="Kenali Gaya Parenting" deskripsi="Membantu orang tua untuk mengenali jenis pola asuhnya kepada anak." />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSharenting;
