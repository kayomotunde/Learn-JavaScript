function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();

    document.getElementsByClassName('clock')[0].textContent = time;
}
displayTime();
const timeDisplay = setInterval(displayTime, 1000);