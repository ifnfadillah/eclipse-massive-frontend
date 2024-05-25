import NavbarHome from "../components/NavbarHome";
import SectionCTA2 from "../layouts/SectionCta2";
import FeaturesKidspedia from "../layouts/FeaturesKidspedia";
import Footer from "../components/Footer";
import BannerKidspedia from "../components/Banner/BannerKidspedia";

function Kidspedia() {
  return (
    <div className="kidspedia bg-slate-50">
      <NavbarHome />
      <SectionCTA2 />
      <FeaturesKidspedia />
      <BannerKidspedia />
      <Footer />
    </div>
  );
}

export default Kidspedia;
