export default function getListStudentIds(arrObj){
  if(typeof(arrObj) === 'Array')
    return arrObj.map(elem => elem.id);
  else 
    return [];
}
