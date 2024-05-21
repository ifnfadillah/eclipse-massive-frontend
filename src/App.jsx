import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./admin/dashboard/HomeDashboard";
import Login from "./admin/login/Login";
import HomeUser from "./user/home/HomeUser";
import Kidspedia from "./user/home/edukasi/Kidspedia";
import Sharenting from "./user/home/Sharenting";
import PanduanAsuh from "./user/home/PanduanAsuh";

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
