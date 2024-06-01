import CardDashboard from "../components/CardDashboard";
import { Handshake, Baby, UsersRound, Newspaper } from "lucide-react";

const datas = [
  {
    id: 1,
    icon: Handshake,
    title: "Data Mitra",
    dataCount: 0,
  },
  {
    id: 2,
    icon: Baby,
    title: "Data Kidspedia",
    dataCount: 3,
  },
  {
    id: 3,
    icon: UsersRound,
    title: "Data Webinar",
    dataCount: 4,
  },
  {
    id: 4,
    icon: UsersRound,
    title: "Data Komunitas",
    dataCount: 4,
  },
  {
    id: 5,
    icon: Newspaper,
    title: "Data Artikel",
    dataCount: 4,
  },
];

function HomeDashboard() {
  return (
    <div>
      <p className="text-lg font-secondary font-regular mb-2">Hai, Admin!</p>
      <h1 className="text-2xl font-primary font-medium">Dashboard</h1>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {datas.map((data) => (
          <CardDashboard key={data.id} id={data.id} icon={data.icon} title={data.title} dataCount={data.dataCount} />
        ))}
      </div>
    </div>
  );
}

export default HomeDashboard;
