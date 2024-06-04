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
import PanduanAsuh from "./user/pages/panduanasuh";
import ListArticle from "./user/pages/listArtikel";
import GayaParenting from "./user/pages/gayaparenting";
import KenaliGaya from "./user/pages/kenaligaya";
import Quiz from "./user/pages/quiz";
import DetailPanduan from "./user/pages/DetailPanduan";
import HasilQuiz from "./user/pages/hasilquiz";
import DetailGaya from "./user/pages/DetailGaya";
import ListVideoBelajar from "./user/pages/listVideoBelajar ";
import ListMewarnai from "./user/pages/listMewarnai";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomeUser />} />
      <Route path="/kidspedia" element={<Kidspedia />} />
      <Route path="/sharenting" element={<Sharenting />} />
      <Route path="/edukasi/gaya-parenting" element={<GayaParenting />} />
      <Route path="/edukasi/kenali-gaya" element={<KenaliGaya />} />
      <Route path="/edukasi/kenali-gaya/quiz" element={<Quiz />} />
      <Route path="/edukasi/kenali-gaya/quiz/hasilquiz" element={<HasilQuiz />} />
      <Route path="/artikel" element={<ListArticle />} />
      <Route path="/edukasi/panduan-asuh" element={<PanduanAsuh />} />
      <Route path="/edukasi/panduan-asuh/:id" element={<DetailPanduan />} />
      <Route path="/edukasi/gaya-parenting/:id" element={<DetailGaya />} />
      <Route path="/list-video" element={<ListVideoBelajar />} />
      <Route path="/list-mewarnai" element={<ListMewarnai />} />

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
