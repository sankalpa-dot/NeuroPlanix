import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Profile() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6 max-w-xl">
          <h2 className="text-2xl font-bold mb-4">
            User Profile
          </h2>

          <label className="block mb-2 text-gray-600">
            Name
          </label>
          <input
            className="input mb-4"
            placeholder="Your Name"
          />

          <label className="block mb-2 text-gray-600">
            Course / Semester
          </label>
          <input
            className="input mb-4"
            placeholder="B.Tech / Semester 5"
          />

          <label className="block mb-2 text-gray-600">
            Daily Study Goal (Hours)
          </label>
          <input
            type="number"
            className="input mb-4"
            placeholder="4"
          />

          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}
