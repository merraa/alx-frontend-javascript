export default function getStudentIdsSum(students){
  return students.reduce((acc,curr) => acc.id + curr.id);
}
