

const passedStudents = (students, threshold) => {

    let passedStudent = students.filter((student) => {

        return student.marks >= threshold;



    })

    return passedStudent;

}

const students = [
    {name: 'Rafi', marks: 40},
    {name: 'Salia', marks: 70},
    {name: 'Alia', marks: 90},
    {name: 'Calia', marks: 80},
    {name: 'Dalia', marks: 70},
]


console.log(passedStudents(students, 80))