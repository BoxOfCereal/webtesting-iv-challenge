const req = require("supertest");
const server = require("../api/server");
const Students = require("./studentsModel");

const endpoint = "/api/students";

beforeEach(() => {
  Students.removeAll();
});

describe("/api/students", () => {
  describe("GET /", () => {
    it("should return an empty array of students", async () => {
      const res = await req(server).get(endpoint);
      expect(res.status).toBe(200);
      expect(res.body).toEqual([]);
    });
    it("should return an array of students", async () => {
      const students = [{ name: "noah" }, { name: "alex" }];
      Students.addStudents(students);
      const res = await req(server).get(endpoint);
      expect(res.status).toBe(200);
      expect(res.body).toEqual(students);
    });
  });
  describe("POST /add", () => {
    it("should add a student and return it", async () => {
      const res = await req(server)
        .post(endpoint + "/add")
        .send({ name: "noah" });
      const data = res.body;
      expect(res.status).toBe(201);
      expect(data.name).toBe("noah");
    });
    it("should add multiple students and return them", async () => {
      const students = [{ name: "noah" }, { name: "alex" }];
      const res = await req(server)
        .post(endpoint + "/add")
        .send(students);
      const data = res.body;
      expect(res.status).toBe(201);
      expect(data).toEqual(students);
    });
  });
  describe("DELETE /:name", () => {
    it("should delete a student", async () => {
      const students = [{ name: "noah" }, { name: "alex" }];
      Students.addStudents(students);

      const res = await req(server).delete(endpoint + "/noah");

      expect(res.status).toBe(200);
      const studentArray = Students.getStudents();
      expect(studentArray).toEqual([{ name: "alex" }]);
    });
    it("should return the name of the deleted student ", async () => {
      const students = [{ name: "noah" }, { name: "alex" }];
      Students.addStudents(students);

      const res = await req(server).delete(endpoint + "/noah");

      expect(res.status).toBe(200);
      const studentArray = Students.getStudents();
      expect(studentArray).toEqual([{ name: "alex" }]);

      expect(res.body.message).toBe("noah");
    });
  });
});
