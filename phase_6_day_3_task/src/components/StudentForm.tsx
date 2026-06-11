import { useState } from "react";
import type { Student } from "../types/student";

type StudentFormProps = {
  onAddStudent: (student: Student) => void;
};

function StudentForm({ onAddStudent }: StudentFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !course || !mobile) {
      setError("All fields are required");
      return;
    }

    onAddStudent({
      id: Date.now(),
      name,
      email,
      course,
      mobile,
    });

    setName("");
    setEmail("");
    setCourse("");
    setMobile("");
    setError("");
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/50 bg-white/60 p-6 shadow-xl backdrop-blur-md">
      <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-blue-400/10 blur-3xl" />

      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        Student Registration
      </h2>

      {error && (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-100/80 p-3 text-red-700 backdrop-blur-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student Name"
          className="w-full rounded-xl border border-white/40 bg-white/60 p-3 backdrop-blur-sm outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full rounded-xl border border-white/40 bg-white/60 p-3 backdrop-blur-sm outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Course"
          className="w-full rounded-xl border border-white/40 bg-white/60 p-3 backdrop-blur-sm outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile Number"
          className="w-full rounded-xl border border-white/40 bg-white/60 p-3 backdrop-blur-sm outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
