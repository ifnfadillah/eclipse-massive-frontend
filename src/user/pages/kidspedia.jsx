import SectionKidspedia from "../layouts/Section/SectionKidspedia";
import FeaturesKidspedia from "../layouts/FeaturesKidspedia";
import BannerKidspedia from "../components/Banner/BannerKidspedia";
import { useEffect } from "react";
import LayoutUser from "../layout";

function Kidspedia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutUser>
      <SectionKidspedia />
      <FeaturesKidspedia />
      <BannerKidspedia />
    </LayoutUser>
  );
}

export default Kidspedia;
