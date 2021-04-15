let student_records = new Map();
student_records.set( 5, "Frankenstein");
student_records.set ("King Arthur", 10);
student_records.set ("Hannibal", 20);
student_records.set ("Napoleon", 30);
student_records.set ("Santa", 40);
student_records.set ("Jon", 50);
student_records.set ("Anne", 60);
student_records.set ("James", 70);
student_records.set ("Yahtzee", 80);
student_records.set ("Hal", 100);

console.log(student_records.size);
console.log(student_records);
console.log(student_records.has("Hannibal"));
student_records.delete("Hannibal");
console.log(student_records.has("Hannibal"));
console.log(student_records.size);
student_records.forEach