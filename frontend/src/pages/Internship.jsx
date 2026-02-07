import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Internship() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <input className="input mb-3" placeholder="Skills" />
          <button className="btn bg-purple-600">Get Internships</button>
        </div>
      </div>
    </div>
  );
}
