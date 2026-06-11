import { useState } from "react";
import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import ApiUsers from "./components/ApiUsers";
import type { Student } from "./types/student";

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  const addStudent = (student: Student) => {
    setStudents((current) => [...current, student]);
  };

  const deleteStudent = (id: number) => {
    setStudents((current) => current.filter((student) => student.id !== id));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-cyan-100">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="absolute right-20 top-40 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute bottom-20 left-1/2 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />
      </div>

      <Navbar />

      <main className="mx-auto max-w-7xl p-6">
        <div className="mb-6 rounded-2xl border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur-md">
          <h2 className="text-3xl font-bold text-slate-900">
            Student Dashboard
          </h2>

          <p className="mt-2 text-slate-600">
            Total Students: {students.length}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <StudentForm onAddStudent={addStudent} />
          <ApiUsers />
        </div>

        <div className="mt-6">
          <StudentTable students={students} onDeleteStudent={deleteStudent} />
        </div>
      </main>
    </div>
  );
}

export default App;
