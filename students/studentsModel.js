module.exports = { addStudents, getStudents };

const students = [];

function addStudents(s) {
  students.push(s);
  return students.find(student => student.name === s.name);
}

function getStudents() {
  return students;
}
