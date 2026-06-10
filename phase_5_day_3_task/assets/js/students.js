import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./storage.js";

export function createStudent(name, email, course) {
  try {
    if (!name || !email || !course) {
      throw new Error("All fields are required");
    }

    const student = {
      id: Date.now(),
      name,
      email,
      course,
    };

    addStudent(student);

    return {
      success: true,
      message: "Student added successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}

export function getAllStudents() {
  return getStudents();
}

export function editStudent(updatedStudent) {
  try {
    if (!updatedStudent.id) {
      throw new Error("Student ID missing");
    }

    updateStudent(updatedStudent);

    return {
      success: true,
      message: "Student updated successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}

export function removeStudent(id) {
  try {
    if (!id) {
      throw new Error("Student ID required");
    }

    deleteStudent(id);

    return {
      success: true,
      message: "Student deleted successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}