# Employee & Client Management Dashboard

## Project Overview

This project is a fully featured, responsive Admin Dashboard built using AdminLTE 4 and Bootstrap 5. Designed as a comprehensive management tool, it handles employee rosters, client details, and project tracking completely on the client side.

By leveraging native HTML5 APIs (LocalStorage, SessionStorage, Geolocation, Notifications, Clipboard) and focusing on modern UI/UX principles, this dashboard serves as a robust, interactive, and accessible application without the need for a backend server.

---

## Technologies Used

- **HTML5 & CSS3** (Semantic structure and custom styling)
- **Bootstrap 5** (Responsive grid and UI components)
- **AdminLTE 4** (Dashboard layout and styling)
- **Vanilla JavaScript** (ES6+)
- **HTML5 Web APIs:**
  - LocalStorage API
  - SessionStorage API
  - Geolocation API
  - Notification API
  - Clipboard API

---

## Comprehensive Feature List

### 1. Global UI & Navigation

- **Dynamic Sidebar:** Responsive sidebar with multi-level dropdowns.
- **Sidebar State Persistence:** LocalStorage remembers if the user left the sidebar collapsed or expanded across page reloads.
- **Active Tab Persistence:** SessionStorage tracks the current page and automatically highlights the correct active tab and expands parent menus in the sidebar.
- **Global Theme Toggle (Dark/Light Mode):** Seamlessly switches between light and dark themes using `data-bs-theme`. The preference is saved in LocalStorage and applied instantly on page load to prevent UI flashing.
- **Global Search:** Allows users to filter statistics cards on the main dashboard directly from the top navbar.

### 2. Dashboard Home

- **Live Statistics Cards:** Displays real-time counts of Employees, Clients, and Projects fetched directly from LocalStorage.
- **Active Sessions:** Tracks active user sessions using SessionStorage.
- **Live Location & Map Integration:** Automatically detects the user's current State, Country, and Coordinates using the Geolocation API, and dynamically drops a live pin of your location on the interactive World Map.
- **Charts & Data Visualization:** Integrated ApexCharts and jsVectorMap for visual data representation (Revenue, Visitors, Sales).

### 3. Employee Management

- **Add Employee:** Form validation and creation of new employees saved to LocalStorage.
- **Advanced Data Table:**
  - **Live Search:** Filter employees by typing their name, email, or ID.
  - **Role Filter:** Dropdown to filter the table specifically by employee roles (e.g., Developer, Manager).
  - **Dynamic Sorting:** Clickable table headers to sort employees alphabetically by Name.
  - **Pagination:** Limits rows per page with "Next" and "Previous" controls.
- **Action Buttons:**
  - **Copy ID:** Uses the Clipboard API to instantly copy an employee's unique ID.
  - **View:** Opens a Bootstrap Modal displaying full employee details.
  - **Delete:** Removes the employee from LocalStorage and dynamically updates the table.

### 4. Client Management

- **Client Roster:** Add, edit, and view client details.
- **Search & Filter:** Search through clients and filter them based on their current status.
- **Project Assignment:** Dedicated interface to assign new projects to existing clients.

### 5. Project Tracking & Automation

- **Project Overview:** Card-based layout showing project names, clients, deadlines, and visual progress bars.
- **Progress Tracker (Table View):** Detailed tabular view of all projects.
- **Edit Functionality:** Interactive modal to update a project's name, progress percentage, status, and deadline directly from the tracker.
- **Automated Deadline Reminders:** The application checks project deadlines against the current date on page load. It uses the native **Browser Notification API** to alert the user if a project is due today, overdue, or due within 2 days (deduplicated via SessionStorage).

### 6. Settings & Profile

- **Profile Management:** Update user details (Name, Email) saved locally.
- **Dynamic Activity Timeline:** A custom timeline on the profile page that logs user actions (e.g., "Profile Updated", "Theme Changed") with timestamps and icons, limited to the 10 most recent activities to save storage space.
- **Seed Data Panel:** A dedicated page to instantly populate the dashboard with dummy data or clear all existing local data for testing purposes.

### 7. Accessibility & SEO

- **WCAG Accessibility (a11y):** Comprehensive use of `aria-labels`, `aria-pressed`, and `role` attributes across navbar items, theme toggles, search inputs, and sidebar menus to ensure screen-reader compatibility.
- **SEO & Meta Tags:** Fully optimized `<head>` tags across all subpages, including Title, Description, Keywords, Open Graph tags, and Color Scheme declarations.

---

## Deep Dive: HTML5 APIs Implemented

1. **LocalStorage API:** Acts as the primary database for the application. It stores Arrays of Objects for Employees, Clients, Projects, and Timeline Activities. It also saves user preferences like Dark Mode and Sidebar Collapse state.
2. **SessionStorage API:** Used for ephemeral data, such as tracking if the current session is active, persisting the currently viewed sidebar tab across navigation, and tracking which project notifications have already been triggered during the session.
3. **Geolocation API:** Triggers on the dashboard home load, requests user permission, fetches coordinates, and reverse-geocodes them (via OpenStreetMap) to display the user's location inside the Active Sessions card.
4. **Notification API:** Requests system-level notification permissions on load. Used to welcome the user to the dashboard and, most importantly, to push native OS alerts for critical project deadlines.
5. **Clipboard API:** Attached to a UI button in the Employee table, allowing users to copy an Employee ID to their system clipboard with a single click and an alert confirmation.

---

## Responsive Design

The dashboard is built with a mobile-first approach using Bootstrap 5's flexbox grid. It adapts flawlessly to:

- Mobile devices (collapsing sidebar, stacked cards)
- Tablets
- Laptops & Desktop monitors

---

## Folder Structure

```text
WEB_KT_PHASE_1_TASK/
├── index.html                  # Main Dashboard
├── README.md                   # Project Documentation
├── css/                        # AdminLTE & Custom Styles
├── js/                         # AdminLTE core scripts
├── custom/
│   └── js/
│       ├── theme.js            # Global logic (Theme, Sidebar, Deadlines)
│       └── script.js           # Shared utilities
├── assets/
│   └── img/                    # Avatars and logos
└── pages/                      # Application Subpages
    ├── employees/
    │   ├── list.html           # Employee Data Table
    │   └── add.html            # Employee Creation Form
    ├── clients/
    │   ├── list.html           # Client Roster
    │   └── assign.html         # Project Assignment
    ├── projects/
    │   ├── overview.html       # Visual Project Cards
    │   └── progress.html       # Tabular Tracker with Edit Modal
    └── settings/
        ├── profile.html        # Profile & Dynamic Timeline
        ├── theme.html          # Theme Preferences
        └── seed.html           # Dummy Data Loader

```

---

## Deployment

The project is fully client-side and requires no build steps or backend configuration. It is ready to be deployed instantly as a static site via:

- **Netlify**
- **Vercel**
- **GitHub Pages**

---

**Author:** Manikanta and Team
