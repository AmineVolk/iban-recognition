var expect = require("chai").expect;
const { getIbans } = require("../index");
describe("Test getIbans when have once iban in the text", () => {
  it("should return the right iban's list, case1", () => {
    const textToTest = "qsdf DE89 4203 0043 6410 2400 06qsd";
    expect(getIbans(textToTest)).deep.eq([
      { iban: "DE89 4203 0043 6410 2400 06", country: "Germany" }
    ]);
  });

  it("should return the right iban's list, case1", () => {
    const textToTest = "qsdf FR24 2002 0202 2606 0002 4M02 606 qsd";
    expect(getIbans(textToTest)).deep.eq([
      { iban: "FR24 2002 0202 2606 0002 4M02 606", country: "France" }
    ]);
  });

  it("should return the right iban's list, case2", () => {
    const textToTest = "qsdfBE62 6200 0264 2062 qsdf qsfqsd";
    expect(getIbans(textToTest)).deep.eq([
      { iban: "BE62 6200 0264 2062", country: "Belgium" }
    ]);
  });

  it("should return the right iban's list, case3", () => {
    const textToTest =
      "aaaqjklqkqdkjkqs qsdf qsdf  BG80 BNBG 9662 2020 4366 28 qsd qjkqdfsjklqdsf jklqfjm qdsfl";

    expect(getIbans(textToTest)).deep.eq([
      { iban: "BG80 BNBG 9662 2020 4366 28", country: "Bulgaria" }
    ]);
  });

  it("should return the right iban's list, case4", () => {
    const textToTest = "CY26224642894268966222462489 qsd";
    expect(getIbans(textToTest)).deep.eq([
      { iban: "CY26224642894268966222462489", country: "Cyprus" }
    ]);
  });

  it("should return the right iban's list, case5", () => {
    const textToTest = "qsdfDK60 0040 0440 2262 44qsd";

    expect(getIbans(textToTest)).deep.eq([
      { iban: "DK60 0040 0440 2262 44", country: "Denmark" }
    ]);
  });

  it("should return the right iban's list, case6", () => {
    const textToTest = "aaDK60-0040-0440-2262-44 qsd";
    expect(getIbans(textToTest)).deep.eq([
      { iban: "DK60-0040-0440-2262-44", country: "Denmark" }
    ]);
  });

  it("should return the right iban's list, case7", () => {
    const textToTest = "iban : DE89 3704 0044 0532 0130 00aer', // ok";
    expect(getIbans(textToTest)).deep.eq([
      { iban: "DE89 3704 0044 0532 0130 00", country: "Germany" }
    ]);
  });

  it("should return the right iban's list, case8", () => {
    const textToTest = "iban : DE89-3704-0044-0532-0130-00aer', // ok";
    expect(getIbans(textToTest)).deep.eq([
      { iban: "DE89-3704-0044-0532-0130-00", country: "Germany" }
    ]);
  });
});

describe("test getIbans when have a lot iban in the text", () => {
  const textToTest1 =
    "DE91100000000123456789qsf aaDK60-0040-0440-2262-44qsfqsd BE71096123456769 ";
  const textToTest2 =
    "  FI1410093000123458qs sdf f  aaDK60-0040-0440-2262-44qsfqsd q s s HU42 2222 3026 2222 2028 0000 0000 ";
  const textToTest3 =
    "IT40 S064 2822 2020 0000 0224 366 qs sdf f  MT82 MALT 0210 0002 2446 MTLC AST0 02Sd q s s SE46 6000 1111 0639 2000 0004000 0000 ";

  it("should return the right iban's list, case1", () => {
    expect(getIbans(textToTest1)).deep.eq([
      { iban: "DE91100000000123456789", country: "Germany" },
      { iban: "DK60-0040-0440-2262-44", country: "Denmark" },
      { iban: "BE71096123456769", country: "Belgium" }
    ]);
  });

  it("should return the right iban's list, case2", () => {
    expect(getIbans(textToTest2)).deep.eq([
      { iban: "FI1410093000123458", country: "Finland" },
      { iban: "DK60-0040-0440-2262-44", country: "Denmark" },
      { iban: "HU42 2222 3026 2222 2028 0000 0000", country: "Hungary" }
    ]);
  });

  it("should return the right iban's list, case3", () => {
    expect(getIbans(textToTest3)).deep.eq([
      { iban: "IT40 S064 2822 2020 0000 0224 366", country: "Italy" },
      { iban: "MT82 MALT 0210 0002 2446 MTLC AST0 02S", country: "Malta" },
      { iban: "SE46 6000 1111 0639 2000 0004", country: "Sweden" }
    ]);
  });
});
