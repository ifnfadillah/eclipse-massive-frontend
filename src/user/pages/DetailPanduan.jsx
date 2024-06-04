import SectionCTA from "@/user/components/CTA/SectionCTA";
import CardGizi from "@/user/components/CardGizi";
import CardPerilaku from "@/user/components/CardPerilaku";
import SectionAyah from "@/user/components/SectionAyah";
import SectionGizi from "@/user/components/SectionGizi";
import SectionParaAhli from "@/user/components/SectionParaAhli";
import SectionPola from "@/user/components/SectionPola";
import LayoutUser from "@/user/layout";
import BannerDetailPanduan from "../components/Banner/BannerDetailPanduan";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { polaAsuh } from "../layouts/Data/polaAsuh";
import CardCategory from "../components/CardCategory";
import Judul from "../components/Judul";
import JudulFitur from "../components/JudulFitur";
import ButtonCTA2 from "../components/CTA/Button/ButtonCTA2";

const DetailPanduan = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll ke atas setiap kali komponen di-render
  }); // Tidak ada dependensi, jadi hanya terjadi saat pertama kali komponen di-mount

  const { id } = useParams();

  const pola = polaAsuh.find((pola) => pola.id === parseInt(id));

  if (!pola) {
    return <div>Pola Asuh tidak ditemukan</div>;
  }

  const otherPolas = polaAsuh.filter((pola) => pola.id !== parseInt(id));

  return (
    <LayoutUser>
      <div className="section-panduan">
        <SectionCTA judul2={"Pada " + pola.title} fitur="Panduan Pola Asuh  " imgUrl={pola.imageCTA}>
          <Link key={pola.id} to={`/panduan-asuh/${pola.id}`}>
            Lihat Panduan Pola Asuh
          </Link>
        </SectionCTA>
        <CardPerilaku kategori={pola.category} deskripsi={pola.descPerilaku} pertanyaan="Bagaimana Perilaku" />
        <SectionPola
          judul="Pola Asuh"
          kategori={"yang Tepat pada " + pola.category}
          descSection={pola.descSection}
          imgUrl={pola.imagePanduan}
          desc1={pola.guidelines[0]}
          desc2={pola.guidelines[1]}
          desc3={pola.guidelines[2]}
          desc4={pola.guidelines[3]}
        />
        <SectionAyah desc={pola.fatherTips} imgUrl={pola.imageSaran} />
        <SectionGizi usia={pola.umur}>
          <CardGizi judul={pola.nutrisi[1].title} desc={pola.nutrisi[1].desc} />
          <CardGizi judul={pola.nutrisi[2].title} desc={pola.nutrisi[2].desc} />
          <CardGizi judul={pola.nutrisi[3].title} desc={pola.nutrisi[3].desc} />
        </SectionGizi>
        <SectionParaAhli desk={pola.expertAdvice} nama={pola.ahli} pekerjaan={pola.pekerjaan} imgUrl={pola.imageAhli} />

        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16">
          <div className="mx-auto text-center mb-16">
            <div className="flex items-center justify-between mb-4">
              <Judul className="text-left">
                <JudulFitur>Pola Asuh </JudulFitur> lainnya
              </Judul>
              <ButtonCTA2>
                <Link to="/panduan-asuh">Selengkapnya</Link>
              </ButtonCTA2>
            </div>
            <div className="flex items-center justify-center">
              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5 md:space-y-0">
                {otherPolas.map((pola) => (
                  <Link key={pola.id} to={`/edukasi/panduan-asuh/${pola.id}`}>
                    <CardCategory title={pola.title} imageUrl={pola.imageCard} />
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

export default DetailPanduan;
