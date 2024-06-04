import BannerPanduan from "../components/BannerPanduan";
import SectionKenaliGaya from "../layouts/Section/SectionKenaliGaya";
import { useEffect } from "react";
import LayoutUser from "../layout";

function KenaliGaya() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutUser>
      <SectionKenaliGaya />
      <BannerPanduan />
    </LayoutUser>
  );
}

export default KenaliGaya;
