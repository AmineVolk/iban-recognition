var expect = require("chai").expect;
const { getIbans } = require("../index");
describe("Test getIbans when have once iban in the text", () => {
  it("Should return the right iban's list, case1", () => {
    const textToTest = "qsdf DE89 4203 0043 6410 2400 06qsd";
    expect(getIbans(textToTest)).deep.eq([
      {
        iban: "DE89 4203 0043 6410 2400 06",
        country: "Germany",
        isIbanValid: false
      }
    ]);
  });

  it("Should return iban not found when the given text doesn't have any iban", () => {
    const textToTest = "ajkqdsk q qdfjk q qsd jkqsd f qdf ";
    expect(getIbans(textToTest)).eq("iban not found");
  });

  it("Should return the right iban's list, case1", () => {
    const textToTest = "qsdf FR76 3000 6000 0112 3456 7890 189 qsd";
    expect(getIbans(textToTest)).deep.eq([
      {
        iban: "FR76 3000 6000 0112 3456 7890 189",
        country: "France",
        isIbanValid: true
      }
    ]);
  });

  it("Should return the right iban's list, case2", () => {
    const textToTest = "qsdfBE62 6200 0264 2062 qsdf qsfqsd";
    expect(getIbans(textToTest)).deep.eq([
      { iban: "BE62 6200 0264 2062", country: "Belgium", isIbanValid: false }
    ]);
  });

  it("Should return the right iban's list, case3", () => {
    const textToTest =
      "aaaqjklqkqdkjkqs qsdf qsdf  BG80 BNBG 9662 2020 4366 28 qsd qjkqdfsjklqdsf jklqfjm qdsfl";

    expect(getIbans(textToTest)).deep.eq([
      {
        iban: "BG80 BNBG 9662 2020 4366 28",
        country: "Bulgaria",
        isIbanValid: false
      }
    ]);
  });

  it("Should return the right iban's list, case4", () => {
    const textToTest = "CY26224642894268966222462489 qsd";
    expect(getIbans(textToTest)).deep.eq([
      {
        iban: "CY26224642894268966222462489",
        country: "Cyprus",
        isIbanValid: false
      }
    ]);
  });

  it("Should return the right iban's list, case5", () => {
    const textToTest = "qsdfCH56 0483 5012 3456 7800 9qsd";

    expect(getIbans(textToTest)).deep.eq([
      {
        iban: "CH56 0483 5012 3456 7800 9",
        country: "Switzerland",
        isIbanValid: true
      }
    ]);
  });

  it("Should return the right iban's list, case6", () => {
    const textToTest = "aaDK60-0040-0440-2262-44 qsd";
    expect(getIbans(textToTest)).deep.eq([
      { iban: "DK60-0040-0440-2262-44", country: "Denmark", isIbanValid: false }
    ]);
  });

  it("Should return the right iban's list, case7", () => {
    const textToTest = "iban : DE89 3704 0044 0532 0130 00aer', // ok";
    expect(getIbans(textToTest)).deep.eq([
      {
        iban: "DE89 3704 0044 0532 0130 00",
        country: "Germany",
        isIbanValid: true
      }
    ]);
  });

  it("Should return the right iban's list, case8", () => {
    const textToTest = "iban : BE71-0961-2345-6769aer', // ok";
    expect(getIbans(textToTest)).deep.eq([
      { iban: "BE71-0961-2345-6769", country: "Belgium", isIbanValid: true }
    ]);
  });
});

describe("test getIbans when have a lot iban in the text", () => {
  const textToTest1 =
    "DE91100000000123456789qsf aaDK60-0040-0440-2262-44qsfqsd BE71 0961 2345 6769 ";
  const textToTest2 =
    "  FR7630006000011234567890189a sdf f  aaDK60-0040-0440-2262-44qsfqsd q s s HU42 2222 3026 2222 2028 0000 0000 ";
  const textToTest3 =
    "AL35 2021 1109 0000 0000 0123 4567 qs sdf f   q s s SE46 6000 1111 0639 2000 0004000 0000 ";

  it("Should return the right iban's list, case1", () => {
    expect(getIbans(textToTest1)).deep.eq([
      {
        iban: "DE91100000000123456789",
        country: "Germany",
        isIbanValid: true
      },
      {
        iban: "DK60-0040-0440-2262-44",
        country: "Denmark",
        isIbanValid: false
      },
      { iban: "BE71 0961 2345 6769", country: "Belgium", isIbanValid: true }
    ]);
  });

  it("Should return the right iban's list, case2", () => {
    expect(getIbans(textToTest2)).deep.eq([
      {
        iban: "FR7630006000011234567890189",
        country: "France",
        isIbanValid: true
      },
      {
        iban: "DK60-0040-0440-2262-44",
        country: "Denmark",
        isIbanValid: false
      },
      {
        iban: "HU42 2222 3026 2222 2028 0000 0000",
        country: "Hungary",
        isIbanValid: false
      }
    ]);
  });

  it("Should return the right iban's list, case3", () => {
    expect(getIbans(textToTest3)).deep.eq([
      {
        iban: "AL35 2021 1109 0000 0000 0123 4567",
        country: "Albania",
        isIbanValid: true
      },

      {
        iban: "SE46 6000 1111 0639 2000 0004",
        country: "Sweden",
        isIbanValid: false
      }
    ]);
  });
});
