var num = 8;
var num1 = 6;
var month;
var day;
if (num >= 1 && num <= 12){
    if (num == 1){month = " January, "; }
    else if (num == 2){ month = " Febuary, ";}
    else if (num == 3){month = " March, ";}
    else if (num == 4){month = " April, ";}
    else if (num == 5){month = " May, ";}
    else if (num == 6){month = " June, ";}
    else if (num == 7){month = " July, ";}
    else if (num == 8){month = " August, ";}
    else if (num == 9){month = " September, ";}
    else if (num == 10){month = " October, ";}
    else if (num == 11){month = " November, ";}
    else if (num == 12){month = " December, ";}
}
else if (num > 12 || num < 1){
    console.log("Sorry but that's an invalid month.");
}
if (num1 >= 1 && num1 <= 7){
    if (num1 == 1){day = " Sunday.";}
    else if (num1 == 2){day =" Monday.";}
    else if (num1 == 3){day = " Tuesday.";}
    else if (num1 == 4){day = " Wednesday.";}
    else if (num1 == 5){day = " Thursday.";}
    else if (num1 == 6){day =" Friday.";}
    else if (num1 == 7){day = " Saturday.";}
}
else if (day < 1 || day > 7){
    console.log("Sorry, but that's an invalid day");
}
console.log("Welcome to the month of" + month);
console.log("Today is" + day);