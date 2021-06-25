const proces = require("child_process");
const speak = require('./say.js');


function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


function changeLookAlert(){
   
    speak("Stare at 20 meters farther object for 20 seconds");
    sleep(20*1000).then(back2WorkAlert);
    
}
function back2WorkAlert(){

    speak("Get Back To Your Work");
    timer();
    
}
    
console.log("20-20-20 has been Started");
function timer(){
    //20*60*1000
    sleep(20*60*1000).then(changeLookAlert);
    
}
timer();
