const schoolNameEl = document.getElementById("schoolName");
const schoolAddressEl = document.getElementById("schoolAddress");
const schoolEmailEl = document.getElementById("schoolEmail");

const scholarEl = document.getElementById("scholarNo");               // Not Found
const rollNoEl = document.getElementById("rollNo");
const fNameEl = document.getElementById("fName");
const attendanceEl = document.getElementById("attendance");

const classEl = document.getElementById("class");
const studentNameEl = document.getElementById("studentName");
const mNameEl = document.getElementById("mName");
const dobEl = document.getElementById("dob");

const bs12EnglishEl = document.getElementById("bs12English");
const t1EnglishEl = document.getElementById("t1English");
const t1moEnglishEl = document.getElementById("t1moEnglish");
const bs34EnglishEl = document.getElementById("bs34English");
const t2EnglishEl = document.getElementById("t2English");
const t2moEnglishEl = document.getElementById("t2moEnglish");
const totalEnglishEl = document.getElementById("totalEnglish");
const gradeEnglishEl = document.getElementById("gradeEnglish");

const bs12HindiEl = document.getElementById("bs12Hindi");
const t1HindiEl = document.getElementById("t1Hindi");
const t1moHindiEl = document.getElementById("t1moHindi");
const bs34HindiEl = document.getElementById("bs34Hindi");
const t2HindiEl = document.getElementById("t2Hindi");
const t2moHindiEl = document.getElementById("t2moHindi");
const totalHindiEl = document.getElementById("totalHindi");
const gradeHindiEl = document.getElementById("gradeHindi");

const bs12MathsEl = document.getElementById("bs12Maths");
const t1MathsEl = document.getElementById("t1Maths");
const t1moMathsEl = document.getElementById("t1moMaths");
const bs34MathsEl = document.getElementById("bs34Maths");
const t2MathsEl = document.getElementById("t2Maths");
const t2moMathsEl = document.getElementById("t2moMaths");
const totalMathsEl = document.getElementById("totalMaths");
const gradeMathsEl = document.getElementById("gradeMaths");

const bs12TotalEl = document.getElementById("bs12Total");
const t1TotalEl = document.getElementById("t1Total");
const t1moTotalEl = document.getElementById("t1moTotal");
const bs34TotalEl = document.getElementById("bs34Total");
const t2TotalEl = document.getElementById("t2Total");
const t2moTotalEl = document.getElementById("t2moTotal");
const totalTotalEl = document.getElementById("totalTotal");
const gradeTotalEl = document.getElementById("gradeTotal");

const bottomResultEl = document.getElementById('bottomResult');
const bottomPercentageEl = document.getElementById("bottomPercentage");
const bottomGradeEl = document.getElementById("bottomGrade")



let data = null;
const url = 'http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521';


function findGrade(obt,total){
    const percent = Math.round((parseInt(obt)*100)/parseInt(total))
    if (percent >90){
        return "A1"
    }
    else if (percent > 80 ){
        return "A2"
    }
    else if (percent > 70){
        return 'B1'
    }
    else if (percent >60){
        return 'B2'
    }
    else if (percent > 50){
        return 'C1'
    }
    else if (percent > 40){
        return "C2"
    }
    else if ( percent >= 34){
        return 'D'
    }
    else {
        return 'E'
    }
}

