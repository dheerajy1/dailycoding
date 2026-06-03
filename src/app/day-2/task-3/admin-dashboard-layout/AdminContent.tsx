import { KPI_DATA, RECENT_ORDERS, ANALYTICS_TREND } from "./data";
import { cn } from "../../../../lib/utils";

const AdminContent = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar bg-(--admin-bg-main)">
      {/* 1. Header Segment Title Blocks */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-(--admin-text-main)">
          Dashboard Overview
        </h2>
        <p className="text-xs mt-0.5 text-(--admin-text-muted)">
          Monitor operational metric performance variables and live consumer
          tracking logs.
        </p>
      </div>

      {/* 2. KPI Cards Grid Layout Engine */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPI_DATA.map((card) => (
          <div
            key={card.id}
            className="p-5 border border-(--admin-border-color) bg-(--admin-bg-surface) rounded-(--admin-radius-main) transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-(--admin-text-muted)">
                {card.title}
              </span>
              <span className="text-xl p-1.5 bg-slate-50 rounded-lg">
                {card.icon}
              </span>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold tracking-tight text-(--admin-text-main)">
                {card.value}
              </span>
              <span
                className={cn(
                  "text-[11px] font-bold px-2 py-0.5 rounded-full",
                  card.isPositive
                    ? "bg-(--admin-bg-success-badge) text-(--admin-color-success)"
                    : "bg-(--admin-bg-danger-badge) text-(--admin-color-danger)",
                )}
              >
                {card.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Analytics Chart Presentation Panel Container */}
      <div className="p-5 border border-(--admin-border-color) bg-(--admin-bg-surface) rounded-(--admin-radius-main)">
        <div className="mb-4">
          <h3 className="text-sm font-bold text-(--admin-text-main)">
            SaaS Revenue Velocity Trend
          </h3>
          <p className="text-[11px] text-(--admin-text-muted)">
            Monthly timeline progression distribution matrix.
          </p>
        </div>

        {/* CSS Chart Bar Graph Interface Simulator */}
        <div className="h-48 flex items-end justify-between gap-3 pt-6 px-2 border-b border-(--admin-border-color)">
          {ANALYTICS_TREND.map((point, idx) => {
            const percentage = (point.revenue / 130000) * 100;
            return (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center justify-end gap-2 h-full group"
              >
                <div
                  className="w-full relative rounded-t-sm transition-all duration-300 hover:opacity-80 bg-(--admin-brand-accent)"
                  style={{ height: `${Math.max(percentage, 8)}%` }}
                >
                  {/* Interactive Micro Tooltip Float */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow-md transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                    ₹{point.revenue.toLocaleString()}
                  </div>
                </div>
                <span className="text-[10px] font-medium block h-4 shrink-0 mt-1 text-(--admin-text-muted)">
                  {point.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Responsive Database Orders Micro-Grid Table Matrix */}
      <div className="border border-(--admin-border-color) bg-(--admin-bg-surface) rounded-(--admin-radius-main) overflow-hidden">
        <div className="p-5 border-b border-(--admin-border-color)">
          <h3 className="text-sm font-bold text-(--admin-text-main)">
            Recent Operational Invoices
          </h3>
          <p className="text-[11px] text-(--admin-text-muted)">
            Latest continuous payment requests matched through network ledger
            routers.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead className="bg-(--admin-bg-main) text-(--admin-text-muted)">
              <tr>
                <th className="p-4 font-semibold">Transaction ID</th>
                <th className="p-4 font-semibold">Customer</th>
                <th className="p-4 font-semibold">Billing Date</th>
                <th className="p-4 font-semibold">Total Amount</th>
                <th className="p-4 font-semibold text-center">Status Badge</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--admin-border-color)">
              {RECENT_ORDERS.map((order) => {
                const isPaid = order.status === "Paid";
                const isPending = order.status === "Pending";

                return (
                  <tr
                    key={order.id}
                    className="hover:bg-slate-50/50 transition"
                  >
                    <td className="p-4 font-mono font-medium text-(--admin-text-main)">
                      {order.id}
                    </td>
                    <td className="p-4">
                      <div className="font-semibold text-(--admin-text-main)">
                        {order.customer}
                      </div>
                      <div className="text-[10px] text-(--admin-text-muted)">
                        {order.email}
                      </div>
                    </td>
                    <td className="p-4 text-(--admin-text-muted)">
                      {order.date}
                    </td>
                    <td className="p-4 font-bold text-(--admin-text-main)">
                      {order.amount}
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className={cn(
                          "inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase",
                          isPaid &&
                            "bg-(--admin-bg-success-badge) text-(--admin-color-success)",
                          isPending &&
                            "bg-(--admin-bg-warning-badge) text-(--admin-color-warning)",
                          !isPaid &&
                            !isPending &&
                            "bg-(--admin-bg-danger-badge) text-(--admin-color-danger)",
                        )}
                      >
                        {order.status}
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

export default AdminContent;
