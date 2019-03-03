require('jasmine');
const numbers = require('../../javascripting/numbers');

describe('Numbers', () => {
    it('should return a number', () => {
        const expected = 123456789;
        const actual = numbers(123456789);
  
        expect(actual).toBe(expected);
      });
})