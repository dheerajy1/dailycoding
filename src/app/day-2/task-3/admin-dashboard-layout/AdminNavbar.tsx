type AdminNavbarProps = {
  onMenuClick: () => void;
};

const AdminNavbar = ({ onMenuClick }: AdminNavbarProps) => {
  return (
    <header className="bg-(--admin-bg-surface) border-b border-(--admin-border-main) p-4 flex justify-between items-center z-10 sticky top-0">
      <div className="flex items-center gap-4">
        {/* Toggle Hamburger Trigger for Mobile layouts */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 bg-(--admin-bg-muted) text-(--admin-text-muted) rounded-md transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Inline Dashboard Input Search Form */}
        <div className="hidden sm:block text-(--admin-text-muted)">
          <input
            type="text"
            placeholder="Search..."
            className="bg-(--admin-bg-main) border border-(--admin-border-main) rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Profile Avatar Badge Display */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-(--admin-avatar-bg) flex items-center justify-center text-(--admin-avatar-text) font-bold border border-(--admin-avatar-border)">
          AD
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
