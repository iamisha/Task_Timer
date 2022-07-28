
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


