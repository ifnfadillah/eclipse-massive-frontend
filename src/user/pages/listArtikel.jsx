import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";
import CTAarticle from "../section/SectionCTAarticle";
import ArtikelList from "../section/SectionLIstArtikel";

function listArticle() {
  return (
    <>
      <NavbarHome />
      <CTAarticle />
      <ArtikelList />
      <Footer />
    </>
  );
}

export default listArticle;
