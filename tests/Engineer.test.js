const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("getName", () => {
    it("should get engineer name", () => {
      const engineer = new Engineer(
        "Emily",
        1,
        "mail@example.com",
        "githubName"
      );
      const expected = "Emily";
      const actual = engineer.getName();

      expect(actual).toBe(expected);
    });
  });
  describe("getGithub", () => {
    it("should get engineer's github username", () => {
      const engineer = new Engineer(
        "Emily",
        1,
        "mail@example.com",
        "githubName"
      );
      const expected = "githubName";
      const actual = engineer.getGithub();

      expect(actual).toBe(expected);
    });
  });
  describe("getRole", () => {
    it("should override employee role with engineer", () => {
      const engineer = new Engineer(
        "Emily",
        1,
        "mail@example.com",
        "githubName"
      );
      const expected = "Engineer";
      const actual = engineer.getRole();

      expect(actual).toBe(expected);
    });
  });
});
