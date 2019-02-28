require('jasmine');
const arrayValue = require('../../javascripting/accessing-array-values');

describe('arrayValue', () => {

    it('should return an array element', () => {
        let food = ['apple', 'pizza', 'pear'];
        const expected = 'pizza';
        const actual = arrayValue(food);
        console.log(expected, actual);
  
        expect(actual).toBe(expected);
      });
})