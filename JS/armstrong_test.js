let num1;
let num2;
let num3;
let sum;
let armstrong=371;

for (counter = 0; counter<1; counter++){
    if (armstrong % 10 == 6){
        num1 = armstrong % 10;
        if (num1 % 10 == 5){
            num2 = num1 % 10;
            if (num2 % 10 == 4){
                num3 = num2 % 10;
                sum = ((Math.pow(3,num1)) + (Math.pow(3,num2)) + (Math.pow(3,num3)));
                if (sum == armstrong){
                    console.log ("Congratulations! You've got an armstrong number on your hands");
                }
                else if (sum !=armstrong){
                    console.log ("Sorry, but this isn't an arm strong number");
            }
        }
    }
}

}
/*while(quo!=0)
{
quo=math.floor(num/10) 
rem=num%10 
sum+=(rem*rem*rem)  //or use cube method
num=quo 
} (supposedly proper answer)
*/