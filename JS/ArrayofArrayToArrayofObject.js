const data = [ ["Mary", 10], ["Barbara", 11], ["David", 12], ["Alex", 11] ];
const students = [] ;
for(let x = 0; x < data.length; x++){
    students.push({name:data[x][0],age:data[x][1]});
}
console.log(students);

