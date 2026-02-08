import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AIChat from "./pages/AIChat";
import Internship from "./pages/Internship";
import Sidebar from "./components/Sidebar";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/tasks"
        element={
          <Layout>
            <Tasks />
          </Layout>
        }
      />
      <Route
        path="/chat"
        element={
          <Layout>
            <AIChat />
          </Layout>
        }
      />
      <Route
        path="/internship"
        element={
          <Layout>
            <Internship />
          </Layout>
        }
      />
    </Routes>
  );
}
