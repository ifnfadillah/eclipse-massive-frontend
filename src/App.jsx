import { Route, Routes } from "react-router-dom";
import Login from "./admin/login/Login";

import NotFound from "./pages/404";
import "./index.css";
// admin
import Dashboard from "./admin/pages/Dashboard";
import DataMitra from "./admin/pages/DataMitra";
import AddMitra from "./admin/mitra/layout/AddMitra";
import EditMitra from "./admin/mitra/layout/EditMitra";
import DataKidspedia from "./admin/pages/DataKidspedia";
import AddKidspedia from "./admin/kidspedia/layout/AddKidspedia";
import EditKidspedia from "./admin/kidspedia/layout/EditKidspedia";
import DataWebinar from "./admin/pages/DataWebinar";
import AddWebinar from "./admin/webinar/layout/AddWebinar";
import EditWebinar from "./admin/webinar/layout/EditWebinar";
import DataKomunitas from "./admin/pages/DataKomunitas";
import AddKomunitas from "./admin/komunitas/layout/AddKomunitas";
import EditKomunitas from "./admin/komunitas/layout/EditKomunitas";
import DataArtikel from "./admin/pages/DataArtikel";
import AddArtikel from "./admin/artikel/layout/AddArtikel";
import EditArtikel from "./admin/artikel/layout/EditArtikel";

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
import { Edit } from "lucide-react";

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

      //ADMIN
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      //ADMIN MITRA
      <Route path="/data-mitra" element={<DataMitra />} />
      <Route path="/data-mitra/add" element={<AddMitra />} />
      <Route path="/data-mitra/edit:id" element={<EditMitra />} />
      //ADMIN KIDSPEDIA
      <Route path="/data-kidspedia" element={<DataKidspedia />} />
      <Route path="/data-kidspedia/add" element={<AddKidspedia />} />
      <Route path="/data-kidspedia/edit/:id" element={<EditKidspedia />} />
      //ADMIN WEBINAR
      <Route path="/data-webinar" element={<DataWebinar />} />
      <Route path="/data-webinar/add" element={<AddWebinar />} />
      <Route path="/data-webinar/edit/:id" element={<EditWebinar />} />
      //ADMIN KOMUNITAS
      <Route path="/data-komunitas" element={<DataKomunitas />} />
      <Route path="/data-komunitas/add" element={<AddKomunitas />} />
      <Route path="/data-komunitas/edit/:id" element={<EditKomunitas />} />
      //ADMIN ARTIKEL
      <Route path="/data-artikel" element={<DataArtikel />} />
      <Route path="/data-artikel/add" element={<AddArtikel />} />
      <Route path="/data-artikel/edit/:id" element={<EditArtikel />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
