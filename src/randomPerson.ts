import { arnd, chance } from "rndlib";
import { getRandomBirthday } from "./data/common/birthday";
import { getRandomGender } from "./data/common/gender";
import { DATACONFIGS } from "./data/loadData";
import { Language, NameData } from "./models/iName";
import { Gender, RandomPerson } from "./models/iPerson";
import { convertNamePartsToString, getRandomFormat, getRandomNameInParts, NameFormatType } from "./randomName";

export interface PersonOptions {
	lang?: Language;
	gender?: Gender;
	nameFormat?: NameFormatType[];
    bornbetween?: [number, number];
}

export function generateRandomPerson(options?: PersonOptions): RandomPerson {
	const opts: PersonOptions = {
		lang: DATACONFIGS.defaultLanguage,
		gender: getRandomGender(),
		nameFormat: getRandomFormat(),
        bornbetween: [new Date().getFullYear() - 80, new Date().getFullYear()],
		...options,
	};

	const name = getRandomNameInParts({ lang: opts.lang, gender: opts.gender, format: opts.nameFormat });

	const bday = getRandomBirthday({fromYear: opts.bornbetween[0], toYear: opts.bornbetween[1]});

	return {
		name: convertNamePartsToString(name),
		nameParts: name.map((n: NameData) => n[1]),
		birthday: bday,
		gender: opts.gender,
	};
}
