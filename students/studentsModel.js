module.exports = { addStudents, getStudents };

let students = [];

function addStudents(s) {
  if (Array.isArray(s)) {
    students = [...students, ...s];
    return s;
  } else {
    students.push(s);
    return students.find(student => student.name === s.name);
  }
}

function getStudents() {
  return students;
}
