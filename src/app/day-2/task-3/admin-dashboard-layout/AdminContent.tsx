import { KPI_DATA, RECENT_ORDERS } from "./data";

const AdminContent = () => {
  return (
    <section className="p-4 md:p-8 flex-1 overflow-y-auto bg-(--admin-bg-main)">
      {/* Hero Welcome Banner */}
      <div className="bg-linear-to-r from-(--admin-accent-gradient-start) to-(--admin-accent-gradient-end) rounded-xl p-6 md:p-8 text-white shadow-md mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          Welcome back, Admin! 👋
        </h1>
        <p className="mt-2 text-(--admin-text-hero-muted) opacity-90">
          Here is what's happening with your platform today. You have 12 pending
          orders that need your attention.
        </p>
      </div>

      {/* Dashboard Section Heading */}
      <div>
        <h2 className="text-2xl font-bold text-(--admin-text-main)">
          Analytics Dashboard
        </h2>
        <p className="text-(--admin-text-muted) mt-1">
          Overview of system performance
        </p>
      </div>

      {/* Looped KPI Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {KPI_DATA.map((card) => (
          <div
            key={card.id}
            className="bg-(--admin-bg-surface) border border-(--admin-border-main) p-5 rounded-lg shadow-sm"
          >
            <h3 className="text-(--admin-text-muted) text-sm font-medium uppercase tracking-wider">
              {card.title}
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-(--admin-text-main) mt-2">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Orders Data Table Container */}
      <div className="mt-10 bg-(--admin-bg-surface) border border-(--admin-border-main) rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-(--admin-border-main) bg-(--admin-bg-table-header)">
          <h2 className="font-semibold text-(--admin-text-main)">
            Recent Orders
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="text-(--admin-text-muted) bg-(--admin-bg-table-header)">
              <tr>
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Amount</th>
              </tr>
            </thead>

            <tbody className="text-(--admin-text-main) divide-y divide-(--admin-border-main)">
              {RECENT_ORDERS.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-(--admin-bg-main) transition-colors"
                >
                  <td className="p-4">{order.id}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        order.status === "Paid"
                          ? "bg-(--admin-status-paid-bg) text-(--admin-status-paid-text)"
                          : "bg-(--admin-status-pending-bg) text-(--admin-status-pending-text)"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AdminContent;
