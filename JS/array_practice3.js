let temp = [1,9,2,8,3,7,4,6,5];
/*console.log(temp.reverse());
console.log(temp.sort());
console.log(temp.sort().reverse())*/
let num = [10,1,0,90,-1]
for (i = 0; i<num.length-2; i++){
    for (j=i+1;j<num.length;j++){
        if (num[j] > num[j+1]){
            let temp=num[j];
            num[j]=num[j+1]
            num[j+1]=temp

        }

    }
    
}
console.log(num);