import NavbarHome from "../components/Navbar/NavbarHome";
import CTAHome from "../layouts/CTAHome";
import FeaturesHome from "../layouts/FeaturesHome";
import Testimonial from "../layouts/Testimonial";
import VideoShowcase from "../layouts/VideoShowcase";
import Faq from "../layouts/Faq";
import Footer from "../components/Footer";

function HomeUser() {
  return (
    <div className="home bg-slate-50">
      <NavbarHome />
      <CTAHome />
      <FeaturesHome />
      <Testimonial />
      <VideoShowcase />
      <Faq />
      <Footer />
    </div>
  );
}

export default HomeUser;
