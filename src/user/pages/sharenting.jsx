import CTASharenting from "../layouts/Section/SectionSharenting";
import FeaturesSharenting from "../layouts/FeaturesSharenting";
import { useEffect } from "react";
import LayoutUser from "../layout";
import BannerSharenting from "../components/Banner/BannerSharenting";

function Sharenting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutUser>
      <CTASharenting />
      <FeaturesSharenting />
      <BannerSharenting />
    </LayoutUser>
  );
}

export default Sharenting;
