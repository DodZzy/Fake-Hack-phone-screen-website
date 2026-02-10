let time = 10;
const timer = document.getElementById("timer");
const safe = document.getElementById("safe");
const container = document.querySelector(".container");

const countdown = setInterval(() => {
  time--;
  timer.textContent = time;

  if (time <= 0) {
    clearInterval(countdown);
    container.classList.remove("shake");
    timer.style.display = "none";
    document.getElementById("warning").style.display = "none";
    safe.classList.remove("hidden");
  }
}, 1000);
