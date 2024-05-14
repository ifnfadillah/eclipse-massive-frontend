import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./admin/dashboard/HomeDashboard";
import Login from "./admin/login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<HomeDashboard />} />
      </Routes>
    </>
  );
}

export default App;
