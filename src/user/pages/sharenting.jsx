import NavbarHome from "../components/NavbarHome";
import SectionCTA3 from "../layouts/SectionCta3";
import FeaturesSharenting from "../layouts/FeaturesSharenting";
import Footer from "../components/Footer";
import BannerKomunitas from "../components/Banner/BannerKomunitas";

function Sharenting() {
  return (
    <div className="sharenting bg-slate-50">
      <NavbarHome />
      <SectionCTA3 />
      <FeaturesSharenting />
      <BannerKomunitas />
      <Footer />
    </div>
  );
}

export default Sharenting;
