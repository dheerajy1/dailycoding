function Sidebar() {
  return (
    <aside className="hidden min-h-[calc(100vh-64px)] w-64 bg-slate-900 p-6 text-white md:block">
      <h2 className="mb-8 text-lg font-semibold">Navigation</h2>

      <ul className="space-y-4">
        <li className="rounded-lg bg-slate-800 p-3">Dashboard</li>

        <li className="p-3">Employees</li>

        <li className="p-3">Projects</li>

        <li className="p-3">Reports</li>

        <li className="p-3">Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
