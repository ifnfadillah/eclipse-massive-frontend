import { useEffect } from "react";
import BannerKidspedia from "../components/Banner/BannerKidspedia";
import LayoutUser from "../layout";
import SectionGambar from "../layouts/Section/SectionGambar";

const ListMewarnai = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <LayoutUser>
      <SectionGambar />
      <BannerKidspedia />
    </LayoutUser>
  );
};

export default ListMewarnai;
