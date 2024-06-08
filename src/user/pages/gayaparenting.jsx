import SectionGayaParenting from "../layouts/Section/SectionGayaParenting";
import SectionCardGaya from "../layouts/Section/SectionCardGaya";
import { useEffect } from "react";
import LayoutUser from "../layout";
import BannerGaya from "../components/Banner/BannerGaya";

function GayaParenting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutUser>
      <SectionGayaParenting />
      <SectionCardGaya />
      <BannerGaya />
    </LayoutUser>
  );
}

export default GayaParenting;
