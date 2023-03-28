export default function getListStudentIds(arrObj){
  if(typeof(arrObj) !== 'Array')
    return [];
  else 
    return arrObj.map(elem => elem.id);
}
