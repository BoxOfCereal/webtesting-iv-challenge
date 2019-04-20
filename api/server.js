const express = require("express");

const server = express();

server.use(express.json());
const students = require("../students/students");
server.use("/api/students", students);

server.get("/", async (req, res) => {
  res.status(200).json({ message: "Welcome" });
});

module.exports = server;
