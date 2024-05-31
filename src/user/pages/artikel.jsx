import { useEffect } from "react";
import NavbarHome from "../components/Navbar/NavbarHome";
import DetailArtikel from "../layouts/detailArtikel";
import Footer from "../components/Footer";

function Artikel() {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll ke atas setiap kali komponen di-render ulang
  }, []); // Tidak bergantung pada state apapun, sehingga di-reset setiap kali komponen di-render ulang

  return (
    <div className="artikel bg-slate-50">
      <NavbarHome />
      <DetailArtikel />
      <Footer />
    </div>
  );
}

export default Artikel;
