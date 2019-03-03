require('jasmine');
const looping = require('../../javascripting/looping-through-arrays');

describe('filtered', () => {

    it('should return a filtered array', () => {
        let pets = ['cat', 'dog', 'rat'];
        const expected = [ 'cats', 'dogs', 'rats' ];
        const actual = looping(pets);
        console.log("expected === ", expected);
        console.log("actual === ", actual);
  
        expect(actual).toEqual(expected);
      });
})
