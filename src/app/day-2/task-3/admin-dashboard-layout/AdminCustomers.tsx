import { cn } from "../../../../lib/utils";

const AdminCustomers = () => {
  // Static dataset matrix tracking consumer node metrics
  const customerAccounts = [
    {
      name: "Acme Enterprise",
      manager: "Sarah Jenkins",
      plan: "Enterprise Pro",
      accounts: "42 seats",
      status: "Active",
    },
    {
      name: "Sublime Labs",
      manager: "Alex Rivera",
      plan: "Scale Tier",
      accounts: "12 seats",
      status: "Active",
    },
    {
      name: "Krypton Inc",
      manager: "Marcus Vance",
      plan: "Startup Growth",
      accounts: "5 seats",
      status: "Delinquent",
    },
    {
      name: "Nebula Stream",
      manager: "Elena Rostova",
      plan: "Enterprise Pro",
      accounts: "88 seats",
      status: "Active",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar bg-(--admin-bg-main)">
      {/* 1. Module Header */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-(--admin-text-main)">
          Customer Base Matrix
        </h2>
        <p className="text-xs mt-0.5 text-(--admin-text-muted)">
          Manage active organizational tenants, seat provisioning logs, and plan
          compliance states.
        </p>
      </div>

      {/* 2. Directory Table Grid Canvas */}
      <div className="border border-(--admin-border-color) bg-(--admin-bg-surface) rounded-(--admin-radius-main) overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead className="bg-(--admin-bg-main) text-(--admin-text-muted)">
              <tr>
                <th className="p-4 font-semibold">Organization Profile</th>
                <th className="p-4 font-semibold">Account Manager</th>
                <th className="p-4 font-semibold">Provisioned tier</th>
                <th className="p-4 font-semibold">Seat Utilization</th>
                <th className="p-4 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--admin-border-color)">
              {customerAccounts.map((account, idx) => {
                const isActive = account.status === "Active";

                return (
                  <tr
                    key={idx}
                    className="hover:bg-(--admin-bg-main) transition"
                  >
                    <td className="p-4">
                      <div className="font-semibold text-(--admin-text-main)">
                        {account.name}
                      </div>
                    </td>
                    <td className="p-4 text-(--admin-text-main)">
                      {account.manager}
                    </td>
                    <td className="p-4">
                      <span className="font-mono bg-(--admin-bg-main) px-2 py-0.5 rounded border border-(--admin-border-color) text-(--admin-text-main)">
                        {account.plan}
                      </span>
                    </td>
                    <td className="p-4 text-(--admin-text-muted)">
                      {account.accounts}
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className={cn(
                          "inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase",
                          isActive
                            ? "bg-(--admin-bg-success-badge) text-(--admin-color-success)"
                            : "bg-(--admin-bg-danger-badge) text-(--admin-color-danger)",
                        )}
                      >
                        {account.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomers;
