import { ANALYTICS_TREND } from "./data";

const AdminAnalytics = () => {
  // Mock data for resource tracking using layout architecture
  const resourceMetrics = [
    {
      name: "API Gateway Traffic",
      load: "78%",
      status: "Optimal",
      colorClass: "text-(--admin-color-success)",
    },
    {
      name: "Database Query Latency",
      load: "92%",
      status: "Warning",
      colorClass: "text-(--admin-color-warning)",
    },
    {
      name: "S3 Compute Clusters",
      load: "41%",
      status: "Optimal",
      colorClass: "text-(--admin-color-success)",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar bg-(--admin-bg-main)">
      {/* 1. Header Information Block */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-(--admin-text-main)">
          Analytics Deep Dive
        </h2>
        <p className="text-xs mt-0.5 text-(--admin-text-muted)">
          Granular metrics tracking database performance vectors and compute
          cluster states.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 2. Historic Run-Rate Performance Graph Compartment */}
        <div className="lg:col-span-2 p-5 border border-(--admin-border-color) bg-(--admin-bg-surface) rounded-(--admin-radius-main)">
          <div className="mb-6">
            <h3 className="text-sm font-bold text-(--admin-text-main)">
              Run-Rate Performance Distribution
            </h3>
            <p className="text-[11px] text-(--admin-text-muted)">
              Comparative historical tracking logs mapped by fiscal units.
            </p>
          </div>

          <div className="w-full flex flex-col justify-end">
            <div className="h-44 w-full flex items-end justify-between gap-2 px-2 border-b border-(--admin-border-color)">
              {ANALYTICS_TREND.map((point, idx) => {
                // Safe inverse scaling calculation loop
                const percentage = Math.max((point.revenue / 130000) * 100, 12);

                return (
                  <div
                    key={idx}
                    className="flex-1 h-full flex flex-col justify-end items-center relative group"
                  >
                    {/* Secondary alternate brand accent display bar tracking */}
                    <div
                      className="w-full bg-(--admin-brand-accent-hover) rounded-t-xs transition-all duration-300 hover:opacity-90 relative cursor-pointer"
                      style={{ height: `${percentage}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow-md transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                        ₹
                        {(point.revenue * 1.15).toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full flex justify-between gap-2 px-2 mt-2">
              {ANALYTICS_TREND.map((point, idx) => (
                <div key={idx} className="flex-1 text-center">
                  <span className="text-[10px] font-medium block text-(--admin-text-muted)">
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. System Infrastructure Load Monitor */}
        <div className="p-5 border border-(--admin-border-color) bg-(--admin-bg-surface) rounded-(--admin-radius-main) flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-(--admin-text-main)">
              Infrastructure Run-Load
            </h3>
            <p className="text-[11px] text-(--admin-text-muted) mb-4">
              Real-time operational status of active framework instances.
            </p>
          </div>

          <div className="flex-1 space-y-4 justify-center flex flex-col">
            {resourceMetrics.map((metric, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-(--admin-text-main)">
                    {metric.name}
                  </span>
                  <span className={`font-bold ${metric.colorClass}`}>
                    {metric.load} ({metric.status})
                  </span>
                </div>
                <div className="h-2 w-full bg-(--admin-bg-main) rounded-full overflow-hidden">
                  <div
                    className="h-full bg-(--admin-brand-accent) rounded-full"
                    style={{ width: metric.load }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
