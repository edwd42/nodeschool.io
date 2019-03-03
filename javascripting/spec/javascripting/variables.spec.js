require('jasmine');
const example = require('../../javascripting/variables');

describe('Variables', () => {
    it('should return some string', () => {
        const expected = 'some string';
  
        expect(example(expected)).toBe('some string');
      });
})
