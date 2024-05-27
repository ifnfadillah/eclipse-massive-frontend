import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";
import CTAAarticle from "../section/SectionCTAarticle";
import ArtikelList from "../section/SectionLIstArtikel";

function listArticle() {
  return (
    <>
      <NavbarHome />
      <CTAAarticle />
      <ArtikelList />
      <Footer />
    </>
  );
}

export default listArticle;
