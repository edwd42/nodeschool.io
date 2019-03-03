require('jasmine');
const scope = require('../../javascripting/scope');

describe('scope', () => {

    it('return the output is a: 1, b: 8, c: 6 ', () => {
        // let a = 1, b = 8, c = 6;
        // const expected = "a: " + a.toString() + ", b: " + b.toString() + ", c: " + c.toString() + '"';
        const expected = "a: 1, b: 8, c: 6";
        const actual = scope(1,8,6);
        console.log("expected === ", expected);
        console.log("actual === ", actual);
  
        expect(expected).toBe(actual);
      });
})
