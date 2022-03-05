const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("getName", () => {
    it("should return manager name", () => {
      const manager = new Manager("Emily", 1, "mail@example.com", "Office one");
      const expected = "Emily";
      const actual = manager.getName();

      expect(actual).toBe(expected);
    });
  });
  describe("getOfficeNumber", () => {
    it("should return manager's office number", () => {
      const manager = new Manager("Emily", 1, "mail@example.com", "Office one");
      const expected = "Office one";
      const actual = manager.getOfficeNumber();

      expect(actual).toBe(expected);
    });
  });
  describe("getRole", () => {
    it("should override employee role and return manager", () => {
      const manager = new Manager("Emily", 1, "mail@example.com", "Office one");
      const expected = "Manager";
      const actual = manager.getRole();

      expect(actual).toBe(expected);
    });
  });
});
