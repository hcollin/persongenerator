import { Gender } from "@App/models/iPerson";
import { arnd } from "rndlib";

export function getRandomGender(): Gender {
	const g: Gender = arnd(["M", "M", "M", "M", "M", "F", "F", "F", "F", "F", "O"]);
	return g;
}
