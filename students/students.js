const express = require("express");
const router = express.Router();
const Students = require("./studentsModel");

router.get("/", (req, res) => {
  res.status(200).json(Students.getStudents());
});

module.exports = router;
