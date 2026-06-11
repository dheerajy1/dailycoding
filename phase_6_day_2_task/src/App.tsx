import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardStats from "./components/DashboardStats";
import EmployeeCard from "./components/EmployeeCard";
import { employeesData, type Employee } from "./data/employees";

function App() {
  const [employees, setEmployees] = useState<Employee[]>(employeesData);

  const addEmployee = () => {
    const id = employees.length + 1;

    setEmployees([
      ...employees,
      {
        id,
        name: `Employee ${id}`,
        role: "Software Engineer",
        salary: "$60,000",
        image: `https://i.pravatar.cc/300?img=${10 + id}`,
        active: true,
        likes: 0,
      },
    ]);
  };

  const handleLike = (id: number) => {
    setEmployees((current) =>
      current.map((employee) =>
        employee.id === id
          ? { ...employee, likes: employee.likes + 1 }
          : employee,
      ),
    );
  };

  const toggleStatus = (id: number) => {
    setEmployees((current) =>
      current.map((employee) =>
        employee.id === id
          ? { ...employee, active: !employee.active }
          : employee,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="mb-6 flex justify-end">
            <button
              onClick={addEmployee}
              className="rounded-lg bg-blue-600 px-5 py-3 text-white"
            >
              Add Employee
            </button>
          </div>

          <DashboardStats
            totalEmployees={employees.length}
            activeEmployees={employees.filter((e) => e.active).length}
            totalLikes={employees.reduce(
              (sum, employee) => sum + employee.likes,
              0,
            )}
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {employees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
                onLike={handleLike}
                onToggleStatus={toggleStatus}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
