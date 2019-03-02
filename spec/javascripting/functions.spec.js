require('jasmine');
const eat = require('../../javascripting/functions');

describe('eat', () => {

    it('return the food argument ', () => {
        const expected = 'bananas tasted really good.';
        const actual = eat('bananas');
        console.log("expected === ", expected);
        console.log("actual === ", actual);
  
        expect(actual).toEqual(expected);
      });
})
