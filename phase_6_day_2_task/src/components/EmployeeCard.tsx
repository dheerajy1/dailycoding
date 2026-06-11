import type { Employee } from "../data/employees";

type EmployeeCardProps = {
  employee: Employee;
  onLike: (id: number) => void;
  onToggleStatus: (id: number) => void;
};

function EmployeeCard({ employee, onLike, onToggleStatus }: EmployeeCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <img
        src={employee.image}
        alt={employee.name}
        className="mb-4 h-24 w-24 rounded-full object-cover"
      />

      <h3 className="text-xl font-bold">{employee.name}</h3>

      <p className="text-slate-600">{employee.role}</p>

      <p className="mt-2 font-semibold">{employee.salary}</p>

      <div className="mt-3">
        <span
          className={`rounded-full px-3 py-1 text-sm ${
            employee.active
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {employee.active ? "Active" : "Inactive"}
        </span>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => onLike(employee.id)}
          className="rounded-lg bg-pink-600 px-4 py-2 text-white"
        >
          ❤️ {employee.likes}
        </button>

        <button
          onClick={() => onToggleStatus(employee.id)}
          className="rounded-lg bg-slate-800 px-4 py-2 text-white"
        >
          Toggle Status
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;
