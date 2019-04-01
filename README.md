# IBAN-Recognition

[![GitHub version](https://badge.fury.io/gh/AmineVolk%2Fiban-recognition.svg)](https://badge.fury.io/gh/AmineVolk%2Fiban-recognition)
[![npm version](https://badge.fury.io/js/iban-recognition.svg)](https://badge.fury.io/js/iban-recognition)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/AmineVolk/iban-recognition/master.svg?style=flat-square)](https://codecov.io/gh/<AmineVolk>/iban-recognition/)

Iban-recognition allows you to extract an iban from any text and it also gives you more informations such as:

- The country where the iban belongs
- The iban's validity.

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

An IBAN can be defined differently from one country to another, most of them can be distinguish by their length, that's why each country should have a different regex, I tried to gather as much countries as I could, but as you know there's a lot of them so..you can guess the rest.

You can check if your country is supported as follow:

```js
const isCountryTaken = isCountrySupported("France");
// result : True
```

And if you want to help, you can add your country by following these steps:

- Add the country to the file countries.js
- Add the regex to recognize it in regex.js
- Run all the tests to avoid a regression
- And finally do a PR

## Supported countries

If you want to have the list of supported countries, you should do as follow:

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
