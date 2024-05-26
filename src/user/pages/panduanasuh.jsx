import NavbarHome from "../components/Navbar/NavbarHome";
import SectionCTA4 from "../layouts/SectionCTA4";
import SectionCategory from "../layouts/SectionCategory";
import Footer from "../components/Footer";

import BannerPanduan from "../components/BannerPandua";

import BannerPanduan from "../components/Banner/BannerPanduan";

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
