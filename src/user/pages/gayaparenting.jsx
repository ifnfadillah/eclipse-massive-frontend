import SectionGayaParenting from "../layouts/Section/SectionGayaParenting";
import BannerPanduan from "../components/BannerPanduan";
import SectionCardGaya from "../layouts/Section/SectionCardGaya";
import { useEffect } from "react";
import LayoutUser from "../layout";

function GayaParenting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutUser>
      <SectionGayaParenting />
      <SectionCardGaya />
      <BannerPanduan />
    </LayoutUser>
  );
}

export default GayaParenting;
