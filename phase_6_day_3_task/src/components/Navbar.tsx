function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            Student Management System
          </h1>

          <p className="text-xs text-slate-500">
            React • Forms • useEffect • API Integration
          </p>
        </div>

        <span className="rounded-full border border-blue-200 bg-blue-100/70 px-4 py-2 text-sm font-medium text-blue-700 backdrop-blur-sm">
          Phase 6 - Day 3
        </span>
      </div>
    </header>
  );
}

export default Navbar;
