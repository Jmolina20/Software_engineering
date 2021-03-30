var date = new Date();
var hour= date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();

if (hour < 12){
    console.log("Good morning, it is now" + );
}
else if (hour >= 12 && hour <= 16){
    console.log("Good afternoon");
}
else {
    console.log("Go to bed, sleep schedules are important.");
}