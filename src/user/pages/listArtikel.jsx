import { useEffect } from "react";
import NavbarHome from "../components/Navbar/NavbarHome";
import Footer from "../components/Footer";
import ArtikelList from "../layouts/Section/SectionLIstArtikel";
import CTAarticle from "../layouts/Section/SectionCTAarticle";
import Banner from "../components/Banner/BannerArtikel";

function ListArticle() {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll ke atas setiap kali komponen di-render ulang
  }, []); // Tidak bergantung pada state apapun, sehingga di-reset setiap kali komponen di-render ulang

  return (
    <div className="artikel bg-slate-50">
      <NavbarHome />
      <CTAarticle />
      <ArtikelList />
      <Banner />
      <Footer />
    </div>
  );
}

export default ListArticle;
