const Student = function(name, age) {
    this.name = name;
    this.age = age;
}
const student1 = new Student("Mary", 11);

console.log("Student 1: " + student1.name);