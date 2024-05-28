import NavbarHome from "../components/Navbar/NavbarHome";
import Footer from "../components/Footer";
import ArtikelList from "../layouts/SectionLIstArtikel";
import CTAarticle from "../layouts/SectionCTAarticle";

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
