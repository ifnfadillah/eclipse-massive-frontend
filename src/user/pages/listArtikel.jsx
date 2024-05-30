import NavbarHome from "../components/Navbar/NavbarHome";
import Footer from "../components/Footer";
import ArtikelList from "../layouts/SectionLIstArtikel";
import CTAarticle from "../layouts/SectionCTAarticle";
import Banner from "../components/Banner/BannerArtikel";

function listArticle() {
  return (
    <div className="artikel bg-slate-50">
      <NavbarHome />
      <SectionCTAarticle />
      <ArtikelList />
      <Banner />
      <Footer />
    </div>
  );
}

export default listArticle;
