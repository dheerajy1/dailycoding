type FoodDeliverySidebarProps = {
  isSidebarOpen: boolean;
  onClose: () => void;
};

const FoodDeliverySidebar = ({ isSidebarOpen, onClose }: FoodDeliverySidebarProps) => {
  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Layout Panel */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-(--food-sidebar-width) bg-(--food-bg-surface) shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="h-full flex flex-col">
          {/* Header Branding Container */}
          <div className="p-6 border-b border-(--food-border-light) flex justify-between items-center lg:block">
            <h2 className="text-2xl font-extrabold text-(--food-accent-brand) tracking-tight">
              FoodieExpress
            </h2>
            <button onClick={onClose} className="lg:hidden text-(--food-text-muted) text-2xl">
              &times;
            </button>
          </div>
          
          {/* Primary Sidebar Navigation */}
          <nav className="flex-1 p-6 flex flex-col gap-4 text-(--food-text-nav)">
            <a href="#" className="flex items-center gap-3 hover:text-(--food-accent-brand) font-medium transition-colors">
              🏠 Home
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-(--food-accent-brand) font-medium transition-colors">
              🔥 Trending
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-(--food-accent-brand) font-medium transition-colors">
              🥗 Healthy Options
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-(--food-accent-brand) font-medium transition-colors">
              ❤️ Favorites
            </a>
          </nav>

          {/* Sidebar Footer Panel */}
          <div className="p-6 border-t border-(--food-border-light)">
            <a href="#" className="flex items-center gap-3 hover:text-(--food-accent-brand) font-medium transition-colors">
              ⚙️ Settings
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FoodDeliverySidebar;