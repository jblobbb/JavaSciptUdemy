const examScores = [98, 77, 84, 91, 57, 66];

const myStudents  = [
    {
        firstName : 'Zeus',
        grade     : 86
    },
    {
        firstName : 'Artemis',
        grade     : 97
    },
    {
        firstName : 'Hera',
        grade     : 72
    },
    {
        firstName : 'Apollo',
        grade     : 90
    }
];

for(let i=0;i<examScores.length;i++){
    console.log(i, examScores[i]);
}

for(let i = 0; i < myStudents.length; i++){
    let student = myStudents[i];
    // console.log(student);
    console.log(`${student.firstName} scored ${student.grade}`);
}

const word = 'stressed';

for(let i = word.length-1; i >=0; i--){
    console.log(word[i]);
}