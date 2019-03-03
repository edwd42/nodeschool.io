require('jasmine');
const math = require('../../javascripting/function-arguments');

describe('math', () => {

    it('return the value obtained from multiplying ', () => {
        const expected = 4140;
        const actual = math(53,61,67);
        console.log("expected === ", expected);
        console.log("actual === ", actual);
  
        expect(actual).toEqual(expected);
      });
})
