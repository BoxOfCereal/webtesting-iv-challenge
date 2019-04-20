module.exports = { addStudents, getStudents };

const students = [];

function addStudents(s) {
  students.push(s);
}

function getStudents() {
  return students;
}
