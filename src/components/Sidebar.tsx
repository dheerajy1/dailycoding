import { Link } from "react-router-dom";

type SidebarProps = {
  title: string;
  items: Array<{ id: number; name: string; path: string }>;
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ title, items, isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-(--bg-primary) border-r border-(--border-main) flex flex-col transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-5 border-b border-(--border-main) flex justify-between items-center">
          <h2 className="text-xl font-extrabold text-(--text-main)">{title}</h2>
          <button
            onClick={onClose}
            className="md:hidden text-2xl text-(--text-muted)"
          >
            &times;
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="text-(--text-muted) font-medium hover:text-(--accent-primary) transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
