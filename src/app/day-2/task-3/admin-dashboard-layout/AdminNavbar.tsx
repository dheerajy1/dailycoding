type AdminNavbarProps = {
  onMenuClick: () => void;
};

const AdminNavbar = ({ onMenuClick }: AdminNavbarProps) => {
  return (
    <header className="h-16 border-b border-(--admin-border-color) bg-(--admin-bg-surface) px-4 md:px-6 flex items-center justify-between sticky top-0 z-30 transition-colors">
      {/* Left Segment: Mobile Hamburger Trigger & Workspace Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-lg md:hidden outline-none transition text-(--admin-text-main) hover:bg-(--admin-bg-main) cursor-pointer"
          aria-label="Toggle Navigation Sidebar"
        >
          {/* Hamburger Icon Graphic */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="hidden sm:block text-xs font-semibold uppercase tracking-wider text-(--admin-text-muted)">
          Current Cluster /{" "}
          <span className="text-(--admin-text-main)">Live Overview</span>
        </div>
      </div>

      {/* Right Segment: Status Heartbeat Engine & Meta Actions */}
      <div className="flex items-center gap-4">
        {/* Dynamic Operational Pulse Check driven by variables */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-(--admin-bg-success-badge) text-(--admin-color-success)">
          <span className="w-2 h-2 rounded-full animate-pulse bg-(--admin-color-success)" />
          System Normal
        </div>

        {/* Global Action Utility Buttons */}
        <div className="flex items-center gap-1">
          <button
            className="p-2 rounded-lg transition text-sm relative outline-none text-(--admin-text-muted) hover:bg-(--admin-bg-main) cursor-pointer"
            title="Notifications Pending"
          >
            🔔
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-(--admin-color-danger)" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;