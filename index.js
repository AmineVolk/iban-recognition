const logger = require("loggy");
const { regex } = require("./regex");
const { getName } = require("country-list");
const getIbans = textThatHaveIban => {
  let tableToReturn = [];
  let ibans = textThatHaveIban.match(regex);

  if (ibans != null) {
    ibans.forEach(iban => {
      let code = iban.substring(0, 2);
      tableToReturn.push({ iban: iban, country: getName(code) });
    });
    return tableToReturn;
  } else {
    return "No iban found";
  }
};

module.exports = {
  getIbans
};
