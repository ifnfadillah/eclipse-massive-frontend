import BannerPanduan from "../components/BannerPanduan";
import SectionKenaliGaya from "../layouts/Section/SectionKenaliGaya";
import { useEffect } from "react";
import LayoutUser from "../layout";
import BannerKenali from "../components/Banner/BannerKenali";

function KenaliGaya() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutUser>
      <SectionKenaliGaya />
      <BannerKenali />
    </LayoutUser>
  );
}

export default KenaliGaya;
