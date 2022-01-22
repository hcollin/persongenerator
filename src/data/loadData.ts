import { Language, NameData } from "@App/models/iName";

import { fiMaleNames } from "./fi/maleNames";
import { fiFemaleNames } from "./fi/femaleNames";
import { fiLastNames } from "./fi/lastNames";
import { fiLetters } from "./fi/letters";
import { enFamilyNames } from "./en/familyNames";
import { enLetters } from "./en/letters";
import { enFemaleNames } from "./en/femaleNames";
import { enMaleNames } from "./en/maleNames";

export interface Names {
	male: NameData[];
	female: NameData[];
	family: NameData[];
	letters: string[];
}

export interface DefaultConfig {
	supportedLanguages: Language[],
	defaultLanguage: Language
}

export const DATACONFIGS: DefaultConfig = {
	supportedLanguages: ["fi", "en"],
	defaultLanguage: "en",
};

export function loadNames(lang?: Language): Names {
	const l = (lang || DATACONFIGS.defaultLanguage);

	if (!DATACONFIGS.supportedLanguages.includes(l)) {
		throw new Error(`Language ${l} is not supported`);
	}

	switch (l) {
		case "fi":
			return {
				male: popularityMultiplier(fiMaleNames),
				female: popularityMultiplier(fiFemaleNames),
				family: popularityMultiplier(fiLastNames),
				letters: fiLetters,
			};
		case "en":
			return {
				male: popularityMultiplier(enMaleNames),
				female: popularityMultiplier(enFemaleNames),
				family: popularityMultiplier(enFamilyNames),
				letters: enLetters,
			};
	}

}

function popularityMultiplier(n: NameData[]): NameData[] {
	return n.reduce((ns: NameData[], n: NameData) => {
		for (let i = 0; i < n[2]; i++) {
			ns.push(n);
		}
		return ns;
	}, []);
}
