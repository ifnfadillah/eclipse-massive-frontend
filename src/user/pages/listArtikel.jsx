import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";
import SectionCTAarticle from "../layouts/SectionCTAarticle";
import ArtikelList from "../layouts/SectionLIstArtikel";

function listArticle() {
  return (
    <>
      <NavbarHome />
      <SectionCTAarticle />
      <ArtikelList />
      <Footer />
    </>
  );
}

export default listArticle;
