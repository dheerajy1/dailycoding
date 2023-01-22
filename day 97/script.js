const toggleButton = document.getElementsByClassName("toggle-button")[0];

const toggleButtonBar = document.getElementsByClassName("bar")[0];

const navbarlinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarlinks.classList.toggle("active");
  toggleButtonBar.classList.toggle('active')
  toggleButton.classList.toggle('active')
});
