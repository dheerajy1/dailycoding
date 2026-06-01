import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';
import AdminContent from './AdminContent';

const AdminDashboardIndex = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-(--admin-bg-main) flex flex-col md:flex-row font-sans">
      
      {/* 1. Dedicated Sidebar Layout */}
      <AdminSidebar 
        isSidebarOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Main Container Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* 2. Dedicated Top Navbar */}
        <AdminNavbar onMenuClick={() => setIsSidebarOpen(true)} />

        {/* 3. Central Analytics Scrollable Area */}
        <AdminContent />
        
      </div>
    </main>
  );
};

export default AdminDashboardIndex;
