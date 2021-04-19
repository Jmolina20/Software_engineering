let student_records = new Map();
student_records.set( 10, "Frankenstein");
student_records.set (20 , "King Arthur");
student_records.set (30, "Hannibal");
student_records.set (40 , "Napoleon");
student_records.set (50 , "Santa");
student_records.set (60 , "Jon");
student_records.set (70 , "Anne");
student_records.set (80 , "James");
student_records.set (90 , "Yahtzee");
student_records.set (100, "Hal");

console.log(student_records.size);
console.log(student_records);
console.log(student_records.has(30));
student_records.delete(30);
console.log(student_records.has(30));
console.log(student_records.size);
student_records.forEach