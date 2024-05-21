import JudulCTA from "../components/JudulCTA";
import DeskripsiCta from "../components/DeskripsiCta";
import JudulFitur from "../components/JudulFitur";
import CardCategory from "../components/Card";

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
          <div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <CardCategory title="Bayi" description="Snow-covered mountain peaks." imageUrl="/assets/category1.png" />
              <CardCategory title="Balita" description="Snow-covered mountain peaks." imageUrl="/assets/category2.png" />
              <CardCategory title="Anak" description="Snow-covered mountain peaks." imageUrl="/assets/category3.png" />
              <CardCategory title="Usia Sekolah" description="Snow-covered mountain peaks." imageUrl="/assets/category4.png" />
              <CardCategory title="Remaja" description="Snow-covered mountain peaks." imageUrl="/assets/category5.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionCategory;
