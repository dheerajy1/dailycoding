import { useEffect, useState } from "react";

type ApiUser = {
  id: number;
  name: string;
  email: string;
};

function ApiUsers() {
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative h-130 overflow-hidden rounded-2xl border border-white/50 bg-white/60 p-6 shadow-xl backdrop-blur-md">
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        API Users
      </h2>

      {loading ? (
        <div className="flex h-80 items-center justify-center">
          <p className="text-slate-600">Loading users...</p>
        </div>
      ) : (
        <div className="h-105 space-y-3 overflow-y-auto pr-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="rounded-xl border border-white/40 bg-white/60 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-semibold text-slate-900">
                {user.name}
              </h3>

              <p className="text-slate-600">
                {user.email}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 rounded-b-2xl bg-linear-to-t from-white via-white to-transparent" />
    </div>
  );
}

export default ApiUsers;