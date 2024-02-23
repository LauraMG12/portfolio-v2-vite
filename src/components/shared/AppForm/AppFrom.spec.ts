import { capitalize, extractCorporativeName } from "./AppForm.helper";

describe("AppForm", () => {
  describe("capitalize()", () => {
    it("should return string capitalized", () => {
      const string = "hello world";
      const expectedResult = "Hello world";
      const result = capitalize(string);
      expect(result).toBe(expectedResult);
    });
  });
  describe("extractCorporativeName()", () => {
    it("should return string with corporative name", () => {
      const email = "test@gmail.com";
      const expectedResult = "a company";
      const result = extractCorporativeName(email);
      expect(result).toBe(expectedResult);
    });
    it("should return 'a company' if an email domain has been used", () => {
      const email = "test@google.com";
      const expectedResult = "Google";
      const result = extractCorporativeName(email);
      expect(result).toBe(expectedResult);
    });
  });
});
