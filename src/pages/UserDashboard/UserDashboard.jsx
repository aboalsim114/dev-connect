import Sidebar from "./components/Sidebar";
import MainFeed from "./components/MainFeed";
import RightRail from "./components/RightRail";

export default function UserDashboard() {
  return (
    <div
      className="font-sans text-[#0B0F17] min-h-screen"
      style={{
        background: "#F4F6F1",
        display: "grid",
        gridTemplateColumns: "260px minmax(0,1fr) 320px",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <Sidebar />
      <MainFeed />
      <RightRail />
    </div>
  );
}
