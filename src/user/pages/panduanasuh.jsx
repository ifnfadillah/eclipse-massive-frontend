import NavbarHome from "../components/Navbar/NavbarHome";
import SectionPanduan from "../layouts/Section/SectionPanduan";
import SectionCategory from "../layouts/Section/SectionCategory";
import Footer from "../components/Footer";
import BannerPanduan from "../components/Banner/BannerPanduan";

function PanduanAsuh() {
  return (
    <div className="panduanAsuh bg-slate-50">
      <NavbarHome />
      <SectionPanduan />
      <SectionCategory />
      <BannerPanduan />
      <Footer />
    </div>
  );
}

export default PanduanAsuh;
