import { Link } from "react-router-dom";

type NavbarProps = {
  logo: string;
  navLinks: Array<{
    id: number;
    name: string;
    path: string;
  }>;
};

const Navbar = ({ logo, navLinks }: NavbarProps) => {
  return (
    <header className="bg-(--bg-primary) border-b border-(--border-main)">
      <div className="max-w-(--container) mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="hover:text-(--text-main) transition">
          <h1 className="text-(--text-main) text-xl font-bold">{logo}</h1>
        </Link>

        <nav className="flex items-center gap-8 text-(--text-muted)">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="hover:text-(--text-main) transition"
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
