import ArtikelList from "../layouts/Section/SectionLIstArtikel";
import CTAarticle from "../layouts/Section/SectionCTAarticle";
import Banner from "../components/Banner/BannerArtikel";
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
      <Banner />
    </LayoutUser>
  );
}

export default ListArticle;
