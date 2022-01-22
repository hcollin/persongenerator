# Random Person Generator

This library Generates a random person with following information in it

-   **name** contains the full name of the person
-   **nameParts** contains the name in parts
-   **birthday** contains an array with three numbers which represent the day, month and year
-   **gender** contains one of three options M, F or O.


```TypeScript 
import {generateRandomPerson} from "persongenerator";
const person: RandomPerson = generateRandomPerson();
```

# Usage

## Install

```
npm i persongenerator
```

## Get a random person

```TypeScript
import {generateRandomPerson} from "persongenerator";

const person = generateRandomPerson({
    lang: "fi",
    gender: "M",
    bornBetween: [1960, 2010],
    nameFormat: ["First", "First", "Letter", "Family"],
});
```

This function takes an options object which can be used to configure certain aspects of the generator.

-   **lang**, "en"|"fi", Change the language of the name generator
-   **gender**, "M"|"F"|"O", change the gender that affects the name generator. O (like other) combines names from both M and F. As a default the value is randomized.
-   **bornBetween**, [number, number], the birthday is between these years.
-   **nameFormat**, "First"|"Family"|"Letter"[], arrange the format of the name that is generated like ["First", "Letter", "Family"]

## Get a random name

```TypeScript
import {generateRandomPerson} from "persongenerator";

const person = generateRandomPerson({
    lang: "en",  // This is the default language
    gender: "F",  // If no gender is provided it will be randomized
    format: ["First", "Family"] // this is also the default format
});
```
