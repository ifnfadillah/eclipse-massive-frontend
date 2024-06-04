import CardCategory from "@/user/components/CardCategory";
import Deskripsi from "@/user/components/Deskripsi";
import Judul from "@/user/components/Judul";
import JudulFitur from "@/user/components/JudulFitur";
import { gayaParenting } from "../Data/gayaParenting";
import { Link } from "react-router-dom";

const SectionCardGaya = () => {
  return (
    <div className="SectionCategory">
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mb-32">
          <div className="mx-auto max-w-screen-lg text-center mb-16 lg:mb-24">
            <Judul>
              <JudulFitur> Gaya Parenting</JudulFitur>
            </Judul>
            <Deskripsi>Simak beberapa gaya parenting dibawah ini Parennials!</Deskripsi>
          </div>
          <div className="flex items-center justify-center mb-12">
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              {gayaParenting.slice(0, 3).map((gaya) => (
                <Link key={gaya.id} to={`/edukasi/gaya-parenting/${gaya.id}`}>
                  <CardCategory title={gaya.title} imageUrl={gaya.imageCard} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
              {gayaParenting.slice(3).map((gaya) => (
                <Link key={gaya.id} to={`/edukasi/gaya-parenting/${gaya.id}`}>
                  <CardCategory title={gaya.title} imageUrl={gaya.imageCard} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionCardGaya;
