# IBAN-Recognition

iban-recognition allow you to extract iban from any text, and give you the country and iban's validty.

Example :

```js
const testToExtractIbans =
  "DE91100000000123456789qsf aaDK60-0040-0440-2262-44qsfqsd BE71 0961 2345 6769 ";
const ibans = getIbans(testToExtractIbans);

// The result :
[
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
  {
    iban: "BE71 0961 2345 6769",
    country: "Belgium",
    isIbanValid: true
  }
];
```

## To improve

The IBAN is defined differently from one country to another (the length differ), so you should have different regex for each country, i tried to bring together the maximum of country, but there is so much ...

you can check if your country is supported:

```js
const isCountryTaken = isCountrySupported("France");
// result : True
```

And you can help by adding for a country that is not in lib easliy :

- add the country to the file countries.js
- add the regex to recognize him in regex.js
- run all test to avoid a regression
- and finally do a PR

## Supported countries

you can all supported countries by

```js
const countries = getCountries();
```

<details>
  <summary>The result</summary>

```js
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
```

</details>
