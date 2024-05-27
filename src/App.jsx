import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./admin/dashboard/HomeDashboard";
import Login from "./admin/login/Login";

import ListArticle from "./user/home/listArtikel";
import NotFound from "./pages/404";
import "./index.css";
import DataMitra from "./admin/mitra/DataMitra";
import TambahMitra from "./admin/mitra/TambahMitra";
import DataKidspedia from "./admin/kidspedia/DataKidspedia";
import TambahKidspedia from "./admin/kidspedia/TambahKidspedia";
import DataWebinar from "./admin/sharenting/DataWebinar";
import TambahWebinar from "./admin/sharenting/TambahWebinar";
import DataKomunitas from "./admin/sharenting/DataKomunitas";
import TambahKomunitas from "./admin/sharenting/TambahKomunitas";
import DataArtikel from "./admin/artikel/DataArtikel";
import TambahArtikel from "./admin/artikel/TambahArtikel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeUser />}>
        <Route index path="/" element={<HomeUser />} />
        <Route path="/kidspedia" element={<Kidspedia />} />
        <Route path="/sharenting" element={<Sharenting />} />
        <Route path="/edukasi/panduanasuh" element={<PanduanAsuh />} />
        <Route path="/article" element={<ListArticle />} />
      </Route>
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
