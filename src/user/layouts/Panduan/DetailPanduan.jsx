import SectionCTA from "@/user/components/CTA/SectionCTA";
import CardGizi from "@/user/components/CardGizi";
import CardPerilaku from "@/user/components/CardPerilaku";
import SectionAyah from "@/user/components/SectionAyah";
import SectionGizi from "@/user/components/SectionGizi";
import SectionParaAhli from "@/user/components/SectionParaAhli";
import SectionPola from "@/user/components/SectionPola";
import LayoutUser from "@/user/layout";
import { useEffect } from "react";

const DetailPanduan = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll ke atas setiap kali komponen di-render
  }, []); // Tidak ada dependensi, jadi hanya terjadi saat pertama kali komponen di-mount

  const polaAsuh = [
    {
      id: 1,
      imageCTA: "/assets/aa.png",
      imagePanduan: "/assets/polaAsuh3.png",
      imageSaran: "/assets/saranAyah3.png",
      imageAhli: "/assets/ahli-2.png",
      title: "Anak 3-6 Tahun",
      category: "Anak",
      descPerilaku: "Masa anak usia 3-6 tahun termasuk dalam masa perkembangan prasekolah dasar. Pada masa ini, anak-anak mulai mengembangkan kemampuan berbahasa, kognitif, dan sosio-emosional yang lebih kompleks dari masa sebelumnya.",
      descSection: "Simak panduan pola asuh yang dapat diterapkan pada anak usia 3 - 6 tahun di bawah ini!",
      umur: "3 - 6",
      guidelines: [
        "Mulai berikan batasan aturan dan konsekuensi secara bertahap.",
        "Mulai contoh perilaku yang baik setelah mengenalkan secara sosial di usia balita.",
        "Mulai ajarkan anak untuk mengembangkan kemampuan kognitif, seperti membaca ataupun menulis sebelum memasuki usia sekolah.",
        "Dorong anak untuk berpartisipasi dalam permainan yang melibatkan aktivitas fisik dan interaksi sosial untuk mengembangkan keterampilan.",
      ],
      fatherTips:
        "Ayah dapat membantu anak mengembangkan kemampuan kognitif seperti berpikir, berhitung, dan bermain. Hal ini dapat membantu anak mengembangkan kemampuan berpikir yang dapat menjadikan bekal dalam memasuki usia sekolah nantinya.",
      nutrisi: {
        1: {
          title: "Karbohidrat",
          desc: "Anak usia 3-6 tahun memerlukan 155 gram karbohidrat per hari, yang dapat diperoleh dari makanan seperti nasi putih, kentang, ubi jalar, dan pisang.",
        },
        2: {
          title: "Kalsium",
          desc: "Saat anak menginjak usia 3 tahun, orang tua bisa coba memberi susu yang dilengkapi dengan kandungan AA dan DHA. Kandungan ini penting untuk membantu perkembangan otak anak dan mempersiapkannya menjelang usia sekolah.",
        },
        3: {
          title: "Protein dan Mineral",
          desc: "Protein sebesar 44 gram per hari dapat diperoleh dari makanan seperti daging ayam, keju cheddar, dan susu sapi.",
        },
      },
      expertAdvice:
        "Masa prasekolah dasar (3-6 tahun) merupakan periode emas untuk anak dalam mengembangkan berbagai kemampuan fisik, kognitif, dan sosial emosional. Anak mulai menjelajahi dunia dengan rasa ingin tahu yang tinggi dan membutuhkan panduan yang tepat dari orang tua. Pada masa ini, kebutuhan kalsium anak meningkat pesat untuk mendukung pertumbuhan tulang dan gigi yang optimal, mendukung pertumbuhan tinggi badan, dan menjaga kesehatan saraf dan otot.",
      ahli: "Ambar Yuliarti, S.Gz",
      pekerjaan: "Ahli Gizi",
    },
  ];

  return (
    <LayoutUser>
      <div className="section-panduan">
        {polaAsuh.map((pola) => (
          <div key={pola.id}>
            <SectionCTA judul2={"Pada " + pola.title} fitur="Panduan Pola Asuh" imgURL={pola.imageCTA}>
              Lihat Panduan Pola Asuh
            </SectionCTA>
            <CardPerilaku kategori={pola.category} deskripsi={pola.descPerilaku} />
            <SectionPola kategori={pola.category} descSection={pola.descSection} imgUrl={pola.imagePanduan} desc1={pola.guidelines[0]} desc2={pola.guidelines[1]} desc3={pola.guidelines[2]} desc4={pola.guidelines[3]} />
            <SectionAyah desc={pola.fatherTips} imgURL={pola.imageSaran} />
            <SectionGizi usia={pola.umur}>
              <CardGizi judul={pola.nutrisi[1].title} desc={pola.nutrisi[1].desc} />
              <CardGizi judul={pola.nutrisi[2].title} desc={pola.nutrisi[2].desc} />
              <CardGizi judul={pola.nutrisi[3].title} desc={pola.nutrisi[3].desc} />
            </SectionGizi>
            <SectionParaAhli desk={pola.expertAdvice} nama={pola.ahli} pekerjaan={pola.pekerjaan} imgUrl={pola.imageAhli} />
          </div>
        ))}
      </div>
    </LayoutUser>
  );
};

export default DetailPanduan;
