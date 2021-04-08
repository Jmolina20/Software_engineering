console.log ("Hello and welcome to Privacy 101 made by the NSA");
console.log("Here we're going to go through what a common password is vs a strong password");
let password = "password";
let new_password = "";
let new_passwordlength = password.length;
console.log("A common password is something like " + password);
console.log("Which can be hacked in seconds, a stronger version would be: ")
new_password = password.replace(/s/g , '%');
console.log (new_password) 
console.log("This is decent, but it can be better");
new_password= new_password.padStart(11, "@*");
console.log("Something like " + new_password + "works much better");






