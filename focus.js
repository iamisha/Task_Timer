

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var focus_min = document.getElementById('f_min');
var focus_sec = document.getElementById('f_sec');

var break_min = document.getElementById('b_min');
var break_sec = document.getElementById('b_sec');

//store a reference to a timer variable
var focusTimer;

start.addEventListener('click', function(){
    if(focusTimer === undefined){
        focusTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    focus_min.innerHTML = 30;
    focus_sec.innerHTML = "00";

    break_min.innerHTML = 5;
    break_sec.innerHTML = "00";

    document.getElementById('counter').innerHTML = 0;
    stopInterval()
    focusTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    focusTimer = undefined;
})


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(focus_sec.innerHTML != 0){
        focus_sec.innerHTML--;
    } else if(focus_min.innerHTML != 0 && focus_sec.innerHTML == 0){
        focus_sec.innerHTML = 59;
        focus_min.innerHTML--;
    }

    //Break Timer Countdown
    if(focus_min.innerHTML == 0 && focus_sec.innerHTML == 0){
        if(break_sec.innerHTML != 0){
            break_sec.innerHTML--;
        } else if(break_min.innerHTML != 0 && break_sec.innerHTML == 0){
            break_sec.innerHTML = 59;
            break_min.innerHTML--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(focus_min.innerHTML == 0 && focus_sec.innerHTML == 0 && break_min.innerHTML == 0 && break_sec.innerHTML == 0){
        focus_min.innerHTML = 30;
        focus_sec.innerHTML = "00";

        break_min.innerHTML = 5;
        break_sec.innerHTML = "00";

        document.getElementById('counter').innerHTML++;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(focusTimer);
}