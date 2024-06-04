import { useEffect } from "react";
import BannerKidspedia from "../components/Banner/BannerKidspedia";
import LayoutUser from "../layout";
import SectionVideo from "../layouts/Section/SectionVideo";

const ListVideoBelajar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <LayoutUser>
      <SectionVideo />
      <BannerKidspedia />
    </LayoutUser>
  );
};

export default ListVideoBelajar;
