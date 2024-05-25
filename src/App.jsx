import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./admin/dashboard/HomeDashboard";
import Login from "./admin/login/Login";
import HomeUser from "./user/pages/home";
import Kidspedia from "./user/pages/kidspedia";
import Sharenting from "./user/pages/sharenting";
import PanduanAsuh from "./user/pages/panduan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/kidspedia" element={<Kidspedia />} />
        <Route path="/sharenting" element={<Sharenting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<HomeDashboard />} />
        <Route path="/edukasi/panduanasuh" element={<PanduanAsuh />} />
      </Routes>
    </>
  );
}

export default App;
