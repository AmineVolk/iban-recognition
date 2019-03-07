const expect = require("chai").expect;
const { isCountrySupported } = require("../index");
describe("Test countries methode", () => {
  it("should return true when the given country supported", () => {
    expect(isCountrySupported("France")).true;
  });

  it("should return false when the given country is not supported", () => {
    expect(isCountrySupported("Algeria")).false;
  });
});
