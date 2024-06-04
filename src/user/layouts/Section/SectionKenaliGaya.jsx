import { Link } from "react-router-dom";
import SectionCTA from "../../components/CTA/SectionCTA";

const SectionKenaliGaya = () => {
  return (
    <div className="section-kenali-gaya">
      <SectionCTA
        judul1="Belum Mengetahui "
        fitur="Gaya Parenting "
        judul2="Anda Kepada Anak? "
        deksripsi=" Jangan khawatir, kami siap membantu Anda mengenali dan memahami gaya pengasuhan yang paling sesuai untuk mendukung tumbuh kembang buah hati Anda secara optimal"
        imgUrl="/assets/KenaliGaya.png"
      >
        <Link to="/edukasi/kenali-gaya/quiz">Ikuti Tes</Link>
      </SectionCTA>
    </div>
  );
};

export default SectionKenaliGaya;
