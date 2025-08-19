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

let items = document.querySelectorAll(".card-holder .card");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3;
function loadShow() {
  let stt = 0;
  for (let i = 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${
      1 - 0.2 * stt
    }) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(3px)";
    items[i].styel.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (let i = -1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${
      1 - 0.2 * stt
    }) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(3px)";
    items[i].styel.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();
