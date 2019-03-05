require('jasmine');
const numLines = require('../num_lines');

describe('numLines', () => {

    it('prints the number of newlines (\n) in a file to the console', () => {

        const expected = 18;
        const actual = numLines;
        console.log("expected === ", expected);
        console.log("actual === ", actual);
  
        expect(expected).toBe(actual);
      });
})

/**
 * this test verifies num_lines.js counts then number of newlines (\n) in a file
 */