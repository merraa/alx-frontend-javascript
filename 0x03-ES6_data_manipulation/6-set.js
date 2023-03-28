export default function setFromArray(array) {
  const mySet = new Set();
  for(const i of array){
    mySet.add(i);
  }
  return mySet;
}
