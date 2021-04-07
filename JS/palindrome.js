let word = "racecar";
let backword = "";
let num= word.length;

for (num; num >=0; num--){
    backword = backword + word.charAt(num); 
}

if (word === backword){
    console.log("Congrats you've got a palindrome!");
}

else if (word !== backword){
    console.log("Sorry bucko, not a Palindrome")}