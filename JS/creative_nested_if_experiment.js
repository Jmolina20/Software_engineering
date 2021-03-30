var num = 95;

if (num >= 0 && num <= 100){
    if (num <= 100 && num >= 91){
        console.log("Congrats! your score of " + num + " is a solid A");
    }
    if (num <= 90 && num >= 81){
        console.log("Congrats! your score of " + num + " is a solid B");
    }
    if (num <= 80 && num >= 71){
        console.log("Congrats! your score of " + num + " is a solid C");
    }
    if (num <= 70 && num >= 61){
        console.log("Congrats! your score of " + num + " is a solid D");
    }
    else if (num <= 60){
        console.log("Please report to tutoring after class.");
    }
}

else if (num > 100){
    console.log("Please come to the teacher's desk after class, since there were no extra credit questions on this test.");
}