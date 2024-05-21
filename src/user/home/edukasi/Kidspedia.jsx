import NavbarHome from "../../components/NavbarHome";
import SectionCTA2 from "../../section/SectionCta2";
import FeaturesKidspedia from "../../section/FeaturesKidspedia";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";

function Kidspedia() {
  return (
    <div className="kidspedia bg-slate-50">
      <NavbarHome />
      <SectionCTA2 />
      <FeaturesKidspedia />
      <Banner />
      <Footer />
    </div>
  );
}

export default Kidspedia;
