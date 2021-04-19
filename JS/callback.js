/*let x = () => console.log("a message from function x");

let y = (n1, n2, callback) => {
    callback();
    console.log("Numbers printed from function y: " + n1 + " " + n2 );
}

y (10,20, x);*/
//y (10,20, () => console.log(2+3))
let message = () => console.log("The total sum is ");

let calc = (num1, num2, callback) => {
    console.log(callback() + (num1 + num2));
}

calc(9 ,9 ,message);