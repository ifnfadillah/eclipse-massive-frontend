import Deskripsi from "../../components/Deskripsi";
import Judul from "../../components/Judul";
import CardMitra from "../../components/CardMitra";

const SectionMitra = () => {
  return (
    <div className="section-mitra">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mb-32">
          <div className="mx-auto max-w-screen-lg text-center mb-24 lg:mb-32">
            <Judul>Mitra Kami</Judul>
            <Deskripsi>Berikut beberapa mitra atau yayasan terpercaya yang bekerja sama dengan Parentify:</Deskripsi>
          </div>
          <div className="flex items-center justify-center mb-12">
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
              <CardMitra imgUrl="/assets/mitra1.png" nama="KARYA Kreatif GURU Paud" />
              <CardMitra imgUrl="/assets/mitra2.png" nama="Guru SD" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionMitra;
