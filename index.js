const { regex } = require("./regex");
const { getName } = require("country-list");
const { isValid } = require("iban");
const { getCountries, isCountrySupported } = require("./countries");
const getIbans = (textThatHaveIban) => {
  let tableToReturn = [];
  let ibans = textThatHaveIban.match(regex);

  if (ibans != null) {
    ibans.forEach((iban) => {
      let code = iban.substring(0, 2);
      let isIbanValid = isValid(iban);
      tableToReturn.push({
        iban: iban,
        country: getName(code),
        isIbanValid: isIbanValid,
      });
    });
    return tableToReturn;
  } else {
    return "iban not found";
  }
};

module.exports = {
  getIbans,
  getCountries,
  isCountrySupported,
};
