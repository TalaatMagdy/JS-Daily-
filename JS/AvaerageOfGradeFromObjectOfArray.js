const students = [
    {
        name: "Mary",
        age: 10,
        grades: [90, 88, 95]
    },
    {
        name: "Joseph",
        age: 11,
        grades: [80, 100, 90, 96]
    }
];

const getAverages = function(students){
    const averages = [];

    for(let grade in students){
        const arrayOfGrade = students[grade]["grades"];
        let average =0;
        for (let x = 0; x < arrayOfGrade.length; x++){
            average +=arrayOfGrade[x];
        }
        averages.push(average/arrayOfGrade.length)
    }
    return averages;
}




