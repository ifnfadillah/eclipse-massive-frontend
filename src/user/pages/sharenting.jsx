import CTASharenting from "../layouts/Section/SectionSharenting";
import FeaturesSharenting from "../layouts/FeaturesSharenting";
import BannerKomunitas from "../components/Banner/BannerKomunitas";
import { useEffect } from "react";
import LayoutUser from "../layout";

function Sharenting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutUser>
      <CTASharenting />
      <FeaturesSharenting />
      <BannerKomunitas />
    </LayoutUser>
  );
}

export default Sharenting;
