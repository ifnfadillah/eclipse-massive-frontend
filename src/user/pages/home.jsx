import SectionHome from "../layouts/Section/SectionHome";
import FeaturesHome from "../layouts/FeaturesHome";
import Testimonial from "../layouts/Testimonial";
import VideoShowcase from "../layouts/VideoShowcase";
import Faq from "../layouts/Faq";

import SectionMitra from "../layouts/Section/SectionMitra";
import { useEffect } from "react";
import LayoutUser from "../layout";

function HomeUser() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutUser>
      <SectionHome />
      <SectionMitra />
      <FeaturesHome />
      <Testimonial />
      <VideoShowcase />
      <Faq />
    </LayoutUser>
  );
}

export default HomeUser;
