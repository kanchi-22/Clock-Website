console.log("This is clock.js");
let clock = document.getElementById("clock");
let box = document.getElementsByClassName("box");
function updateClock(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = (hours>=12)? "PM" : "AM";
    hours = (hours>12)? hours-12 : hours;
    hours = (hours<10) ? "0"+hours: hours;
    box[0].innerText = hours + ":";
    box[1].innerText = minutes + ":";
    box[2].innerText = seconds;
    box[3].innerText = ampm;
    // clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
}