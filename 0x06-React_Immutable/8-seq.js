import { Seq } from "./node_modules/immutable/dist/immutable";

export default function printBestStudents(object) {
  const bestStudents = Seq(object)
    .filter(student => student.score > 70)
    .map(student => ({
      ...student,
      lastName : capitalize(student.lastName),
      firstName : capitalize(student.firstName),
    }));

  console.log(bestStudents.toObject());
}

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};