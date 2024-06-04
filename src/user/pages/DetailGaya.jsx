import { useEffect } from "react";
import SectionCTA from "../components/CTA/SectionCTA";
import LayoutUser from "../layout";
import { Link, useParams } from "react-router-dom";
import SectionPola from "../components/SectionPola";
import CardPerilaku from "../components/CardPerilaku";
import SectionParaAhli from "../components/SectionParaAhli";
import BannerDetailPanduan from "../components/Banner/BannerDetailPanduan";
import { gayaParenting } from "../layouts/Data/gayaParenting";
import Judul from "../components/Judul";
import JudulFitur from "../components/JudulFitur";
import ButtonCTA2 from "../components/CTA/Button/ButtonCTA2";
import CardCategory from "../components/CardCategory";

const DetailGaya = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll ke atas setiap kali komponen di-render
  }); // Tidak ada dependensi, jadi hanya terjadi saat pertama kali komponen di-mount

  const { id } = useParams();

  const gaya = gayaParenting.find((gaya) => gaya.id === parseInt(id));

  if (!gaya) {
    return <div>Gaya Parenting tidak ditemukan</div>;
  }
  const otherGaya = gayaParenting.filter((gaya) => gaya.id !== parseInt(id));

  return (
    <LayoutUser>
      <div className="section-gaya">
        <SectionCTA judul2={gaya.title} fitur="Gaya Parenting  " imgUrl={gaya.imageCTA} btn2="Pelajari Lebih Banyak"></SectionCTA>
        <CardPerilaku kategori={gaya.title} deskripsi={gaya.descGaya} pertanyaan="Apa itu" tanda="?" />
        <SectionPola
          judul="Perilaku"
          kategori={gaya.title}
          descSection={"Simak perilaku dari gaya parenting " + gaya.title}
          imgUrl={gaya.imagePanduan}
          desc1={gaya.guidelines[0]}
          desc2={gaya.guidelines[1]}
          desc3={gaya.guidelines[2]}
          desc4={gaya.guidelines[3]}
        />
        <SectionParaAhli desk={gaya.expertAdvice} nama={gaya.ahli} pekerjaan={gaya.pekerjaan} imgUrl={gaya.imageAhli} />
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 mt-8">
          <div className="mx-auto text-center mb-16">
            <div className="flex items-center justify-between mb-4">
              <Judul className="text-left">
                <JudulFitur>Gaya Parenting </JudulFitur> lainnya
              </Judul>
              <ButtonCTA2>
                <Link to="/gaya-parenting">Selengkapnya</Link>
              </ButtonCTA2>
            </div>
            <div className="flex items-center justify-center">
              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-y-0">
                {otherGaya.map((gaya) => (
                  <Link key={gaya.id} to={`/edukasi/gaya-parenting/${gaya.id}`}>
                    <CardCategory title={gaya.title} imageUrl={gaya.imageCard} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <BannerDetailPanduan />
        </div>
      </div>
    </LayoutUser>
  );
};

export default DetailGaya;
