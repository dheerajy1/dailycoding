type NavbarProps = {
  logo: string;
};

const Navbar = ({ logo }: NavbarProps) => {
  return (
    <header className="bg-(--bg-primary) border-b border-(--border-main)">
      <div className="max-w-(--container) mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button>
          <a href="/" className="hover:text-(--text-main) transition">
            <h1 className="text-(--text-main) text-xl font-bold">{logo}</h1>
          </a>
        </button>

        {/* Nav */}
        <nav className="flex items-center gap-8 text-(--text-muted)">
          <button>
            <a href="/" className="hover:text-(--text-main) transition">
              Home
            </a>
          </button>
          <button>
            <a
              href="https://www.youtube.com/"
              className="hover:text-(--text-main) transition"
            >
              Features
            </a>
          </button>
          <button>
            <a className="hover:text-(--text-main) transition">Docs</a>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
