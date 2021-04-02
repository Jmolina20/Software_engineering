/*if anybody wants to try this one using while loop: (edited) 
Nando went to the vending machine to buy himself a cookie. 
The cookie costs $4 dollars. He paid with a $10 bill, 
the vending machine paid him back in quarters. 
Write a loop that says how many quarters he got in return. */
//change is $6 = 24 quarters
let count = 0;
let end= 24;

while (count < end){
    if (count == end){
    console.log("Here's your change, which totals " + count + " quarters");
    count++;
}
    else if (count != end || count > end){
    count++;}
}