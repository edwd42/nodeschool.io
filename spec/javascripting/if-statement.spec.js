require('jasmine');
const ifStatement = require('../../javascripting/if-statement');

describe('if-statement', () => {
    it('should return a string', () => {
        const expected = "The fruit name has more than five characters.";
        const actual = ifStatement('orange');
        console.log(actual);
        expect(actual).toBe(expected);
      });
})