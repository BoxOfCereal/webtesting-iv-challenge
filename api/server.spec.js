const req = require("supertest");
const server = require("./server.js");

describe("the server", () => {
  describe("GET /", () => {
    it("should Return a message and welcome ", async () => {
      const res = await req(server).get("/");
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ message: "Welcome" });
    });
  });
});
