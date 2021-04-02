for (start=0;start<=10;start++){
    var date = new Date();
    var hour= date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var millisec = date.getUTCMilliseconds();
    console.log("The current time is " + hour + ":" + min + ":" + sec + ":" + millisec); 
}