const STUDENTS_KEY = "students_db";

export function getStudents() {
  try {
    const data = localStorage.getItem(STUDENTS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error reading students:", error);
    return [];
  }
}

export function saveStudents(students) {
  try {
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
  } catch (error) {
    console.error("Error saving students:", error);
  }
}

export function addStudent(student) {
  const students = getStudents();
  students.push(student);
  saveStudents(students);
}

export function updateStudent(updatedStudent) {
  let students = getStudents();

  students = students.map((student) =>
    student.id === updatedStudent.id ? updatedStudent : student
  );

  saveStudents(students);
}

export function deleteStudent(id) {
  let students = getStudents();

  students = students.filter((student) => student.id !== id);

  saveStudents(students);
}