import NavbarHome from "../components/NavbarHome";
import SectionCTA from "../section/SectionCTA";
import FeaturesHome from "../section/FeaturesHome";
import Testimonial from "../section/Testimonial";
import VideoShowcase from "../section/VideoShowcase";
import Faq from "../section/Faq";
import Footer from "../components/Footer";

function HomeUser() {
  return (
    <div className="home bg-slate-50">
      <NavbarHome />
      <SectionCTA />
      <FeaturesHome />
      <Testimonial />
      <VideoShowcase />
      <Faq />
      <Footer />
    </div>
  );
}

export default HomeUser;
