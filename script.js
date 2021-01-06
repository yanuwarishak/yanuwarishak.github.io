const toggleSwitch = document.querySelector('input[type="checkbox"]');

const welcomeCard = document.getElementById("welcome-card");

// Getting element for specific theme change
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const textBox = document.getElementById("text-box");
const imageContainer = document.getElementsByClassName("image-container");

// Function for Dark Mode styles
function darkMode() {
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
}

function lightMode() {
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
}

// Play pause function
function toggleAnimation() {
  if (welcomeCard.classList.contains("paused")) {
    welcomeCard.classList.remove("paused");
  } else {
    welcomeCard.classList.add("paused");
  }
}

// Function to Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage (localStorage) for Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}

// currentTheme ? document.documentElement.setAttribute("data-theme", currentTheme) : null;