function assignData (response){
    
    data = response
    let { lstStudentInfo } = data;
    lstStudentInfo = lstStudentInfo[0]
    
    
    const {lstStudent,stInternals} = lstStudentInfo;
    
    const term1Results = lstStudent.filter(eachItem=>(eachItem.RptName === "Best Score PT-I, II"))
    const term1EnglishResult = term1Results.filter(eachItem=>(eachItem.SubjectName === "ENGLISH"))
    const term1HindiResult = term1Results.filter(eachItem=>(eachItem.SubjectName === "HINDI"))
    const term1MathsResult = term1Results.filter(eachItem=>(eachItem.SubjectName === "MATHMATICS"))
    const term2Results = lstStudent.filter(eachItem=>(eachItem.RptName === "Best Score PT-III, IV"))
    const term2EnglishResult = term2Results.filter(eachItem=>(eachItem.SubjectName === "ENGLISH"))
    const term2HindiResult = term2Results.filter(eachItem=>(eachItem.SubjectName === "HINDI"))
    const term2MathsResult = term2Results.filter(eachItem=>(eachItem.SubjectName === "MATHMATICS"))

    const pp1Results = stInternals.filter(eachItem=>(eachItem.InternalExam === "PP I"))
    const pp1EnglishResult = pp1Results.filter((eachItem,i)=>(eachItem.ExamSubjectName === "ENGLISH"))
    const pp1HindiResult = pp1Results.filter(eachItem=>(eachItem.ExamSubjectName === "HINDI"))
    const pp1MathsResult = pp1Results.filter(eachItem=>(eachItem.ExamSubjectName === "MATHMATICS"))

    const pp2Results = stInternals.filter(eachItem=>(eachItem.InternalExam === "PP II"))
    const pp2EnglishResult = pp2Results.filter(eachItem=>(eachItem.ExamSubjectName === "ENGLISH"))
    const pp2HindiResult = pp2Results.filter(eachItem=>(eachItem.ExamSubjectName === "HINDI"))
    const pp2MathsResult = pp2Results.filter(eachItem=>(eachItem.ExamSubjectName === "MATHMATICS"))

    const pp3Results = stInternals.filter(eachItem=>(eachItem.InternalExam === "PP III"))
    const pp3EnglishResult = pp3Results.filter(eachItem=>(eachItem.ExamSubjectName === "ENGLISH"))
    const pp3HindiResult = pp3Results.filter(eachItem=>(eachItem.ExamSubjectName === "HINDI"))
    const pp3MathsResult = pp3Results.filter(eachItem=>(eachItem.ExamSubjectName === "MATHMATICS"))

    const pp4Results = stInternals.filter(eachItem=>(eachItem.InternalExam === "PP IV"))
    const pp4EnglishResult = pp4Results.filter(eachItem=>(eachItem.ExamSubjectName === "ENGLISH"))
    const pp4HindiResult = pp4Results.filter(eachItem=>(eachItem.ExamSubjectName === "HINDI"))
    const pp4MathsResult = pp4Results.filter(eachItem=>(eachItem.ExamSubjectName === "MATHMATICS"))

    const bestP1P2EnglishScore = pp1EnglishResult[0].ScoredMarks >= pp2EnglishResult[0].ScoredMarks ? pp1EnglishResult[0].ScoredMarks : pp2EnglishResult[0].ScoredMarks
    const bestP1P2HindiScore = pp1HindiResult[0].ScoredMarks >= pp2HindiResult[0].ScoredMarks ? pp1HindiResult[0].ScoredMarks : pp2HindiResult[0].ScoredMarks
    const bestP1P2MathsScore = pp1MathsResult[0].ScoredMarks >= pp2MathsResult[0].ScoredMarks ? pp1MathsResult[0].ScoredMarks : pp2MathsResult[0].ScoredMarks
    
    const bestP3P4EnglishScore = pp3EnglishResult[0].ScoredMarks >= pp4EnglishResult[0].ScoredMarks ? pp3EnglishResult[0].ScoredMarks : pp4EnglishResult[0].ScoredMarks
    const bestP3P4HindiScore = pp3HindiResult[0].ScoredMarks >= pp4HindiResult[0].ScoredMarks ? pp3HindiResult[0].ScoredMarks : pp4HindiResult[0].ScoredMarks
    const bestP3P4MathsScore = pp3MathsResult[0].ScoredMarks >= pp4MathsResult[0].ScoredMarks ? pp3MathsResult[0].ScoredMarks : pp4MathsResult[0].ScoredMarks


    const totalEnglishMarks = parseInt(bestP1P2EnglishScore) + parseInt(term1EnglishResult[0].Marks) + parseInt(bestP3P4EnglishScore) + parseInt(term2EnglishResult[0].Marks);
    const totalHindiMarks = parseInt(bestP1P2HindiScore) + parseInt(term1HindiResult[0].Marks) + parseInt(bestP3P4HindiScore) + parseInt(term2HindiResult[0].Marks);
    const totalMathsMarks = parseInt(bestP1P2MathsScore) + parseInt(term1MathsResult[0].Marks) + parseInt(bestP3P4MathsScore) + parseInt(term2MathsResult[0].Marks);
     
    const schoolFinalAddress = lstStudentInfo.SchoolAddress + ', Ph. : ' + lstStudentInfo.SchoolPhoneNumber
    


    // Assign obtained values
    schoolNameEl.textContent = lstStudentInfo.SchoolName ;
    schoolAddressEl.textContent = schoolFinalAddress;
    schoolEmailEl.textContent = `Visit us at: ${lstStudentInfo.SchoolEmail} `;

    rollNoEl.textContent = `:- ${lstStudentInfo.RollNumber}` ;
    fNameEl.textContent = `:- ${lstStudentInfo.FatherName}` ;
    attendanceEl.textContent = "yet to find";

    classEl.textContent = `:- ${lstStudentInfo.ClassName}` ;
    studentNameEl.textContent = `:- ${lstStudentInfo.Name}`
    mNameEl.textContent = `:- ${lstStudentInfo.MotherName}`;
    dobEl.textContent = `:- ${lstStudentInfo.DOB}`

    bs12EnglishEl.textContent = bestP1P2EnglishScore
    t1EnglishEl.textContent = term1EnglishResult[0].Marks
    t1moEnglishEl.textContent = parseInt(bestP1P2EnglishScore) + parseInt(term1EnglishResult[0].Marks)
    bs34EnglishEl.textContent = bestP3P4EnglishScore
    t2EnglishEl.textContent = term2EnglishResult[0].Marks
    t2moEnglishEl.textContent = parseInt(bestP3P4EnglishScore) + parseInt(term2EnglishResult[0].Marks)
    totalEnglishEl.textContent = totalEnglishMarks
    gradeEnglishEl.textContent = findGrade(totalEnglishMarks,200)

    bs12HindiEl.textContent = bestP1P2HindiScore
    t1HindiEl.textContent = term1HindiResult[0].Marks
    t1moHindiEl.textContent = parseInt(bestP1P2HindiScore) + parseInt(term1HindiResult[0].Marks)
    bs34HindiEl.textContent = bestP3P4HindiScore
    t2HindiEl.textContent = term2HindiResult[0].Marks
    t2moHindiEl.textContent = parseInt(bestP3P4HindiScore) + parseInt(term2HindiResult[0].Marks)
    totalHindiEl.textContent = totalHindiMarks
    gradeHindiEl.textContent = findGrade(totalHindiMarks,200)

    bs12MathsEl.textContent = bestP1P2MathsScore
    t1MathsEl.textContent = term1MathsResult[0].Marks
    t1moMathsEl.textContent = parseInt(bestP1P2MathsScore) + parseInt(term1HindiResult[0].Marks)
    bs34MathsEl.textContent = bestP3P4MathsScore
    t2MathsEl.textContent = term2MathsResult[0].Marks
    t2moMathsEl.textContent = parseInt(bestP3P4MathsScore) + parseInt(term2MathsResult[0].Marks)
    totalMathsEl.textContent = totalMathsMarks
    gradeMathsEl.textContent = findGrade(totalMathsMarks,200)

    bs12TotalEl.textContent = parseInt(bestP1P2EnglishScore) + parseInt(bestP1P2HindiScore) + parseInt(bestP1P2MathsScore)
    t1TotalEl.textContent = parseInt(term1EnglishResult[0].Marks) + parseInt(term1HindiResult[0].Marks) + parseInt(term1MathsResult[0].Marks)
    t1moTotalEl.textContent = parseInt(bestP1P2EnglishScore) + parseInt(term1EnglishResult[0].Marks) + parseInt(bestP1P2HindiScore) + parseInt(term1HindiResult[0].Marks) + parseInt(bestP1P2MathsScore) + parseInt(term1HindiResult[0].Marks)
    bs34TotalEl.textContent = parseInt(bestP3P4HindiScore) + parseInt(bestP3P4MathsScore) + parseInt(bestP3P4MathsScore)
    t2TotalEl.textContent = parseInt(term2EnglishResult[0].Marks) + parseInt(term2HindiResult[0].Marks) + parseInt(term2MathsResult[0].Marks)
    t2moTotalEl.textContent = parseInt(bestP3P4EnglishScore) + parseInt(term2EnglishResult[0].Marks) + parseInt(bestP3P4HindiScore) + parseInt(term2HindiResult[0].Marks) + parseInt(bestP3P4MathsScore) + parseInt(term2MathsResult[0].Marks)
    totalTotalEl.textContent = totalEnglishMarks+ totalHindiMarks + totalMathsMarks
    gradeTotalEl.textContent = findGrade(totalEnglishMarks+ totalHindiMarks + totalMathsMarks,600)

    const finalGrade = gradeTotalEl.textContent;
    const finalResult = (finalGrade === "E") ? "FAIL": "PASS"
    const finalPercentage = Math.round((totalEnglishMarks+ totalHindiMarks + totalMathsMarks)*100/600)

    bottomResultEl.textContent = `Result:- ${finalResult}`;
    bottomPercentageEl.textContent = `Percentage:- ${finalPercentage}%` 
    bottomGradeEl.textContent = `Grade:- ${finalGrade}` 

}


fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      
      data = jsonData.Response.ProgressList;
      assignData(data)
      
    })
