import JudulCTA from "../../components/Judul";
import DeskripsiCta from "../../components/Deskripsi";
import JudulFitur from "../../components/JudulFitur";
import CardCategory from "../../components/CardCategory";

const SectionCategory = () => {
  return (
    <div className="SectionCategory">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mb-32">
          <div className="mx-auto max-w-screen-lg text-center mb-16 lg:mb-24">
            <JudulCTA>
              Pilih
              <JudulFitur> Panduan Pola Asuh</JudulFitur>
            </JudulCTA>
            <DeskripsiCta>Kami mengelompokkkan beberapa panduan pola asuh anak dalam beberapa fase rentang usia anak. Pilih panduan pola asuh yang sesuai buah hatimu yang Parennials!</DeskripsiCta>
          </div>
          <div className="flex items-center justify-center mb-12">
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <CardCategory title="Bayi" description="0 - 12 Bulan" imageUrl="/assets/category1.png" />
              <CardCategory title="Balita" description="1 - 3 Tahun" imageUrl="/assets/category2.png" />
              <CardCategory title="Anak" description="3 - 6 Tahun" imageUrl="/assets/category3.png" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
              <CardCategory title="Usia Sekolah" description="6 - 12 Tahun" imageUrl="/assets/category4.png" />
              <CardCategory title="Remaja" description="12 - 17 Tahun" imageUrl="/assets/category5.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionCategory;
