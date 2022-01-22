import { rnd } from "rndlib";


export interface BirthdayOptions {
    fromYear?: number;
    toYear?: number;
}

export function getRandomBirthday(options?: BirthdayOptions): [number, number, number] {

    const opts: BirthdayOptions = {
        fromYear: 1900,
        toYear: new Date().getFullYear(),
        ...options
    };

    const monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const year = rnd(opts.fromYear, opts.toYear);

    const month = rnd(1, 12);

    const day = rnd(1, monthLength[month-1]);

    return [day, month, year];

}