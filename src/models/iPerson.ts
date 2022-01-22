


export type Gender = "M"|"F"|"O";

export interface RandomPerson {
    name: string;
    nameParts: string[];
    gender: Gender;
    
    /**
     *[day, month, year]
     */
    birthday: [number, number, number]; 

}