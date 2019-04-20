module.exports = { addStudents, getStudents, removeStudent, removeAll };

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

function removeStudent(name) {
  students = students.filter(s => s.name !== name);
}

function removeAll() {
  students = [];
}
