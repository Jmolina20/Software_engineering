var test_score=-1;

if (test_score>=91)
    {
        console.log("Congrats! You got A, your test score is " + test_score);
    }
else if (test_score>=81 && test_score <= 90){
    console.log("Congrats! You got a B, your test score is " + test_score);
}
else if (test_score>=71 && test_score <=80){
    console.log("Congrats! You got a C, your test score is " + test_score);
}
else if (test_score>=61 && test_score <= 70){
    console.log("You got a D, try harder next time and your score is " + test_score);
}
else if (test_score <= 60){
    console.log("You got an F, try harder next time and your score is " + test_score);
}
else{
    console.log("Enter a real number please.");
}