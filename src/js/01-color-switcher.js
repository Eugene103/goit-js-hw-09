const startBtn = document.querySelector(`[data-start]`)
const stopBtn = document.querySelector(`[data-stop]`)
const body = document.body

onPageStart()
function onPageStart() {
    stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startBtn.addEventListener(`click`, () => {
    timerId = setInterval(() => {
    let randomColor = getRandomHexColor();
         body.style.backgroundColor = randomColor;
         
    }, 1000)
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener(`click`, () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
