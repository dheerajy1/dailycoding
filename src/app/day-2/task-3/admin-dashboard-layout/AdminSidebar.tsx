type AdminSidebarProps = {
  isSidebarOpen: boolean;
  onClose: () => void;
};

const AdminSidebar = ({ isSidebarOpen, onClose }: AdminSidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-(--admin-sidebar-width) bg-(--admin-bg-surface) border-r border-(--admin-border-main) p-6 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center md:block">
          <h2 className="text-xl font-bold text-(--admin-text-main)">
            Admin Panel
          </h2>
          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="md:hidden text-2xl text-(--admin-text-muted) hover:text-(--admin-text-main) transition-colors"
          >
            &times;
          </button>
        </div>

        {/* Navigation Stream */}
        <nav className="mt-8 flex flex-col gap-4 text-(--admin-text-muted)">
          <a
            href="#"
            className="hover:text-(--admin-text-main) font-medium transition-colors"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="hover:text-(--admin-text-main) font-medium transition-colors"
          >
            Analytics
          </a>
          <a
            href="#"
            className="hover:text-(--admin-text-main) font-medium transition-colors"
          >
            Users
          </a>
          <a
            href="#"
            className="hover:text-(--admin-text-main) font-medium transition-colors"
          >
            Settings
          </a>
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
