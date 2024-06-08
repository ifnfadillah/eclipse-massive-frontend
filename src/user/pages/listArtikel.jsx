import ArtikelList from "../layouts/Section/SectionLIstArtikel";
import CTAarticle from "../layouts/Section/SectionCTAarticle";
import { useEffect } from "react";
import LayoutUser from "../layout";

function ListArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LayoutUser>
      <CTAarticle />
      <ArtikelList />
    </LayoutUser>
  );
}

export default ListArticle;
