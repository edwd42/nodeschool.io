require('jasmine');
const forLoop = require('../../javascripting/for-loop');

describe('if-statement', () => {
    it('should return a string', () => {
        const expected = 45;
        const actual = forLoop();
        console.log(actual);
        expect(actual).toBe(expected);
      });
})