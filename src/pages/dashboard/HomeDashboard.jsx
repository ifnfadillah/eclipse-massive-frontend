import Sidebar from "../../components/Sidebar/Sidebar";
import NavDashboard from "../../components/NavDashboard/NavDashboard";

function HomeDashboard() {
  return (
    <div className="home-dashboard">
      <NavDashboard/>
      <Sidebar />
    </div>
  );
}

export default HomeDashboard;
