const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("getName", () => {
    it("Should return intern's name", () => {
      const intern = new Intern("Bob", 2, "bob@mail.com", "UoB");
      const expected = "Bob";
      const actual = intern.getName();
      expect(actual).toBe(expected);
    });
  });
  describe("getSchool", () => {
    it("Should return intern's school", () => {
      const intern = new Intern("Bob", 2, "bob@mail.com", "UoB");
      const expected = "UoB";
      const actual = intern.getSchool();
      expect(actual).toBe(expected);
    });
  });
  describe("getRole", () => {
    it("Should override employee role to return intern", () => {
      const intern = new Intern("Bob", 2, "bob@mail.com", "UoB");
      const expected = "Intern";
      const actual = intern.getRole();
      expect(actual).toBe(expected);
    });
  });
});
