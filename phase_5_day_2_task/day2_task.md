# Phase 5 Day 2 - Employee Management System

## Project Overview

The Phase 5 Day 2 task focused on implementing Authentication, Error Handling, CRUD Operations, Data Validation, and Dynamic Data Management using JavaScript.

The project developed is an Employee Management System that allows users to log in using demo credentials and perform employee management operations through a dashboard interface.

---

# Folder Structure

```text
phase_5_day_2_task
│
├── index.html
├── day2_task.md
│
└── assets
    │
    ├── css
    │   ├── authentication.css
    │   ├── employee-form.css
    │   ├── employee-table.css
    │   ├── responsive.css
    │   └── style.css
    │
    ├── images
    │
    ├── js
    │   ├── auth.js
    │   └── script.js
    │
    └── pages
        ├── employees.html
        ├── add-employee.html
        └── edit-employee.html
```

---

# Features Implemented

## Authentication Module

### Login Form

Implemented in:

```text
index.html
```

Features:

- Email input field
- Password input field
- Login button
- Validation messages
- Demo credentials section

---

### Demo Credentials

Implemented in:

```text
index.html
authentication.css
```

Credentials:

```text
Email: admin@company.com
Password: admin123
```

Additional Features:

- Copy Email button
- Copy Password button
- Clipboard support
- Visual copy feedback

---

### Email Validation

Implemented in:

```text
auth.js
```

Used JavaScript Regular Expression validation:

```javascript
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

Validation prevents invalid email formats.

---

### Password Validation

Implemented in:

```text
auth.js
```

Checks:

- Required field validation
- Minimum length validation

Example:

```javascript
if (password.length < 6)
```

---

### Login Success & Error Handling

Implemented in:

```text
auth.js
```

Used:

```javascript
try...catch
```

Handles:

- Empty fields
- Invalid email format
- Invalid credentials
- Password length validation

Success and error messages are displayed using Bootstrap alerts.

---

### Authentication Protection

Implemented in:

```text
auth.js
```

Features:

- Login state stored using localStorage
- Protected dashboard pages
- Automatic redirect to login page when not authenticated
- Logout functionality

Storage Example:

```javascript
localStorage.setItem("isLoggedIn", "true");
```

---

# CRUD Operations

## Employee Data Structure

Implemented using:

```javascript
let employees = [];
```

Each employee is stored as an object:

```javascript
{
  (id, name, role, salary, email);
}
```

---

## Add Employee

Implemented in:

```text
add-employee.html
script.js
```

Fields:

- Employee Name
- Role
- Salary
- Email

Validation ensures all fields are completed before saving.

---

## View Employees

Implemented in:

```text
employees.html
script.js
```

Features:

- Dynamic table generation
- Employee listing
- Responsive table layout

Rendered using:

```javascript
renderEmployees();
```

---

## Edit Employee

Implemented in:

```text
edit-employee.html
script.js
```

Features:

- Dedicated edit page
- Auto-load employee information
- Update existing records
- Redirect back to dashboard after saving

Workflow:

```text
Dashboard
↓
Edit Button
↓
Edit Employee Page
↓
Update
↓
Dashboard
```

---

## Delete Employee

Implemented in:

```text
script.js
```

Features:

- Delete button for each employee
- Confirmation dialog before deletion
- Automatic dashboard refresh

Example:

```javascript
confirm("Are you sure?");
```

---

# Local Storage Implementation

Implemented in:

```text
script.js
```

Purpose:

- Persistent employee records
- Persistent authentication state

Storage Keys:

```text
employees
isLoggedIn
selectedEmployeeId
```

Benefits:

- Data remains after page refresh
- Multi-page CRUD support
- Simple client-side storage solution

---

# Dashboard Features

Implemented in:

```text
employees.html
employee-table.css
script.js
```

Features:

### Dashboard Header

Contains:

- Project title
- Add Employee button
- Logout button

---

### Statistics Cards

Displays:

- Total Employees
- Total Salary
- Total Roles
- Total Records

Statistics are updated dynamically using JavaScript.

---

### Employee Records Table

Displays:

- Employee Name
- Role
- Salary
- Email
- Actions

Actions:

- Edit
- Delete

---

# Error Handling

Implemented throughout the project using:

```javascript
try...catch
```

Used in:

- Login processing
- Employee creation
- Employee update
- Employee deletion
- Data retrieval

Purpose:

- Prevent application crashes
- Display meaningful messages
- Improve user experience

---

# Bootstrap Usage

Bootstrap 5 was used for:

- Grid system
- Forms
- Buttons
- Cards
- Alerts
- Tables
- Responsive layouts

Example Components:

```text
Container
Card
Button
Form Control
Alert
Table
Row / Column Grid
```

---

# CSS Architecture

Followed modular CSS structure:

```text
style.css
```

Contains:

- Global variables
- Global styling
- Shared utility classes

```text
authentication.css
```

Contains:

- Login page styling
- Credentials card styling

```text
employee-form.css
```

Contains:

- Add employee page styling
- Edit employee page styling

```text
employee-table.css
```

Contains:

- Dashboard styling
- Statistics cards
- Employee table styling

```text
responsive.css
```

Contains:

- Global responsive adjustments

---

# Concepts Practiced

## Error Handling

Used:

```javascript
try...catch
```

---

## Validation

Used:

- Email validation
- Password validation
- Employee field validation

---

## CRUD Operations

Implemented:

- Create
- Read
- Update
- Delete

---

## Arrays and Objects

Used to:

- Store employee records
- Manage application data

---

## Local Storage

Used to:

- Persist authentication
- Persist employee records

---

# Outcome

Successfully developed a fully functional Employee Management System implementing Authentication, Error Handling, CRUD Operations, Validation, Arrays, Objects, Local Storage, and Bootstrap-based responsive UI while following modular CSS and JavaScript architecture practices.
