function Navbar() {
  return (
    <header className="h-16 border-b bg-white">
      <div className="flex h-full items-center justify-between px-6">
        <h1 className="text-xl font-bold">Employee Dashboard</h1>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-slate-300" />
          <span className="font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
