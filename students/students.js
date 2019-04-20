const express = require("express");
const router = express.Router();
const Students = require("./studentsModel");

router.get("/", (req, res) => {
  res.status(200).json(Students.getStudents());
});

router.post("/add", (req, res) => {
  const newStudent = Students.addStudents(req.body);
  res.status(201).json(newStudent);
});

module.exports = router;
