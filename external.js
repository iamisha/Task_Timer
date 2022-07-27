
function DigitalClock(){
    var time =  new Date();
    var  diem = "AM";
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();


    //to repeat the time 
   // setInterval(DigitalClock, 500);
   setTimeout('DigitalClock()',1000);

    //if statement to set the time
    if(hrs>12){
        hrs = hrs - 12;
        diem = "PM";
       }
    if(hrs==0){
         hrs = 12;
    }
    if(hrs<10){
        hrs = "0" + hrs;
    }
    if(min<10){
        min = "0" + min;
    }
    if(sec<10){
        sec = "0" + sec;
    }
   
   var digitalclock = document.getElementById("clock");
   digitalclock.innerHTML = hrs + " : " + min + " : " + sec + " " + diem;
}
DigitalClock();


var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('f_min');
var ws = document.getElementById('f_sec');

var bm = document.getElementById('b_min');
var bs = document.getElementById('b_sec');

var focusTimer;
/* to start timing */
start.addEventListener('click', function(){
   if(focusTimer === undefined){
    focusTimer = setInterval(timer, 1000);
   }
   else{
    alert("Timer is already running");
   }
})
/*to reset timing */
reset.addEventListener('click', function(){
   wm.innerText=25;
   ws.innerText="00";

   bm.innerText=5;
   bs.innerText="00";
   document.getElementById('counter').innerText = 0;
   stopInterval();
   startTimer=undefined;
 })

 /*to stop timing */
stop.addEventListener('click', function(){
    stopInterval();
    startTimer=undefined;
})

function timer(){
    //focus timer countdown
    if(ws.innerText !=0){
        ws.innerText--;
    }else if(wm.innerText !=0 && ws.innerText==0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //break timer countdown
    if(wm.innerText==0&&ws.innerText==0){
        if(bs.innerText !=0 ){
            bs.innerText--;
        }else if(bm.innerText !=0 && bs.innerText ==0){
            bs.innerText = 59;
            bs.innerText--;
        }
    }


    //increment counter by one if one full cycle is completed
    if(wm.innerHTML == 0 && ws.innerHTML==0 && bm.innerHTML==0){
       wm.innerHTML = 25;
       ws.innerHTML = "00";

       bm.innerHTML = 5;
       bs.innerHTML = "00";

       document.getElementsById('counter').innerHTML++;
    }
}
function stopInterval(){
    clearInterval(focusTimer);
}
