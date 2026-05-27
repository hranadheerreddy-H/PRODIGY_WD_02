let timer;

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let isRunning = false;

const display = document.getElementById("display");
const lapList = document.getElementById("lapList");

/* Update Display */
function updateDisplay(){

    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let h = hours < 10 ? "0" + hours : hours;

    display.innerText = `${h}:${m}:${s}:${ms}`;
}

/* Start Stopwatch */
document.getElementById("start").addEventListener("click", function(){

    if(!isRunning){

        isRunning = true;

        timer = setInterval(function(){

            milliseconds++;

            if(milliseconds === 100){
                milliseconds = 0;
                seconds++;
            }

            if(seconds === 60){
                seconds = 0;
                minutes++;
            }

            if(minutes === 60){
                minutes = 0;
                hours++;
            }

            updateDisplay();

        }, 10);
    }

});

/* Pause Stopwatch */
document.getElementById("pause").addEventListener("click", function(){

    clearInterval(timer);
    isRunning = false;

});

/* Reset Stopwatch */
document.getElementById("reset").addEventListener("click", function(){

    clearInterval(timer);

    isRunning = false;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    lapList.innerHTML = "";

});

/* Lap Function */
document.getElementById("lap").addEventListener("click", function(){

    if(isRunning){

        const li = document.createElement("li");

        li.innerText = "Lap: " + display.innerText;

        lapList.appendChild(li);
    }

});

/* Initial Display */
updateDisplay();