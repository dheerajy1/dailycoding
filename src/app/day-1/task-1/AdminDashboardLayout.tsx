import { useState } from 'react';

const AdminDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-(--bg-primary) flex flex-col md:flex-row">
      
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Hidden on mobile by default, toggled via state */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-(--border-main) p-6 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center md:block">
          <h2 className="text-xl font-bold text-(--text-main)">
            Admin Panel
          </h2>
          {/* Close button for mobile */}
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-2xl">
            &times;
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-4 text-(--text-muted)">
          <a href="#" className="hover:text-(--text-main) font-medium">Dashboard</a>
          <a href="#" className="hover:text-(--text-main) font-medium">Analytics</a>
          <a href="#" className="hover:text-(--text-main) font-medium">Users</a>
          <a href="#" className="hover:text-(--text-main) font-medium">Settings</a>
        </nav>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Navbar */}
        <header className="bg-white border-b border-(--border-main) p-4 flex justify-between items-center z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="md:hidden p-2 bg-gray-100 rounded-md"
            >
              {/* Hamburger Icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="hidden sm:block text-(--text-muted)">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-gray-50 border border-(--border-main) rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border border-blue-200">
              AD
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <section className="p-4 md:p-8 flex-1 overflow-y-auto">
          
          {/* Hero Section */}
          <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-xl p-6 md:p-8 text-white shadow-md mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">
              Welcome back, Admin! 👋
            </h1>
            <p className="mt-2 text-blue-100 opacity-90">
              Here is what's happening with your platform today. You have 12 pending orders that need your attention.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-(--text-main)">Analytics Dashboard</h2>
            <p className="text-(--text-muted) mt-1">Overview of system performance</p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white border border-(--border-main) p-5 rounded-lg shadow-sm">
              <h3 className="text-(--text-muted) text-sm font-medium uppercase tracking-wider">Revenue</h3>
              <p className="text-2xl md:text-3xl font-bold text-(--text-main) mt-2">₹1,25,000</p>
            </div>

            <div className="bg-white border border-(--border-main) p-5 rounded-lg shadow-sm">
              <h3 className="text-(--text-muted) text-sm font-medium uppercase tracking-wider">Users</h3>
              <p className="text-2xl md:text-3xl font-bold text-(--text-main) mt-2">8,450</p>
            </div>

            <div className="bg-white border border-(--border-main) p-5 rounded-lg shadow-sm">
              <h3 className="text-(--text-muted) text-sm font-medium uppercase tracking-wider">Orders</h3>
              <p className="text-2xl md:text-3xl font-bold text-(--text-main) mt-2">1,230</p>
            </div>
          </div>

          {/* Table Section */}
          <div className="mt-10 bg-white border border-(--border-main) rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b border-(--border-main) bg-gray-50/50">
              <h2 className="font-semibold text-(--text-main)">
                Recent Orders
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead className="text-(--text-muted) bg-gray-50/50">
                  <tr>
                    <th className="p-4 font-medium">ID</th>
                    <th className="p-4 font-medium">Customer</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Amount</th>
                  </tr>
                </thead>

                <tbody className="text-(--text-main) divide-y divide-(--border-main)">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">#101</td>
                    <td className="p-4">John Doe</td>
                    <td className="p-4">
                      <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">Paid</span>
                    </td>
                    <td className="p-4">₹2,500</td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">#102</td>
                    <td className="p-4">Jane Smith</td>
                    <td className="p-4">
                      <span className="px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full">Pending</span>
                    </td>
                    <td className="p-4">₹1,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
};

export default AdminDashboardLayout;