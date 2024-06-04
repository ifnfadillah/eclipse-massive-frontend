import SectionPanduan from "../layouts/Section/SectionPanduan";
import SectionCategory from "../layouts/Section/SectionCategory";

import BannerPanduan from "../components/Banner/BannerPanduan";
import { useEffect } from "react";
import LayoutUser from "../layout";

function PanduanAsuh() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutUser>
      <SectionPanduan />
      <SectionCategory />
      <BannerPanduan />
    </LayoutUser>
  );
}

export default PanduanAsuh;
