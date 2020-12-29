const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Getting element for specific theme change
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const textBox = document.getElementById("text-box");
const imageContainer = document.getElementsByClassName("image-container");

// Function to replace Image Color according to theme
// Sophisticated function to switch between Dark or Light Images
function replaceImageColor(previous, after) {
  for (i = 0; i < imageContainer.length; i++) {
    imageContainer[i].children[1].src = imageContainer[i].children[1].src.replace(previous, after);
  }
}

// Function for Dark Mode styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  replaceImageColor("light", "dark");
}

function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  replaceImageColor("dark", "light");
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
