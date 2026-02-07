import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Subjects from "../pages/Subjects";
import StudyPlan from "../pages/StudyPlan";
import Tasks from "../pages/Tasks";
import AIChat from "../pages/AIChat";
import Motivation from "../pages/Motivation";
import Internship from "../pages/Internship";

export default function AppRoutes() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/study-plan" element={<StudyPlan />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/ai-chat" element={<AIChat />} />
      <Route path="/motivation" element={<Motivation />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}
