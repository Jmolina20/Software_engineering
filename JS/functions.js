//By Julian Molina
/* 
1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

function maxOfTwoNumbers (num1, num2) {
    // ADD YOUR CODE HERE
    if (num1 > num2){console.log(num1 + " is bigger than " + num2)}
    else if (num2 > num1) {console.log(num2 + " is bigger than " + num1)}

  };
  
  maxOfThree();
  
  /*
  2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
  */
 function maxOfThree  (temp1, temp2, temp3) {
    // ADD YOUR CODE HERE
    if (temp1 > temp2 && temp1 > temp3){return temp1;}
    else if (temp2 > temp1 && temp2 > temp3){return temp2;}
    else if (temp3 > temp1 && temp3 > temp2){return temp3;}
  };
  
  /*
  3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  */
  function isCharacterAVowel  (letter) {
    // ADD YOUR CODE HERE
    if (letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter=="U"){
        console.log("Congrats! " + letter + " is a vowel!");
    }
    else if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter=="u"){
        console.log("Congrats! " + letter + " is a vowel!");
    }

  };
  
  /*
  4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
  */
  
  function sumArray() {
    // ADD YOUR CODE HERE
    let a = [];
    let sum = 0;
    for (counter = 0; counter<a.length;counter++){
        sum+=a[counter];
    }
    console.log (sum);
  };

  function multiplyArray (){
    let b = [];
    let sum=0;
    for (temp=0;temp<b.length;temp++){
      sum+=a[temp];
    }
    console.log(sum);
  }
  
  /*
  5.Write a function that returns the number of arguments passed to the function when called.
  */
  let set = [];
  function argument_count(set){
    let num;
    num = set.length;
    console.log("The amount of arguments passed is " + num);
  }
  /*
  6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
  */
  let set = [];
  function reverseString (set) {
    // ADD YOUR CODE HERE
    let set2 = [];set.length;
    let count = 0;
    let count2 = set.length;
    while (count < set.length){
      set2[count] = set[count2]
      count++;
      count2--;
    }
    return set2;
  };
  
  /*
  7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
  */
  function findLongestWord  (word1)  {
    // ADD YOUR CODE HERE
    let word1 = [];
    let word2 = word1[0];
    for (counter=0;counter<word1.length;counter++){
      if (word2 < word1[counter]){
        word2 = word1[counter];
      }
    
    }
  };
  
  /*
  8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
  */
 let word3 = [];
 let word4 = [];
 let i= 0;
  function filterLongWords (word3, i) {
    // ADD YOUR CODE HERE
    for (counter=0;counter<word3.length;counter++){
      if (set3[counter].length == i){
        word4[counter] = set3[counter];
      }
       };
  }