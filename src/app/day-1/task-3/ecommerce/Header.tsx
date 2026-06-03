interface HeaderProps {
  cartCount: number;
  onResetView: () => void;
  onHomeClick: () => void;
}

const Header = ({ cartCount, onResetView, onHomeClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 bg-(--shop-bg-surface) border-b border-(--shop-border-main)">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Branding */}
        <button
          onClick={onResetView}
          className="font-serif text-3xl tracking-widest text-(--shop-text-main) font-medium"
        >
          KAIRA
        </button>

        {/* Navigation Links Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase text-(--shop-text-muted)">
          <button
            onClick={onHomeClick}
            className="text-(--shop-text-main) hover:opacity-80 transition"
          >
            Home
          </button>
          <span className="cursor-pointer hover:text-(--shop-text-main) transition flex items-center gap-1">
            Shop <small className="text-[8px]">▼</small>
          </span>
          <span className="cursor-pointer hover:text-(--shop-text-main) transition flex items-center gap-1">
            Blog <small className="text-[8px]">▼</small>
          </span>
          <span className="cursor-pointer hover:text-(--shop-text-main) transition flex items-center gap-1">
            Pages <small className="text-[8px]">▼</small>
          </span>
          <span className="cursor-pointer hover:text-(--shop-text-main) transition">
            Blog
          </span>
          <span className="cursor-pointer hover:text-(--shop-text-main) transition">
            Contact
          </span>
        </nav>

        {/* Utility Quick Links */}
        <div className="flex items-center gap-6 text-[11px] font-bold tracking-widest uppercase">
          <span className="cursor-pointer text-(--shop-text-muted) hover:text-(--shop-text-main) transition hidden sm:inline">
            Wishlist (0)
          </span>
          <button className="text-(--shop-text-muted) hover:text-(--shop-text-main) transition flex items-center gap-1">
            Cart ({cartCount})
          </button>
          <span className="cursor-pointer text-base opacity-80 hover:opacity-100 transition">
            🔍
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
