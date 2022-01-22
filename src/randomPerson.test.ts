import { RandomPerson } from "./models/iPerson";
import { generateRandomPerson } from "./randomPerson";

describe("Random Person", () => {
	it("Random Person", () => {
		const ps: RandomPerson[] = [];
		for (let i = 0; i < 10; i++) {
			ps.push(generateRandomPerson({ lang: "fi", bornbetween: [1990, 1995] }));
		}

		expect(ps.length).toBe(10);
		ps.forEach((p: RandomPerson) => {
			expect(p.birthday[2]).toBeGreaterThanOrEqual(1990);
			expect(p.birthday[2]).toBeLessThanOrEqual(1995);
		});
	});
});
