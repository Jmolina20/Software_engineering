let test1 = [1,2,3,4,5,6,7,8,9,10];
let test2 = [20,31,2,45,0,22,10,2,3,6];
let test3 = [];

for (counter=0;counter<10;counter++){
    test3.push(test1[counter] + test2[counter]);
}
console.log(test3);