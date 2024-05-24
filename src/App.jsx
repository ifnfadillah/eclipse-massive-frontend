import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./admin/dashboard/HomeDashboard";
import Login from "./admin/login/Login";
import HomeUser from "./user/home/HomeUser";
import Kidspedia from "./user/home/edukasi/Kidspedia";
import Sharenting from "./user/home/Sharenting";
import PanduanAsuh from "./user/home/PanduanAsuh";
import NotFound from "./pages/404";
import './index.css';
import DataMitra from "./admin/mitra/DataMitra";
import DataKidspedia from "./admin/kidspedia/DataKidspedia";
import DataWebinar from "./admin/sharenting/DataWebinar";
import DataKomunitas from "./admin/sharenting/DataKomunitas";
import DataArtikel from "./admin/artikel/DataArtikel";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeUser />}>
        <Route index path="/" element={<HomeUser />} />
        <Route path="/kidspedia" element={<Kidspedia />} />
        <Route path="/sharenting" element={<Sharenting />} />
        <Route path="/edukasi/panduanasuh" element={<PanduanAsuh />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<HomeDashboard />} />
      <Route path="/data-mitra" element={<DataMitra />} />
      <Route path="/data-kidspedia" element={<DataKidspedia />} />
      <Route path="/data-webinar" element={<DataWebinar />} />
      <Route path="/data-komunitas" element={<DataKomunitas />} />
      <Route path="/data-artikel" element={<DataArtikel />} />
    </Routes>
  );
}

export default App;
