import NavbarHome from "../components/NavbarHome";
import SectionCTA4 from "../section/SectionCTA4";
import SectionCategory from "../section/SectionCategory";
import Footer from "../components/Footer";
import BannerPanduan from "../components/BannerPanduan";

function PanduanAsuh() {
  return (
    <div className="panduanAsuh bg-slate-50">
      <NavbarHome />
      <SectionCTA4 />
      <SectionCategory />
      <BannerPanduan />
      <Footer />
    </div>
  );
}

export default PanduanAsuh;
