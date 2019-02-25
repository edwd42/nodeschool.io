require('jasmine');
const numberToString = require('../../javascripting/number-to-string');

describe('Numbers', () => {
    it('should return a number', () => {
        const expected = "1.5";
        const actual = numberToString(1.5);
  
        expect(actual).toBe(expected);
      });
})