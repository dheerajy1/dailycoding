import { useState } from "react";
import { Outlet } from "react-router-dom"; // The magic layout slot component
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminDashboardIndex = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-(--admin-bg-main) flex flex-col md:flex-row font-sans">
      {/* 1. Permanent Sidebar Control Panel Layout */}
      <AdminSidebar
        isSidebarOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Container Wrapper Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* 2. Permanent Dedicated Top Navigation Header */}
        <AdminNavbar onMenuClick={() => setIsSidebarOpen(true)} />

        {/* 3. Central Dynamic Page Portal Slot */}
        {/* React Router injects the active sub-module view page right here, matching Next.js {children} */}
        <Outlet />
      </div>
    </main>
  );
};

export default AdminDashboardIndex;
