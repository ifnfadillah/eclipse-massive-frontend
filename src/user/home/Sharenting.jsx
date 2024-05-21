import NavbarHome from "../components/NavbarHome";
import SectionCTA3 from "../section/SectionCta3";
import FeaturesSharenting from "../section/FeaturesSharenting";
import Footer from "../components/Footer";
import BannerKomunitas from "../components/Banner2";

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
