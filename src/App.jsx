import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./admin/dashboard/HomeDashboard";
import Login from "./admin/login/Login";

import NotFound from "./pages/404";
import "./index.css";
import DataMitra from "./admin/mitra/DataMitra";
import TambahMitra from "./admin/mitra/TambahMitra";
import DataKidspedia from "./admin/kidspedia/DataKidspedia";
import TambahKidspedia from "./admin/kidspedia/TambahKidspedia";
import DataWebinar from "./admin/webinar/DataWebinar";
import TambahWebinar from "./admin/webinar/TambahWebinar";
import DataKomunitas from "./admin/komunitas/DataKomunitas";
import TambahKomunitas from "./admin/komunitas/TambahKomunitas";
import DataArtikel from "./admin/artikel/DataArtikel";
import TambahArtikel from "./admin/artikel/TambahArtikel";

// user
import HomeUser from "./user/pages/home";
import Kidspedia from "./user/pages/kidspedia";
import Sharenting from "./user/pages/sharenting";
import Webinar from "./user/pages/webinar";
import PanduanAsuh from "./user/pages/panduanasuh";
import ListArticle from "./user/pages/listArtikel";
import Komunitas from "./user/pages/komunitas";
import DetailKomunitas from "./user/pages/DetailKomunitas";
import DetailWebinar from "./user/pages/DetailWebinar";
import Artikel from "./user/pages/artikel";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomeUser />} />
      <Route path="/kidspedia" element={<Kidspedia />} />
      <Route path="/sharenting" element={<Sharenting />} />
      <Route path="/sharenting-webinar" element={<Webinar />} />
      <Route path="/sharenting-webinar/:id" element={<DetailWebinar />} />
      <Route path="/sharenting-komunitas" element={<Komunitas />} />
      <Route path="/sharenting-komunitas/:id" element={<DetailKomunitas />} />
      <Route path="/edukasi/panduanasuh" element={<PanduanAsuh />} />
      <Route path="/artikel-list" element={<ListArticle />} />
      <Route path="/artikel/:id" element={<Artikel />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<HomeDashboard />} />
      <Route path="/data-mitra" element={<DataMitra />} />
      <Route path="/data-mitra-tambah" element={<TambahMitra />} />
      <Route path="/data-kidspedia" element={<DataKidspedia />} />
      <Route path="/data-kidspedia-tambah" element={<TambahKidspedia />} />
      <Route path="/data-webinar" element={<DataWebinar />} />
      <Route path="/data-webinar-tambah" element={<TambahWebinar />} />
      <Route path="/data-komunitas" element={<DataKomunitas />} />
      <Route path="/data-komunitas-tambah" element={<TambahKomunitas />} />
      <Route path="/data-artikel" element={<DataArtikel />} />
      <Route path="/data-artikel-tambah" element={<TambahArtikel />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
