const createStudent = function(name, age) {
    let student = {
        name: name,
        age: age
    }
    return student;
}

const student1 = createStudent("Mary", 10);
const student2 = createStudent("Michael", 12);

console.log("Students:", student1.name, student2.name);