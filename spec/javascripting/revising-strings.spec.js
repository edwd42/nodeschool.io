require('jasmine');
const revisingStrings = require('../../javascripting/revising-strings');

describe('Revising-Strings', () => {
    it('should replace the argument', () => {
        const expected = 'pizza is wonderful';
        const actual = revisingStrings('pizza is alright');
        expect(actual).toBe(expected);
      });
})
