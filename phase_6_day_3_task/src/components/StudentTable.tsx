import type { Student } from "../types/student";

type StudentTableProps = {
  students: Student[];
  onDeleteStudent: (id: number) => void;
};

function StudentTable({ students, onDeleteStudent }: StudentTableProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/50 bg-white/60 p-6 shadow-xl backdrop-blur-md">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-purple-400/10 blur-3xl" />

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Student List</h2>

      {students.length === 0 ? (
        <div className="rounded-xl border border-yellow-200 bg-yellow-100/80 p-4 text-yellow-800 backdrop-blur-sm">
          No students registered yet.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Course</th>
                <th className="p-4">Mobile</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-slate-100 transition-colors hover:bg-white/40"
                >
                  <td className="p-4 font-medium">{student.name}</td>

                  <td className="p-4 text-slate-600">{student.email}</td>

                  <td className="p-4">{student.course}</td>

                  <td className="p-4">{student.mobile}</td>

                  <td className="p-4">
                    <button
                      onClick={() => onDeleteStudent(student.id)}
                      className="rounded-xl bg-red-600 px-4 py-2 text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentTable;
