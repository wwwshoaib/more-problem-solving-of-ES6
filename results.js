
const makeMarksheet = (results, id) => {

    let expectedSubBangla = results.filter((student) => (student.id === id && student.bangla ))
    const banglaMarks = expectedSubBangla[0].bangla.marks;
    const banglaGrade = (banglaMarks >= 80) ? "A+" : (banglaMarks >= 70) ? "A" : (banglaMarks >= 60) ? "A-" : (banglaMarks >= 50) ? "B" : (banglaMarks >= 40) ? "C" : (banglaMarks >= 33) ? "D" : "F";
    const banglaGradePoint = (banglaMarks >= 80) ? "5" : (banglaMarks >= 70) ? "4" : (banglaMarks >= 60) ? "3.5" : (banglaMarks >= 50) ? "3" : (banglaMarks >= 40) ? "2" : (banglaMarks >= 33) ? "1" : "0";
    
    return `Subject: Bangla ${banglaMarks} ${banglaGrade} ${banglaGradePoint}`

}


const results = [
  
    {id: 1, bangla: {marks:86}},
    {id: 1, english: {marks:57}},
    {id: 1, maths: {marks:66}},
    {id: 2, bangla: {marks:66}},
    {id: 2, english: {marks:75}},
    {id: 2, maths: {marks:78}},
    
   
]


console.log(makeMarksheet(results, 2))