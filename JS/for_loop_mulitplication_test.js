var sum = 0;
var counter=0;
for (counter=0; counter<= 20; counter++){
    sum = sum+counter;
}
console.log ("Congrats, you've now escaped the loop, enjoy your newfound freedom. Also the new sum is " + sum);

while (counter<10){
    for (counter=0; counter<= 20; counter++){
        sum = sum+counter;
    }
    console.log ("Congrats, you've now escaped the loop, enjoy your newfound freedom. Also the new sum is " + sum);
}