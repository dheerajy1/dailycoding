// ==========================================
// 1. GLOBAL STATE & DATA STORAGE
// ==========================================

// Array to store our student data objects
const studentRecords = [];

// ==========================================
// 2. CORE LOGIC FUNCTIONS
// ==========================================

/**
 * Determines the grade based on marks obtained
 * @param {number} marks - Student score from 0 - 100
 * @returns {string} Letter grade
 */
function calculateGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 75) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else {
    return "Fail";
  }
}

/**
 * Checks if the student passed or failed based on grade status
 * @param {string} grade - The calculated letter grade
 * @returns {boolean} True if passed, false if failed
 */
function evaluatePassStatus(grade) {
  return grade !== "Fail";
}

/**
 * Processes data logs and outputs full student catalog to console using loops
 */
function logToConsole() {
  console.clear();
  console.log(
    "%c=== STUDENT DATA PERFORMANCE LOGS ===",
    "color: #4f46e5; font-weight: bold; font-size: 14px;",
  );

  // Using a standard loop to process and print every record
  for (let i = 0; i < studentRecords.length; i++) {
    const student = studentRecords[i];
    console.log(
      `Record #${i + 1} | Name: ${student.name} | Marks: ${student.marks} | Grade: ${student.grade} | Attendance: ${student.attendance}% | Status: ${student.isPassed ? "PASSED" : "FAILED"}`,
    );
  }
}

// ==========================================
// 3. UI RENDERING & DOM SYSTEMS
// ==========================================

/**
 * Refreshes the HTML view using loops to append active student records
 */
function updateUI() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = ""; // Clear prior elements

  // Using a loop to append rows dynamically into the UI table
  for (let i = 0; i < studentRecords.length; i++) {
    const student = studentRecords[i];
    const row = document.createElement("tr");

    // Setup status badge components
    const badgeClass = student.isPassed ? "status-pass" : "status-fail";
    const badgeText = student.isPassed ? "Pass" : "Fail";

    row.innerHTML = `
            <td><strong>${student.name}</strong></td>
            <td>${student.marks}</td>
            <td>${student.grade}</td>
            <td>${student.attendance}%</td>
            <td><span class="status-badge ${badgeClass}">${badgeText}</span></td>
        `;
    tableBody.appendChild(row);
  }
}

// ==========================================
// 4. EVENT LISTENERS & INITIALIZATION
// ==========================================

document
  .getElementById("studentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form submission reloading

    // Capturing interactive DOM elements
    const nameInput = document.getElementById("studentName");
    const marksInput = document.getElementById("studentMarks");
    const attendanceInput = document.getElementById("studentAttendance");

    // Extracting user values with appropriate explicit data types
    const studentName = nameInput.value.trim();
    const studentMarks = parseInt(marksInput.value, 10);
    const studentAttendance = parseInt(attendanceInput.value, 10);

    // Run core grading algorithm calculation pipelines
    const finalGrade = calculateGrade(studentMarks);
    const passStatus = evaluatePassStatus(finalGrade);

    // Bundle student information into a record object block
    const studentObject = {
      name: studentName,
      marks: studentMarks,
      grade: finalGrade,
      attendance: studentAttendance,
      isPassed: passStatus,
    };

    // Store record object within the data collection array
    studentRecords.push(studentObject);

    // Refresh outputs across both the structural console view and visual browser canvas
    updateUI();
    logToConsole();

    // Reset input fields cleanly for the user
    this.reset();
    nameInput.focus();
  });
