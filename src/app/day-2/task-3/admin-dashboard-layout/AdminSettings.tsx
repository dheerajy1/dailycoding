const AdminSettings = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar bg-(--admin-bg-main)">
      {/* 1. Module Header */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-(--admin-text-main)">
          Platform Core Settings
        </h2>
        <p className="text-xs mt-0.5 text-(--admin-text-muted)">
          Configure environment variables, infrastructure webhook links, and
          secure token engines.
        </p>
      </div>

      {/* 2. Settings Control Panels */}
      <div className="grid grid-cols-1 gap-6 max-w-4xl">
        {/* API Authentication Node Card */}
        <div className="p-5 border border-(--admin-border-color) bg-(--admin-bg-surface) rounded-(--admin-radius-main) space-y-4">
          <div>
            <h3 className="text-sm font-bold text-(--admin-text-main)">
              API Routing Endpoints
            </h3>
            <p className="text-[11px] text-(--admin-text-muted)">
              Production environment pipeline routing configurations.
            </p>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-(--admin-text-muted) uppercase tracking-wider">
                Production Webhook URL
              </label>
              <input
                type="text"
                readOnly
                value="https://api.apexsaas.io/v1/endpoints/hooks/live_ledger_receiver"
                className="w-full text-xs font-mono p-3 bg-(--admin-bg-main) border border-(--admin-border-color) rounded-lg text-(--admin-text-main) outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-(--admin-text-muted) uppercase tracking-wider">
                Encryption Public Key Reference
              </label>
              <input
                type="password"
                readOnly
                value="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                className="w-full text-xs font-mono p-3 bg-(--admin-bg-main) border border-(--admin-border-color) rounded-lg text-(--admin-text-muted) outline-none"
              />
            </div>
          </div>
        </div>

        {/* Operational Toggles Card */}
        <div className="p-5 border border-(--admin-border-color) bg-(--admin-bg-surface) rounded-(--admin-radius-main) space-y-4">
          <div>
            <h3 className="text-sm font-bold text-(--admin-text-main)">
              System Level Directives
            </h3>
            <p className="text-[11px] text-(--admin-text-muted)">
              Toggle automated live performance processes.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Automated Daily Ledger Audits",
                status: "Enabled",
                active: true,
              },
              {
                title: "S3 Telemetry Log Sync",
                status: "Enabled",
                active: true,
              },
              {
                title: "Slack Webhook Notifications Failover",
                status: "Disabled",
                active: false,
              },
            ].map((toggle, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-(--admin-bg-main) rounded-lg border border-(--admin-border-color)"
              >
                <div>
                  <p className="text-xs font-semibold text-(--admin-text-main)">
                    {toggle.title}
                  </p>
                  <p className="text-[10px] text-(--admin-text-muted)">
                    Active system routing parameter.
                  </p>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase ${
                    toggle.active
                      ? "bg-(--admin-bg-success-badge) text-(--admin-color-success)"
                      : "bg-(--admin-bg-danger-badge) text-(--admin-color-danger)"
                  }`}
                >
                  {toggle.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
