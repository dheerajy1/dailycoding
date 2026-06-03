import { RECENT_ORDERS } from "./data";
import { cn } from "../../../../lib/utils";

const AdminOrders = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar bg-(--admin-bg-main)">
      {/* 1. Module Header */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-(--admin-text-main)">
          Ledger Transaction Hub
        </h2>
        <p className="text-xs mt-0.5 text-(--admin-text-muted)">
          Real-time tracking of platform invoices, recurring account
          collections, and network ledger settlement codes.
        </p>
      </div>

      {/* 2. Comprehensive Ledger Sheet Table */}
      <div className="border border-(--admin-border-color) bg-(--admin-bg-surface) rounded-(--admin-radius-main) overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead className="bg-(--admin-bg-main) text-(--admin-text-muted)">
              <tr>
                <th className="p-4 font-semibold">Ledger Route Reference</th>
                <th className="p-4 font-semibold">Customer Account / Email</th>
                <th className="p-4 font-semibold">Settlement Date</th>
                <th className="p-4 font-semibold">Gross Receipts</th>
                <th className="p-4 font-semibold text-center">
                  Verification Checkpoint
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--admin-border-color)">
              {RECENT_ORDERS.map((order) => {
                const isPaid = order.status === "Paid";
                const isPending = order.status === "Pending";

                return (
                  <tr
                    key={order.id}
                    className="hover:bg-(--admin-bg-main) transition"
                  >
                    <td className="p-4 font-mono font-medium text-(--admin-text-main)">
                      {order.id}-LNX
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

export default AdminOrders;
