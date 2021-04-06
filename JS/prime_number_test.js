for (counter=1;counter<=10;counter++){
    if ((counter % 2 == 0 || counter % 3 == 0) && counter > 3){}
    else {
        console.log("Congrats, you've got a prime number which is " + counter);
    }

}

/*for (counter=1;counter<=99;counter++){
    if (counter % 2 ==0){}
    else if (counter % (counter-2) != 0){
        console.log("You've got a prime number in " + counter);
    }
}*/