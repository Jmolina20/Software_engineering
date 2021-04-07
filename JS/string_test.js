/*let fname="Neo";
let lname="Smith";
let favnum="987654";

console.log("Welcome to the year 5050, you are now entering The Matrix. Please confirm our data on you is correct.")
console.log("Your name is " + fname.toLowerCase() + " " + lname.toLowerCase());
console.log("YOUR NAME IS " + fname.toUpperCase() + " " + lname.toUpperCase() + " CORRECT?!");
console.log("System error code: " + fname.indexOf('N') + lname.indexOf('o'));
console.log("System error code: " + fname.lastIndexOf('e') + lname.slice(0,1) + " " + lname.lastIndexOf('i') + fname.charAt(0));
console.log("Welcome ".concat(fname) + ", We hope you enjoy your stay");
console.log("Your human code is " + favnum);*/

let sentence = "The rent in New York is too darn high"
let sum = 0;

for (counter=0;counter<40;counter++){
    if (sentence.charAt(counter) == 'a'){
        console.log("Vowel found: " + sentence.charAt(counter))
        sum+=1;
    }
    else if (sentence.charAt(counter) == 'e'){
        console.log("Vowel found: " + sentence.charAt(counter))
        sum+=1;}
    else if (sentence.charAt(counter) == 'i'){
        console.log("Vowel found: " + sentence.charAt(counter))
        sum+=1;}
    else if (sentence.charAt(counter) == 'o'){
        console.log("Vowel found: " + sentence.charAt(counter))
        sum+=1;}
       else if (sentence.charAt(counter) == 'u'){
        console.log("Vowel found: " + sentence.charAt(counter))   
        sum+=1;}
}
console.log("The total amount of vowels is " + sum); 