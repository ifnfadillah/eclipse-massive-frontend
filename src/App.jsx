import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import HomeDashboard from "./admin/dashboard/HomeDashboard";
import Login from "./admin/login/Login";
import HomeUser from "./user/home/HomeUser";
import Kidspedia from "./user/home/edukasi/Kidspedia";
import Sharenting from "./user/home/Sharenting";
import PanduanAsuh from "./user/home/PanduanAsuh";
import NotFound from "./pages/404";


function App() {
  return (
    <Routes>
      <Route path="/beranda" element={<HomeUser />} />
      <Route path="/kidspedia" element={<Kidspedia />} />
      <Route path="/sharenting" element={<Sharenting />} />
      <Route path="/edukasi/panduanasuh" element={<PanduanAsuh />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<HomeDashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
