require('jasmine');
const roundingNumbers = require('../../javascripting/rounding-numbers');

describe('Numbers', () => {
    it('should return a number', () => {
        const expected = 2;
        const actual = roundingNumbers(1.5);
  
        expect(actual).toBe(expected);
      });
})