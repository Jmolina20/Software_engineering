let p = new Promise ((resolve, reject) =>{
    let num1 = 6
    if (num1 == 7){
        resolve(num1)
    }   
    else {reject(num1)}
})

p.then ((num2) =>{
    console.log("The test was a success as the number inside of num1 is " + num2)
}).catch (() =>{
    console.log("Sadly, the number didn't work and it was a failure, the actual number in num1 is " + num2)

})