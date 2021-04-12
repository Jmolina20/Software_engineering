let num = [];
let sum=0;
for (counter=0;counter<10;counter++){
    num.push(counter * 3);
    sum+=num[counter];
    process.stdout.write(num[counter].toString() + " | ");
}
console.log ("The sum of all the elements in the array is " + sum);
console.log ("The length of the array is " + num.length);
