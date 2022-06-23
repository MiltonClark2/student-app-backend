const {repeatNTimesWithSpace, capitalizeFirstLetter} = require('./stringUtils');

describe("take a string and number and repeat string same number of times separated by spaces", () => {

    it("handles an empty string", () => {
        expect(repeatNTimesWithSpace('', 0)).toBe('');
        expect(repeatNTimesWithSpace('', 5)).toBe('');
    });

    it("handles a string with 1 or more character", () => {
        expect(repeatNTimesWithSpace('a', 1)).toBe('a');
        expect(repeatNTimesWithSpace('a', 5)).toBe('a a a a a');
        expect(repeatNTimesWithSpace('abc, 3')).toBe('abc abc abc');
    });
});

describe("take a string and capitalize the first letter", () => {
    
    it("handles an empty string", () => {
        expect(capitalizeFirstLetter('')).toBe('');
    });

    it("handles strings with 1 character", () => {
        expect(capitalizeFirstLetter('a')).toBe('A');
        expect(capitalizeFirstLetter('g')).toBe('G');
    });

    it("handles strings with 2 or more characters", () => {
        expect(capitalizeFirstLetter('go')).toBe('Go');
        expect(capitalizeFirstLetter('ana')).toBe('Ana');
        expect(capitalizeFirstLetter('green')).toBe('Green');
        expect(capitalizeFirstLetter('happy')).toBe('Happy');
    })
});