import SectionCTA from "../../components/CTA/SectionCTA";

const SectionPanduan = () => {
  return (
    <div className="section-home">
      <SectionCTA
        judul1=" Terapkan "
        fitur="Panduan Pola Asuh "
        judul2="Sesuai Usia Buah Hatimu!"
        deksripsi=" Setiap pertumbuhan usia anak akan memiliki pola asuh yang berbeda-beda untuk menyesuaikan perkembangannya. Pola asuh yang tepat akan berpengaruh terhadap tumbuh kembang anak di masa depan. Sesuaikan pola asuh kepada buah hatimu
        sesuai fase usianya."
        imgURL="/assets/PanduanPolaAsuh.png"
      >
        Lihat Panduan Pola Asuh
      </SectionCTA>
    </div>
  );
};

export default SectionPanduan;
