export default function updateStudentGradeByCity(students, city, newGrade) {
  const arr = students.filter((obj) => obj.location === city);
  const newArr = arr.map((obj) => {
   obj.grade = "N/A";
   return obj;
  });
  for(const i of newGrade){
    for(const j of newArr){
      if(j.id === i.studentId){
        j.grade = i.grade;
      }
    }
  }
  return newArr;
}
