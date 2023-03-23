import classRoom from "./0-classroom"

export default function initializeRooms() {
  const objOne = new classRoom(19);
  const objTwo = new classRoom(20);
  const objThree = new classRoom(34);
  return [objOne, objTwo, objThree]
}
