const req = require("supertest");
const server = require("../api/server");
const Students = require("./studentsModel");

const endpoint = "/api/students";

describe("/api/students", () => {
  describe("GET /", () => {
    it("should return an empty array of students", async () => {
      const res = await req(server).get(endpoint);
      expect(res.status).toBe(200);
      expect(res.body).toEqual([]);
    });
  });
});
