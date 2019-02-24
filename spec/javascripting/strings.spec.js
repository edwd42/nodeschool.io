require('jasmine');
const someString = require('../../javascripting/strings');

describe('Strings', () => {
    it('should return some string', () => {
        const expected = 'some string';
  
        expect(someString(expected)).toBe('some string');
      });
})
