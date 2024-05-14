
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startPauseBtn = document.getElementById('start-pause');
const resetBtn = document.getElementById('reset');

const messageElement = document.getElementById('message');

let isStarted = false;
let remainingTime = 25 * 60; // 25 minutes in seconds

function updateTimer() {
const minutes = Math.floor(remainingTime / 60);
const seconds = remainingTime % 60;

minutesElement.textContent = minutes.toString().padStart(2, '0');
secondsElement.textContent = seconds.toString().padStart(2, '0');

if (remainingTime === 0) {
clearInterval(intervalId);
messageElement.textContent = "Time's Up! Take a Break";
startPauseBtn.textContent = "Start";
isStarted = false;
}

remainingTime--;
}

let intervalId;

startPauseBtn.addEventListener('click', () => {
if (isStarted) {
clearInterval(intervalId);
startPauseBtn.textContent = "Start";
} else {
intervalId = setInterval(updateTimer, 1000);
startPauseBtn.textContent = "Pause";
}
isStarted = !isStarted;
});

resetBtn.addEventListener('click', () => {
clearInterval(intervalId);
remainingTime = 25 * 60;
updateTimer();
messageElement.textContent = "";
startPauseBtn.textContent = "Start";
isStarted = false;
});
