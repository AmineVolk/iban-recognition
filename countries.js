const countries = [
  "Denmark",
  "Faroe Islands",
  "Finland",
  "Groenland",
  "Netherlands",
  "Macédoine",
  "Slovenia",
  "Bosnia and Herzegovina",
  "Estonia",
  "Kazakhstan",
  "Lithuania",
  "Luxembourg",
  "Austria",
  "Croatia",
  "Liechtenstein",
  "Latvia",
  "Swiss",
  "Bangladesh",
  "Germany",
  "Ireland",
  "Montenegro",
  "Serbia",
  "Royaume-Uni",
  "Gibraltar",
  "Israel",
  "Andorra",
  "Czech republic",
  "South Africa",
  "Romania",
  "Slovakia",
  "Spain",
  "Sweden",
  "Tunisie",
  "Portugal",
  "Iceland",
  "Turkey",
  "France",
  "Greece",
  "Italy",
  "Monaco",
  "Saint Marin",
  "Albania",
  "Cyprus",
  "Hungary",
  "Lebanon",
  "Poland",
  "Maurice",
  "Malta"
];
const getCountries = () => {
  return countries;
};
const isCountrySupported = name => {
  return countries.includes(name);
};

module.exports = { getCountries, isCountrySupported };
