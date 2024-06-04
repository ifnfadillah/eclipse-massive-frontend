import NavbarHome from "./components/Navbar/NavbarHome";
import Footer from "./components/Footer";

const LayoutUser = ({ children }) => {
  return (
    <>
      <div className="bg-slate-50">
        <NavbarHome />
        <div className="w-full py-3 lg:py-10 md:px-10 flex flex-col">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default LayoutUser;
