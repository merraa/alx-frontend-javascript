import getListStudents from "./0-get_list_students.js";

export default function getStudentsByLocation(getListStudents, city){
  if(typeof(city) !== "string"){
    throw new TypeError("city must be a string)
  }
  return getListStudents.filter(elem => elem.location === city)
}
