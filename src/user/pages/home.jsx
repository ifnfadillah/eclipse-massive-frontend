import NavbarHome from "../components/Navbar/NavbarHome";
import SectionHome from "../layouts/Section/SectionHome";
import FeaturesHome from "../layouts/FeaturesHome";
import Testimonial from "../layouts/Testimonial";
import VideoShowcase from "../layouts/VideoShowcase";
import Faq from "../layouts/Faq";
import Footer from "../components/Footer";
import SectionMitra from "../layouts/Section/SectionMitra";

function HomeUser() {
  return (
    <div className="home bg-slate-50">
      <NavbarHome />
      <SectionHome />
      <SectionMitra />
      <FeaturesHome />
      <Testimonial />
      <VideoShowcase />
      <Faq />
      <Footer />
    </div>
  );
}

export default HomeUser;
