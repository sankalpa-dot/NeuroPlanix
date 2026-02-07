import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Subjects() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <input className="input mb-3" placeholder="Subject Name" />
          <button className="btn">Add Subject</button>
        </div>
      </div>
    </div>
  );
}
