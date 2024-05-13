import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeDashboard from "./admin/dashboard/HomeDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
      </Routes>
    </>
  );
}

export default App;
