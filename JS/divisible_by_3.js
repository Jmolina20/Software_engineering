/*for (start=1; start<=50; start++){
    if (start%3 == 0 && start%5 == 0){
        console.log (start + " gives us Fizz Buzz");
    }
    else if (start%5 == 0 && start%3 != 0){
        console.log("Buzz");
    }
    else if (start%3==0 && start%5!=0){
        console.log("Fizz");
    }
}*/
var start=1;
while (start<=50){
   if (start%3 == 0 && start%5 == 0){
    console.log (start + " gives us Fizz Buzz");
   }
   else if (start%5 == 0 && start%3 != 0){
    console.log(start + " gives us Buzz");
    }
    else if (start%3==0 && start%5!=0){
        console.log(start + " gives us Fizz");
    }
    start++;
    }