import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Subjects from "./pages/Subjects";
import StudyPlan from "./pages/StudyPlan";
import Tasks from "./pages/Tasks";
import AIChat from "./pages/AIChat";
import Internship from "./pages/Internship";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/study-plan" element={<StudyPlan />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/ai-chat" element={<AIChat />} />
        <Route path="/internship" element={<Internship />} />
      </Routes>
    </div>
  );
}
