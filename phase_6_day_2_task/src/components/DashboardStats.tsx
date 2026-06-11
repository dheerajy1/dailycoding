type DashboardStatsProps = {
  totalEmployees: number;
  activeEmployees: number;
  totalLikes: number;
};

function DashboardStats({
  totalEmployees,
  activeEmployees,
  totalLikes,
}: DashboardStatsProps) {
  return (
    <div className="mb-6 grid gap-4 md:grid-cols-3">
      <div className="rounded-xl bg-white p-6 shadow">
        <p className="text-slate-500">Total Employees</p>
        <h3 className="mt-2 text-3xl font-bold">{totalEmployees}</h3>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <p className="text-slate-500">Active Employees</p>
        <h3 className="mt-2 text-3xl font-bold">{activeEmployees}</h3>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <p className="text-slate-500">Total Likes</p>
        <h3 className="mt-2 text-3xl font-bold">{totalLikes}</h3>
      </div>
    </div>
  );
}

export default DashboardStats;
