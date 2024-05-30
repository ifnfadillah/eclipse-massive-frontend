import NavbarHome from "../components/Navbar/NavbarHome";
import SectionSharenting from "../layouts/Section/SectionSharenting";
import FeaturesSharenting from "../layouts/FeaturesSharenting";
import Footer from "../components/Footer";
import BannerKomunitas from "../components/Banner/BannerKomunitas";

function Sharenting() {
  return (
    <div className="sharenting bg-slate-50">
      <NavbarHome />
      <SectionSharenting />
      <FeaturesSharenting />
      <BannerKomunitas />
      <Footer />
    </div>
  );
}

export default Sharenting;
