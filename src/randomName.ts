import { arnd, chance } from "rndlib";
import { DATACONFIGS, loadNames } from "./data/loadData";
import { Language, NameData } from "./models/iName";
import { Gender } from "./models/iPerson";

export type NameFormatType = "First" | "Family" | "Letter";

export interface NameOptions {
	gender?: Gender;
	lang?: Language;
	format?: NameFormatType[];
}

export interface NamesOptions extends NameOptions {
	count: number;
	unique?: boolean;
}

export function generaterRandomName(options?: NameOptions): string {
	const opts: NameOptions = {
		gender: arnd(["M", "F"]),
		lang: DATACONFIGS.defaultLanguage,
		format: ["First", "Family"],
		...options,
	};

	const names = loadNames(opts.lang);

	const fName = opts.gender === "M" ? names.male : opts.gender === "F" ? names.female : names.male.concat(names.female);

	const name = opts.format.reduce((name: string, type: NameFormatType) => {
		if (type === "First") {
			return `${name} ${arnd(fName)[1]}`;
		}
		if (type === "Family") {
			return `${name} ${arnd(names.family)[1]}`;
		}
		if (type === "Letter") {
			return `${name} ${arnd(names.letters)}.`;
		}
		return name;
	}, "");

	return name;
}

export function getRandomNameInParts(options?: NameOptions): NameData[] {
	const opts: NameOptions = {
		gender: arnd(["M", "F"]),
		lang: DATACONFIGS.defaultLanguage,
		format: ["First", "Family"],
		...options,
	};

	const names = loadNames(opts.lang);

	const fName = opts.gender === "M" ? names.male : opts.gender === "F" ? names.female : names.male.concat(names.female);

	const name = opts.format.reduce((name: NameData[], type: NameFormatType) => {
		if (type === "First") {
			name.push(arnd(fName));
		}
		if (type === "Family") {
			name.push(arnd(names.family));
		}
		if (type === "Letter") {
			name.push(["en", `${arnd(names.letters)}.`, 1]);
		}
		return name;
	}, []);

	return name;
}

export function getRandomNames(options?: NamesOptions): string[] {
	const opts: NamesOptions = {
		gender: arnd(["M", "F"]),
		lang: DATACONFIGS.defaultLanguage,
		count: 2,
		unique: true,
		...options,
	};

	const names: string[] = [];
	while (names.length < opts.count) {
		const n = generaterRandomName(options);
		if (!names.includes(n)) {
			names.push(generaterRandomName(options));
		}
	}

	return names;
}

export function getRandomNamesInParts(options?: NamesOptions): string[] {
	const opts: NamesOptions = {
		gender: arnd(["M", "F"]),
		lang: DATACONFIGS.defaultLanguage,
		count: 2,
		unique: true,
		...options,
	};

	const names: string[] = [];
	while (names.length < opts.count) {
		const n = generaterRandomName(options);
		if (!names.includes(n)) {
			names.push(generaterRandomName(options));
		}
	}

	return names;
}


export function convertNamePartsToString(nameParts: NameData[]): string {


    return nameParts.reduce((name: string, part: NameData) => {
        return `${name} ${part[1]}`;
    }, "").trim();

}

export function getRandomFormat(): NameFormatType[] {
    const names: NameFormatType[] = ["First"];
	if (chance(33)) {
		if (chance(60)) {
			names.push("Letter");
		} else {
			names.push("First");

			if (chance(33)) {
				names.push("First");
			}
		}
	}
    names.push("Family");

    return names;
}
