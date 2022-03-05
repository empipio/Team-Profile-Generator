const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should get employee name", () => {
      const employee = new Employee("Emily");
      const expected = "Emily";
      const actual = employee.getName();

      expect(actual).toBe(expected);
    });
  });
  describe("getId", () => {
    it("should get employee ID", () => {
      const employee = new Employee("Emily", 1);
      const expected = 1;
      const actual = employee.getId();
      expect(actual).toBe(expected);
    });
  });
  describe("getEmail", () => {
    it("should get employee email", () => {
      const employee = new Employee("Emily", 1, "mail@example.com");
      const expected = "mail@example.com";
      const actual = employee.getEmail();
      expect(actual).toBe(expected);
    });
  });
  describe("getRole", () => {
    it("should get employee role", () => {
      const employee = new Employee("Emily", 1, "mail@example.com");
      const expected = "Employee";
      const actual = employee.getRole();
      expect(actual).toBe(expected);
    });
  });
});
