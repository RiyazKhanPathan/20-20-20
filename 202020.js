const proces = require("child_process");

pid = null;

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
function killWindow(timeInterval){
    proces.exec("tasklist | findstr Music.UI.exe",(err,stdout,stderr)=>{
            pid = stdout.replace(/\s+/g,",").split(",")[1]; 
            sleep(timeInterval*1000).then(()=>{
                process.kill(parseInt(pid))
            }); 
    });
}

function changeLookAlert(){
    //play audio C:/Windows/Media/Alarm05.wav
    console.log("Stare at 20 meters farther object");
    proces.exec("start C:\\Windows\\Media\\Alarm05.wav",(err,stdout,stderr)=>{killWindow(8)});
    // 5*60*1000
    sleep(12*1000).then(back2WorkAlert);
    
}
function back2WorkAlert(){
    //play audio C:/Windows/Media/lets_get_to_work.mp3
    console.log("Get Back To Your Work");
    proces.exec("start C:\\Windows\\Media\\Ring07.wav",(err,stdout,stderr)=>{killWindow(5)});
    
    timer();
    
}
    
console.log("20-20-20 has been Started");
function timer(){
    //20*60*1000
    sleep(20*1000).then(changeLookAlert);
    
}
timer();
