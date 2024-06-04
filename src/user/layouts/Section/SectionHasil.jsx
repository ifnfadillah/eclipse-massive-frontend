import SectionCTA from "@/user/components/CTA/SectionCTA";
import { Link } from "react-router-dom";

const SectionHasil = () => {
  return (
    <SectionCTA
      judul1="Gaya Parenting Anda adalah "
      judul2="Authoritarian Parenting"
      deksripsi="Selamat! Berdasarkan jawaban Anda, gaya parenting yang paling sesuai untuk Anda adalah Authoritarian Parenting. Berikan umpan balik positif dengan memuji prestasi anak Anda, bukan hanya menunjukkan kesalahan mereka. Usahakan untuk lebih responsif terhadap perasaan anak, serta berikan mereka kesempatan untuk membuat keputusan sendiri."
      imgUrl="/assets/GayaParenting.png"
      btn2={<Link to="/edukasi/gaya-parenting/1">Lihat Gaya Parenting</Link>}
    >
      <Link to="/">Kembali ke Beranda</Link>
    </SectionCTA>
  );
};

export default SectionHasil;
