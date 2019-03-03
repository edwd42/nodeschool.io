require('jasmine');
const someString = require('../../javascripting/string-length');

describe('Strings', () => {
    it('should return the length of argument passed in', () => {
        const expected = 'some string';
        console.log(expected.length);
  
        expect(someString(expected)).toBe(expected.length);
      });
})
