
const makeMarksheet = (results, id) => {

    //english
    let expectedSubEnglish = results.filter((student) => (student.id === id && student.english ))
    const studentId =  id;
    const englishMarks = expectedSubEnglish[0].english.marks;
    const englishGrade = (englishMarks >= 80) ? "A+" : (englishMarks >= 70) ? "A" : (englishMarks >= 60) ? "A-" : (englishMarks >= 50) ? "B" : (englishMarks >= 40) ? "C" : (englishMarks >= 33) ? "D" : "F";
    const englishGradePoint = (englishMarks >= 80) ? "5" : (englishMarks >= 70) ? "4" : (englishMarks >= 60) ? "3.5" : (englishMarks >= 50) ? "3" : (englishMarks >= 40) ? "2" : (englishMarks >= 33) ? "1" : "0";

    //english
    let expectedSubBangla = results.filter((student) => (student.id === id && student.bangla ))
    const banglaMarks = expectedSubBangla[0].bangla.marks;
    const banglaGrade = (banglaMarks >= 80) ? "A+" : (banglaMarks >= 70) ? "A" : (banglaMarks >= 60) ? "A-" : (banglaMarks >= 50) ? "B" : (banglaMarks >= 40) ? "C" : (banglaMarks >= 33) ? "D" : "F";
    const banglaGradePoint = (banglaMarks >= 80) ? "5" : (banglaMarks >= 70) ? "4" : (banglaMarks >= 60) ? "3.5" : (banglaMarks >= 50) ? "3" : (banglaMarks >= 40) ? "2" : (banglaMarks >= 33) ? "1" : "0";

    const gpa = (parseFloat(englishGradePoint)+ parseFloat(banglaGradePoint))/2;
    console.log(gpa)

    //function to get grade point
    const getGradePoint = (marks) => (marks >= 80) ? "5" : (marks >= 70) ? "4" : (marks >= 60) ? "3.5" : (marks >= 50) ? "3" : (marks >= 40) ? "2" : (marks >= 33) ? "1" : "0";


    
   
    
    return `
    Result of Half Yearly Examination 2026
    Id of student: ${studentId} 
    Subject: Bangla ${banglaMarks} ${banglaGrade} ${banglaGradePoint}
    Subject: English ${englishMarks} ${englishGrade} ${englishGradePoint}
    GPA: ${gpa}
    `

}


const results = [
  
    {id: 1, bangla: {marks:86}},
    {id: 1, english: {marks:57}},
    {id: 1, maths: {marks:66}},
    {id: 2, bangla: {marks:66}},
    {id: 2, english: {marks:75}},
    {id: 2, maths: {marks:78}},
    
   
]


console.log(makeMarksheet(results, 1))