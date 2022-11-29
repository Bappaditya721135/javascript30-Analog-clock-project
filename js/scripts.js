'use strict';

// This code section will get the current time 

const clockTime = function() {
    const dateTime = new Date();
    console.log(dateTime);

    const hour = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
 


    // sec section 
    document.querySelector('.sec').style.transform = `translateX(-50%) rotate(${sec*6}deg)`

    // min section 
    document.querySelector('.min').style.transform = `translateX(-50%) rotate(${min*6}deg)`

    // hour section 
    document.querySelector('.hour').style.transform = `translateX(-50%) rotate(${hour*30}deg)`
    
}
setInterval(clockTime,1000);




