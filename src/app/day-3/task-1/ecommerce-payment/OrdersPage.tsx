import { useEffect, useState } from "react";

interface Order {
  id: string;
  createdAt: string;
  total: number;
  status: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("orders");

    if (!saved) return;

    try {
      setOrders(JSON.parse(saved));
    } catch {
      setOrders([]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">My Orders</h1>

        <p className="text-(--text-muted) mb-8">View your recent purchases</p>

        {orders.length === 0 ? (
          <div className="border border-(--border-main) rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">📦</div>

            <h2 className="text-xl font-semibold">No orders found</h2>

            <p className="text-(--text-muted) mt-2">
              Complete a purchase to see orders here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border border-(--border-main) rounded-xl p-5"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{order.id}</p>

                    <p className="text-sm text-(--text-muted)">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">${order.total.toFixed(2)}</p>

                    <p className="text-green-400 text-sm">{order.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
