var num1 = -1;

if (num1 > 0){
    if (num1 < 100){
        console.log(num1 + " is greater than zero but less than 100");
    }
    else {
        console.log("Num1 is greater than zero and above 100");
    }
}

else if (num1 < 0){
    if (num > -100){
        console.log(num1 + " is lower than zero but still greater than negative 100.");
    }
    else {
        console.log("This number is lower than negative hundred.");
    }
}

else{
    console.log("Congrats, you entered a zero.");
}