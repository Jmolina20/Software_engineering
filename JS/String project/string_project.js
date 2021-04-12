let statement="Welcome to the Gibberish Generator! Down below you'll find some example text we'll use";
let statement2="It was the best of times, and it was the worst of times.";
console.log(statement);
console.log("Example text: " + statement2);
console.log(statement2.padStart(60, "*"));
console.log(statement2.padEnd(65, "3"));
console.log(statement2.replace("a", "B"));
console.log(statement2.replace(/i/ig, "b"));
console.log(statement2.replaceAll("times", "cats"));
console.log(statement2.replace(/i/g, "b"));
if (statement.startsWith("It") == true){
    console.log("Twas a success");
}
if (statement.endsWith("times.") == true){
    console.log("The ending match was also a success");

}