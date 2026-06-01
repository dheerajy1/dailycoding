import { Link } from "react-router-dom";

type NavbarProps = {
  logo: string;
  navLinks: Array<{ id: number; name: string; path: string }>;
};

const Navbar = ({ logo, navLinks }: NavbarProps) => {
  return (
    <header className="bg-(--bg-primary) border-b border-(--border-main) px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-(--accent-primary)">
          {logo}
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="text-sm font-medium text-(--text-muted) hover:text-(--accent-primary) transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
      </div>
    </header>
  );
};

export default Navbar;