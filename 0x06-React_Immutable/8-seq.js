import { Seq } from "./node_modules/immutable/dist/immutable";

export default function printBestStudents(object) {
  const bestStudents = Seq(object)
    .filter(student => student.score > 70)
    .map(student => {
      student.firstName = capitalize(student.firstName);
      student.lastName = capitalize(student.lastName);
    });

  console.log(bestStudents.toObject());
}

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};