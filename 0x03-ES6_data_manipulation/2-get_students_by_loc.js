export default function getStudentsByLocation(Students, city){
  return Students.filter((elem) => elem.location === city);
}
