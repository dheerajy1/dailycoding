// Target UI container references
const userGrid = document.getElementById("user-grid");
const loadingState = document.getElementById("loading-state");
const errorState = document.getElementById("error-state");
const errorMessage = document.getElementById("error-message");

// API Destination Endpoint URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

/**
 * Orchestrates asynchronous fetch operation to parse directory information
 */
async function fetchUserDirectory() {
  // Reveal loading UI panel instantly
  loadingState.classList.remove("d-none");
  userGrid.classList.add("d-none");
  errorState.classList.add("d-none");

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP network malfunction status: ${response.status}`);
    }

    const usersList = await response.json();
    renderUserCards(usersList);
  } catch (error) {
    // Render network error notice to screen
    errorMessage.textContent = `Unable to fetch directory: ${error.message}`;
    errorState.classList.remove("d-none");
  } finally {
    // Dismiss loading animation panel
    loadingState.classList.add("d-none");
  }
}

/**
 * Loops over API records to construct and inject the UI cards
 * @param {Array} users
 */
function renderUserCards(users) {
  // Sanitize grid space before appending child items
  userGrid.innerHTML = "";

  if (users.length === 0) {
    userGrid.innerHTML =
      '<p class="text-center text-muted">No users found in directory.</p>';
    userGrid.classList.remove("d-none");
    return;
  }

  users.forEach((user) => {
    // Construct structural card column wrappers
    const columnWrapper = document.createElement("div");
    columnWrapper.className = "col-12 col-md-6 col-lg-4";

    columnWrapper.innerHTML = `
            <div class="user-card d-flex flex-column justify-content-between">
                <div>
                    <h3 class="h5 fw-bold user-name">${user.name}</h3>
                    <div class="user-detail-item small">
                        <span class="user-detail-label">Email:</span> ${user.email}
                    </div>
                    <div class="user-detail-item small">
                        <span class="user-detail-label">Phone:</span> ${user.phone}
                    </div>
                    <div class="user-detail-item small">
                        <span class="user-detail-label">Company:</span> ${user.company.name}
                    </div>
                </div>
            </div>
        `;

    userGrid.appendChild(columnWrapper);
  });

  // Make the card deck grid visible
  userGrid.classList.remove("d-none");
}

// Fire runtime request once document completes initial bootstrap
document.addEventListener("DOMContentLoaded", fetchUserDirectory);
