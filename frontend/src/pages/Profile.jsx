export default function Profile() {
  const userInfo = {
    name: "John Doe",
    email: "john@example.com",
    joinDate: "Jan 15, 2024",
    level: "Advanced Learner",
    totalHours: 127,
  };

  return (
    <div className="p-8 min-h-screen bg-slate-950">
      <h1 className="text-3xl font-bold mb-6">👤 My Profile</h1>

      {/* Profile Header */}
      <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 mb-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-4xl">
            👨‍🎓
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">{userInfo.name}</h2>
            <p className="text-gray-400">{userInfo.email}</p>
            <p className="text-indigo-400 font-medium mt-2">{userInfo.level}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <p className="text-gray-400 mb-2">Member Since</p>
          <p className="text-2xl font-bold">{userInfo.joinDate}</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <p className="text-gray-400 mb-2">Total Study Hours</p>
          <p className="text-2xl font-bold">{userInfo.totalHours} Hrs</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <p className="text-gray-400 mb-2">Current Streak</p>
          <p className="text-2xl font-bold">15 Days 🔥</p>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
        <h3 className="text-xl font-bold mb-4">Account Settings</h3>
        <div className="space-y-4">
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition">
            Edit Profile
          </button>
          <button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg transition">
            Change Password
          </button>
          <button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
