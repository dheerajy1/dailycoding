function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-slate-900">
          TechNova
        </h1>

        <ul className="hidden gap-8 font-medium md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        <button className="rounded-lg bg-slate-900 px-5 py-2 text-white">
          Get Quote
        </button>
      </nav>
    </header>
  );
}

export default Navbar;