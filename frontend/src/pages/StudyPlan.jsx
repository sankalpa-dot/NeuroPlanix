import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function StudyPlan() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <input className="input mb-3" placeholder="Study Hours" />
          <button className="btn bg-green-600">Generate Plan</button>
        </div>
      </div>
    </div>
  );
}
