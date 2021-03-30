/*
    This program is meant to print out a message by calling a specialized javascript function that gets the time off of the computer.
*/
var date = new Date();
var hour= date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();

if (hour < 12){
    console.log("Good morning, it is now" + hour);
}
else if (hour >= 12 && hour < 16){
    console.log("Good afternoon");
}
else {
    console.log("Go to bed, sleep schedules are important.");
}