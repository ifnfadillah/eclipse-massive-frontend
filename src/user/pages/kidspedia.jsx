import NavbarHome from "../components/Navbar/NavbarHome";
import SectionKidspedia from "../layouts/Section/SectionKidspedia";
import FeaturesKidspedia from "../layouts/FeaturesKidspedia";
import Footer from "../components/Footer";
import BannerKidspedia from "../components/Banner/BannerKidspedia";

function Kidspedia() {
  return (
    <div className="kidspedia bg-slate-50">
      <NavbarHome />
      <SectionKidspedia />
      <FeaturesKidspedia />
      <BannerKidspedia />
      <Footer />
    </div>
  );
}

export default Kidspedia;
