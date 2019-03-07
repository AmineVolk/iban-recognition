// when we have regexN, the N is the length for a valid iban in the given country
// for example for frenche we have an iban that have 27 legth

//NO == Norway
let regex15 =
  "(NO)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{3}|(NO)[0-9A-Z]{13}";

// BE == Belgium
let regex16 =
  "(BE)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}|(BE)[0-9A-Z]{14}";

// DK == Denmark | FO == Faroe Islands | FI == Finland | GL == Groenland (DK) | NL == Netherlands
let regex18 =
  "(DK|FO|FI|GL|NL)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{2}|(DK|FO|FI|GL|NL)[0-9A-Z]{16}";

// MK == Macédoine | SI == Slovenia
let regex19 =
  "(MK|SI)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{3}|(MK|SI)[0-9A-Z]{17}";

// BA == Bosnia and Herzegovina | EE == Estonia | KZ == Kazakhstan | LT == Lithuania | LU == luxembourg| AT == Austria
let regex20 =
  "(BA|EE|KZ|LT|LU|AT)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}|(BA|EE|KZ|LT|LU|AT)[0-9A-Z]{18}";

// HR == Croatia| LI == liechtenstein | LV == Latvia| CH == Swiss
let regex21 =
  "(HR|LI|LV|CH)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{1}|(HR|LI|LV|CH)[0-9A-Z]{19}";

// BD == Bangladesh | DE == Germany | IE == Ireland | ME == Montenegro | RS == Serbia| GB == Royaume-Uni (Grande-Bretagne)
let regex22 =
  "(BG|DE|IE|ME|RS|GB)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{2}|(BG|DE|IE|ME|RS|GB)[0-9A-Z]{20}";

// GI == Gibraltar| IL == Israel
let regex23 =
  "(GI|IL)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{3}|(GI|IL)[0-9A-Z]{21}";

// AD == Andorra | CZ == Czech republic | SA == South Africa | RO == Romania | SK == Slovakia| ES == Spain| SE == Sweden| TN == Tunisie
let regex24 =
  "(AD|CZ|SA|RO|SK|ES|SE|TN)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}|(AD|CZ|SA|RO|SK|ES|SE|TN)[0-9A-Z]{22}";

// PT == Portugal
let regex25 =
  "(PT)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{1}|(PT)[0-9A-Z]{23}";

// IS == Iceland | TR == Turkey
let regex26 =
  "(IS|TR)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{2}|(IS|TR)[0-9A-Z]{24}";

// FR == France | GR == Greece | IT == Italy | MC == Monaco| SM == Saint Marin
let regex27 =
  "(FR|GR|IT|MC|SM)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{3}|(FR|GR|IT|MC|SM)[0-9A-Z]{25}";

// AL == Albania | CY == Cyprus | HU == Hungary | LB == Lebanon | PL == Poland
let regex28 =
  "(AL|CY|HU|LB|PL)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}|(AL|CY|HU|LB|PL)[0-9A-Z]{26}";

// MU == Maurice
let regex30 =
  "(MU)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{2}|(MU)[0-9A-Z]{28}";

// MT == Malta
let regex31 =
  "(MT)[0-9A-Z]{2}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{4}[  /-][0-9A-Z]{3}|(MT)[0-9A-Z]{29}";

const regex = new RegExp(
  `(${regex15}|${regex16}|${regex18}|${regex19}|${regex20}|${regex21}|${regex22}|${regex23}|${regex24}|${regex25}|${regex26}|${regex27}|${regex28}|${regex30}|${regex31})`,
  "gm"
);

module.exports = {
  regex
};
