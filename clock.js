setInterval( ()=> { 
    d = new Date();
    hourTime = d.getHours();
    minuteTime = d.getMinutes();
    secondTime =d.getSeconds();

    hourRotation = 30*hourTime + minuteTime/2 ;
    minuteRotation = 6 * minuteTime;
    secondRotation = 6 * secondTime;
   
    hour.style.transform = `rotate( ${hourRotation}deg)`; //if we do this it will rotate but it will rotate fro  its center but we have positioned it and we want to rotate it from bottom this can be done using transform-origin property
    minute.style.transform = `rotate( ${minuteRotation}deg)`;
    second.style.transform = `rotate( ${secondRotation}deg)`;
},1000);