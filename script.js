const themeSwitch = document.getElementById("theme-switch");
let isDarkmode = false;

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  isDarkmode = true;
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  isDarkmode = false;
};

themeSwitch.addEventListener("click", () => {
  isDarkmode ? disableDarkMode() : enableDarkMode();
});
