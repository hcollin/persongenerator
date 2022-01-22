import { convertNamePartsToString, generaterRandomName, getRandomNameInParts, getRandomNames } from "./randomName";

describe("Test random name generator", () => {
	it("Get Random name with 2 first names and a Letter", () => {
		const n = generaterRandomName({
            format: ["First", "First", "Letter", "Family"]
        });

        expect(n).not.toBeUndefined();

	});

    it("Multiple names", () => {
        const ns = getRandomNames({
            count: 50
        });

        expect(ns.length).toBe(50);
    });

    it("Get Name in parts", () => {
        const n = getRandomNameInParts({
            format: ["First", "Letter", "Family"],
        });

        expect(n.length).toBe(3);
        expect(n[0][0]).toBe("en");
        expect(n[1][0]).toBe("en");
        expect(n[2][0]).toBe("en");

        expect(n[1][1].length).toBe(2);


        const ns = convertNamePartsToString(n);

        expect(ns).toBe(`${n[0][1]} ${n[1][1]} ${n[2][1]}`);

    });
});
