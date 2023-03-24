const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const setTimeButton = document.getElementById('set-time');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const backgroundColorInput = document.getElementById('background-color');
const fontSizeInput = document.getElementById('font-size');

let timerRunning = false;
let interval;
let minutes = 0;
let seconds = 0;

function startTimer() {
  if (!timerRunning) {
    interval = setInterval(updateTimer, 1000);
    timerRunning = true;
  }
}

function pauseTimer() {
  if (timerRunning) {
    clearInterval(interval);
    timerRunning = false;
  }
}

function resetTimer() {
  pauseTimer();
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

function setTime() {
  let newMinutes = prompt('Enter the number of minutes:');
  let newSeconds = prompt('Enter the number of seconds:');
  minutes = parseInt(newMinutes);
  seconds = parseInt(newSeconds);
  updateDisplay();
}

function updateTimer() {
  seconds--;
  if (seconds < 0) {
    minutes--;
    seconds = 59;
  }
  if (minutes < 0) {
    alert('Time is up!');
    resetTimer();
  }
  updateDisplay();
}

function updateDisplay() {
  minutesDisplay.textContent = formatTime(minutes);
  secondsDisplay.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
setTimeButton.addEventListener('click', setTime);
backgroundColorInput.addEventListener('change', e => {
  document.body.style.backgroundColor = e.target.value;
});
fontSizeInput.addEventListener('change', e => {
  document.querySelector('.timer-display').style.fontSize = `${e.target.value}px`;
});