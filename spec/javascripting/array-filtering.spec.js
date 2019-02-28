require('jasmine');
const filtered = require('../../javascripting/array-filtering');

describe('filtered', () => {

    it('should return a filtered array', () => {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expected = [ 2, 4, 6, 8, 10 ];
        const actual = filtered(numbers);
        console.log("expected === ", expected);
        console.log("actual === ", actual);
  
        expect(actual).toEqual(expected);
      });
})