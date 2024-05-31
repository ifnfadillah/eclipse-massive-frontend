import CTASharenting from "../layouts/Section/SectionSharenting";
import FeaturesSharenting from "../layouts/FeaturesSharenting";
import BannerKomunitas from "../components/Banner/BannerKomunitas";
import LayoutUser from "../layout";

function Sharenting() {
  return (
    <LayoutUser>
      <CTASharenting />
      <FeaturesSharenting />
      <BannerKomunitas />
    </LayoutUser>
  );
}

export default Sharenting;
