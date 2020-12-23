// Grab buttons
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

// grab time display paragraph
const timeDisplay = document.querySelector('.time-display');

// Event listeners
startBtn.addEventListener('click', stopWatch);
stopBtn.addEventListener('click', stopWatch);
resetBtn.addEventListener('click', resetStopWatch);

// initialize time display
let counter = 0;
timeDisplay.textContent = getTime(counter);


function startTimer() {
    console.log('start button clicked');
    timerStarts = setInterval(increment, 1000);
    startBtn.disabled = true;
}

function stopTimer() {
    console.log('stop button clicked');
    clearInterval(timerStarts);
    startBtn.disabled = false;
}

// Runs when either the start / stop button is clicked
function stopWatch(e) {
    let timerStarts;

    if (e.target.className == 'start-btn') {
        startTimer();
    } else {
        stopTimer();
    }
}

// resets stop Watch
function resetStopWatch() {
    counter = 0;
    timeDisplay.textContent = getTime(counter);
}

// increases global counter variable
function increment(){
    counter++;
    timeDisplay.textContent = getTime(counter);
}

// gets time as hr:mm:ss string from time value in seconds
function getTime(timeValue) {
    let hours;
    let minutes;
    let seconds;
    let remainder;

    [hours, remainder] = divCalc(timeValue, 3600);
    [minutes, remainder] = divCalc(remainder, 60);
    seconds = remainder;

    hours = (hours < 10) ? '0'+ hours.toString() : hours.toString();
    minutes = (minutes < 10) ? '0'+ minutes.toString() : minutes.toString();
    seconds = (seconds < 10) ? '0'+ seconds.toString() : seconds.toString();

    return `${hours}:${minutes}:${seconds}`;

}

// division calculations
function divCalc(num, den) {
    let quotient = Math.floor(num/den);
    let remainder = num % den;

    return [quotient, remainder];
    
}