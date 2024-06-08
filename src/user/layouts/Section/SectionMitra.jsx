import Deskripsi from "../../components/Deskripsi";
import Judul from "../../components/Judul";
import CardMitra from "../../components/CardMitra";

const SectionMitra = () => {
  return (
    <div className=" px-4 mx-auto max-w-screen-xl  py-16 lg:px-6">
      <div className="mx-auto max-w-screen-lg text-center">
        <Judul>Mitra Kami</Judul>
        <Deskripsi>Berikut beberapa mitra atau yayasan terpercaya yang bekerja sama dengan Parentify:</Deskripsi>
      </div>
      <div className="flex items-center justify-center py-4">
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
          <CardMitra imgUrl="/assets/mitra1.png" nama="KARYA Kreatif GURU Paud" />
          <CardMitra imgUrl="/assets/mitra2.png" nama="Guru SD.id" />
        </div>
      </div>
    </div>
  );
};

export default SectionMitra;
