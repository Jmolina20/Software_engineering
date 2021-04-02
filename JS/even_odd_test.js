var odd_num=1;
var even_num=2;
var start=0;
/*if (even_num%2==0)
    {
        console.log(even_num + " is an even number! ");
    }
else {
    console.log( even_num + " is an odd number, time for a redo. ");
}

if (odd_num%2==0)
    {
        console.log(odd_num + " is an even number, time for a redo. ");
}
else {
    console.log(odd_num + " is an odd number, all is well in the universe.");
}*/

while (start<100){
    if (start%2==0)
        {console.log(start + " is an even number! ");}
    else if (start%2!=0){
        console.log(start + " is an odd number!");
    }
    start++;
}
