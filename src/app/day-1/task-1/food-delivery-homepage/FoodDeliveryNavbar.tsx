type FoodDeliveryNavbarProps = {
  onMenuClick: () => void;
};

const FoodDeliveryNavbar = ({ onMenuClick }: FoodDeliveryNavbarProps) => {
  return (
    <header className="bg-(--food-bg-surface) shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger Button */}
        <button 
          onClick={onMenuClick} 
          className="lg:hidden p-2 text-(--food-text-muted) hover:bg-(--food-border-light) rounded-md"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Geolocation Display */}
        <div className="hidden sm:flex items-center text-sm font-medium text-(--food-text-muted)">
          📍 Delivering to: <span className="text-(--food-text-dark) ml-1">Khammam, TG</span>
        </div>
      </div>

      {/* Action Utilities */}
      <div className="flex items-center gap-4">
        {/* Cart Trigger */}
        <button className="relative p-2 text-(--food-text-muted) hover:bg-(--food-border-light) rounded-full transition-colors">
          🛒
          <span className="absolute top-0 right-0 bg-(--food-accent-brand) text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </button>
        
        {/* User Profile Avatar */}
        <div className="w-(--food-avatar-size) h-(--food-avatar-size) rounded-full bg-(--food-bg-profile) border-2 border-(--food-accent-brand) overflow-hidden cursor-pointer">
          <img 
            src="https://ui-avatars.com/api/?name=User&background=random" 
            alt="User Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default FoodDeliveryNavbar;