import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../../../lib/utils";

type AdminSidebarProps = {
  isSidebarOpen: boolean;
  onClose: () => void;
};

const AdminSidebar = ({ isSidebarOpen, onClose }: AdminSidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Define clean route segments matching our nested path mappings
  const menuItems = [
    {
      label: "Overview",
      icon: "📊",
      path: "/day-2/task-3/admin-dashboard-layout",
    },
    {
      label: "Analytics",
      icon: "📈",
      path: "/day-2/task-3/admin-dashboard-layout/analytics",
    },
    {
      label: "Customers",
      icon: "👥",
      path: "/day-2/task-3/admin-dashboard-layout/customers",
    },
    {
      label: "Orders",
      icon: "📦",
      path: "/day-2/task-3/admin-dashboard-layout/orders",
    },
    {
      label: "SaaS Settings",
      icon: "⚙️",
      path: "/day-2/task-3/admin-dashboard-layout/settings",
    },
  ];

  return (
    <>
      {/* Mobile Drawer Overlay Backdrop using variables with opacity mod */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-(--admin-bg-sidebar)/40 backdrop-blur-xs z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Main Persistent Control Rail */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-(--admin-sidebar-width) bg-(--admin-bg-sidebar) text-(--admin-text-inverse) p-5 flex flex-col border-r border-(--admin-sidebar-border) transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static shrink-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Brand Terminal Node */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-(--admin-sidebar-border)">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-lg tracking-tight admin-brand-text-gradient">
              ApexSaaS Admin
            </span>
          </div>
          <button
            onClick={onClose}
            className="md:hidden text-xl outline-none text-(--admin-sidebar-text-unselected) cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Navigation Core */}
        <nav className="flex-1 space-y-1.5">
          {menuItems.map((item, idx) => {
            // Checks if the current browser URL pathname perfectly matches this item's target route path
            const isItemActive = location.pathname === item.path;

            return (
              <button
                key={idx}
                onClick={() => {
                  navigate(item.path); // Transitions URL address path seamlessly
                  onClose(); // Auto-closes mobile sidebar navigation drawer overlay
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition duration-200 outline-none cursor-pointer",
                  isItemActive
                    ? "bg-(--admin-brand-accent) text-(--admin-text-inverse)"
                    : "bg-transparent text-(--admin-sidebar-text-unselected) hover:bg-(--admin-sidebar-item-hover-bg) hover:text-(--admin-sidebar-text-hover)",
                )}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* User Account Capsule Footer */}
        <div className="mt-auto border-t border-(--admin-sidebar-border) pt-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border bg-(--admin-profile-avatar-bg) border-(--admin-profile-avatar-border) text-(--admin-profile-avatar-text)">
            DS
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold truncate text-(--admin-text-inverse)">
              Dheeraj Sharma
            </p>
            <p className="text-[10px] truncate text-(--admin-profile-subtitle)">
              admin@apexsaas.io
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
