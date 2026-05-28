function checkProjectDeadlines() {
  if (!("Notification" in window)) return;

  // Request permission if not already granted or denied
  if (Notification.permission === "default") {
    Notification.requestPermission();
  }

  // Only proceed if permission is explicitly granted
  if (Notification.permission !== "granted") return;

  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  // Track notified projects in sessionStorage so we don't spam on every page load
  let notifiedProjects =
    JSON.parse(sessionStorage.getItem("notifiedProjects")) || [];

  projects.forEach((project) => {
    if (project.status === "completed") return;

    let deadlineDate = new Date(project.deadline);
    deadlineDate.setHours(0, 0, 0, 0);

    let timeDiff = deadlineDate.getTime() - today.getTime();
    let daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // Notify if deadline is within 2 days or overdue, and hasn't been notified this session
    if (daysDiff <= 2 && !notifiedProjects.includes(project.name)) {
      let message =
        daysDiff < 0
          ? `OVERDUE: ${project.name} is past its deadline!`
          : daysDiff === 0
            ? `DUE TODAY: ${project.name} is due today!`
            : `REMINDER: ${project.name} is due in ${daysDiff} day(s).`;

      new Notification("Project Reminder", { body: message });

      notifiedProjects.push(project.name);
    }
  });

  sessionStorage.setItem("notifiedProjects", JSON.stringify(notifiedProjects));
}

window.addEventListener("DOMContentLoaded", () => {
  checkProjectDeadlines();
});
